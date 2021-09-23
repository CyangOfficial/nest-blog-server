import { IsString, IsNotEmpty, IsArray, IsDate, IsBoolean, IsNumber } from 'class-validator'
// export class UpdatePostDTO {
//     @IsString()
//     @IsNotEmpty()
//     readonly title: string;

//     @IsString()
//     @IsNotEmpty()
//     readonly content: string;

//     @IsString()
//     @IsNotEmpty()
//     readonly summary: string;

//     @IsString()
//     @IsNotEmpty()
//     readonly postUrl: string;

//     @IsArray()
//     @IsNotEmpty()
//     readonly tags: string[]

//     @IsDate()
//     @IsNotEmpty()
//     readonly lastModifiedDate: Date

//     @IsBoolean()
//     @IsNotEmpty()
//     readonly isPublic: Boolean

//     @IsNumber()
//     readonly pv?: Number

//     @IsNumber()
//     readonly like?: Number
// }

import { CreatePostDTO } from './create-post.dto'
export class UpdatePostDTO extends CreatePostDTO {
	@IsNumber()
	@IsNotEmpty()
	readonly pv?: number

	@IsNumber()
	@IsNotEmpty()
	readonly like?: number
}