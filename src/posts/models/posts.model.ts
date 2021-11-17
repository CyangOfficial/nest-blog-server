import { ApiProperty } from '@nestjs/swagger';
import { PostModel } from './post.model';

export class PostsModel {
  @ApiProperty({ type: String, description: '总计' })
  readonly total: number;

  @ApiProperty({ type: String, description: '页' })
  readonly page: number;

  @ApiProperty({ type: String, description: '页数' })
  readonly pageSize: number;

  @ApiProperty({ type: String, description: '列表' })
  readonly items: PostModel[];
}
