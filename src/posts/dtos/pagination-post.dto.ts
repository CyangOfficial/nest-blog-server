import { IsString, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';
export class PaginationDTO {
  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  public page: number;

  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  public pageSize: number;

  @IsString()
  @IsOptional()
  public title?: string;

  @IsString()
  @IsOptional()
  public tag?: string;
}

// export class UpdatePostDTO extends OmitType(CreatePostDTO, ['name'] as const) { }
// export class UpdateCatDto extends OmitType(CreatePostDTO, ['name'] as const) {}
