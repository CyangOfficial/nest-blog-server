import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { PostsService } from './posts.service'
import { CreatePostDTO, UpdatePostDTO } from './dtos/index.dto'
import { PostModel, TagsModel } from './models/index.model'
import { ApiTags, ApiResponse, ApiBody } from '@nestjs/swagger'
import { ValidateObjectIdPipe } from '../shared/pipes/validate-object-id.pipe'

@ApiTags('文章详情')
@Controller('post')
export class PostsController {
	constructor(private readonly postsService: PostsService) { }

	// 获取所有文章
	@ApiResponse({ status: 200, description: 'success', type: PostModel })
	@Get()
	async findAll() {
		return this.postsService.findAllPosts()
	}

	// 根据ID查找文章
	@Get(':postId')
	async findOneById(@Param('postId', new ValidateObjectIdPipe()) postId) {
		const post = await this.postsService.findOneById(postId)
		return post
	}

	// 文章访客+1
	@Get('updatePV/:postId')
	async updatePV(@Param('postId', new ValidateObjectIdPipe()) postId) {
		const post = await this.postsService.updatePV(postId)
		return post
	}

	// 获取所有标签
	@ApiBody({ type: TagsModel })
	@Get('tags')
	getTags() {
		const tags = this.postsService.findTags()
	}

	// 创建文章
	@ApiResponse({ status: 200, description: 'success', type: PostModel })
	@Post()
	// @ApiResponse({ status: 201, description: '创建成功' })
	// @ApiResponse({ status: 403, description: '创建失败' })
	create(@Body() postInfo: CreatePostDTO) {
		return this.postsService.createPost(postInfo)
	}

	// 修改文章
	@Put()
	updatePost(@Body() updatePostDTO: UpdatePostDTO) {

	}
}
