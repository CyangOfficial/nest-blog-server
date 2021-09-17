import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose'
import { PostDocument } from './interfaces/post.interface'
import { PostModel } from './models/index.model'
import { CreatePostDTO } from './dtos/index.dto'

@Injectable()
export class PostsService {
    constructor(@InjectModel('Post') private readonly postModel: Model<PostDocument>) { }

    async createPost(post: CreatePostDTO): Promise<PostModel> {
        return this.postModel.create(post)
    }
}
