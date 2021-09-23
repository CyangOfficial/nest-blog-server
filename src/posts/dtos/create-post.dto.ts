import { IsString, IsNotEmpty, IsArray, IsDate, IsBoolean } from 'class-validator'
import * as mongoose from 'mongoose'


export class CreatePostDTO {
	@IsString()
	@IsNotEmpty()
	readonly _id: mongoose.Schema.Types.ObjectId;

	@IsString()
	@IsNotEmpty()
	readonly title: string;

	@IsString()
	@IsNotEmpty()
	readonly content: string;

	@IsString()
	@IsNotEmpty()
	readonly summary: string;

	@IsString()
	@IsNotEmpty()
	readonly postUrl: string;

	@IsArray()
	@IsNotEmpty()
	readonly tags: string[]

	@IsDate()
	@IsNotEmpty()
	readonly lastModifiedDate: Date

	@IsBoolean()
	@IsNotEmpty()
	readonly isPublic: Boolean
}



// export class UpdatePostDTO extends OmitType(CreatePostDTO, ['name'] as const) { }
// export class UpdateCatDto extends OmitType(CreatePostDTO, ['name'] as const) {}