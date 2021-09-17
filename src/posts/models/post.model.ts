import { ApiProperty } from '@nestjs/swagger';

export class PostModel {
    @ApiProperty({ type: String, description: '文章标题' })
    readonly title: string;

    @ApiProperty({ type: String, description: '文章正文' })
    readonly content: string;

    @ApiProperty({ type: String, description: '文章摘要' })
    readonly summary: string;

    @ApiProperty({ type: String, description: '文章封面' })
    readonly postUrl: string;

    @ApiProperty({ type: [String], description: '归属标签' })
    readonly tags: string[]

    @ApiProperty({ type: Date, description: '最后修改时间' })
    readonly lastModifiedDate: Date

    @ApiProperty({ type: Date, description: '发布时间' })
    readonly createAt: Date

    @ApiProperty({ type: Date, description: '更新时间' })
    readonly updateAt: Date

    @ApiProperty({ type: Boolean, description: '是否公开', default: true })
    readonly isPublic: Boolean

}

