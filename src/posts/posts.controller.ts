import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { PostsService } from './posts.service'
import { CreatePostDTO, UpdatePostDTO } from './dtos/index.dto'
import { ApiTags, ApiResponse } from '@nestjs/swagger'

@ApiTags('文章')
@Controller('posts')
export class PostsController {
    constructor(
        private readonly PostsService: PostsService
    ) { }

    @Get()
    async findAll() {
        return '首页'
    }

    @Post()
    // @ApiResponse({ status: 201, description: '创建成功' })
    // @ApiResponse({ status: 403, description: '创建失败' })
    create(@Body() createPostDTO: CreatePostDTO) {

    }

    @Put()
    updatePost(@Body() updatePostDTO: UpdatePostDTO) {

    }
}
