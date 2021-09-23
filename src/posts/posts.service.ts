import { Injectable, HttpException, HttpStatus, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose'
import * as mongoose from 'mongoose'
import { Post, } from './interfaces/post.interface'
import { PostModel, TagsModel } from './models/index.model'
import { CreatePostDTO, UpdatePostDTO } from './dtos/index.dto'

@Injectable()
export class PostsService {
	constructor(@InjectModel('Post') private readonly postModel: Model<Post>) { }

	// 查找所有文章
	async findAllPosts(): Promise<PostModel[]> {
		return await this.postModel.find().exec()
	}

	// 根据ID查找文章
	async findOneById(id: string): Promise<PostModel> {
		const itemPost = await this.postModel.findById(id)
		if (!itemPost || itemPost.isPublic === false) {
			throw new NotFoundException('没找到该文章')
		}
		return itemPost
	}

	// 根据ID更新文章
	async updateById(params: UpdatePostDTO): Promise<PostModel> {
		const { _id, ...arg } = params
		return this.postModel.findByIdAndUpdate(_id, arg, { new: true })
	}

	// 找到所有标签
	async findTags(): Promise<TagsModel> {
		const tags = await this.postModel.find().exec()
		return { tags: [''] }
	}

	// 创建文章
	async createPost(post: CreatePostDTO): Promise<PostModel> {
		return await this.postModel.create(post)
	}

	// 更新文章访客量 +1
	async updatePV(id: string): Promise<PostModel> {
		const { pv } = await this.findOneById(id)
		return await this.postModel.findByIdAndUpdate(id, { pv: pv + 1 }, { new: true })
	}

	// 更新文章点赞 +1
	async updateLike(id: string): Promise<PostModel> {
		const { like } = await this.findOneById(id)
		return await this.postModel.findByIdAndUpdate(id, { like: like + 1 }, { new: true })
	}

	// 获取排行榜
	async getRankingList(limit: number): Promise<PostModel[]> {
		return await this.postModel.find({ isPublic: { $ne: false } }).sort({ "like": -1 }).limit(limit)
	}

	// 根据ID删除文章
	async deleteOneById(id: string): Promise<PostModel> {
		return await this.postModel.findByIdAndDelete(id)
	}

	async batchDelete(ids: string): Promise<any[]> {
		await this.postModel.deleteMany({})
	}
}
