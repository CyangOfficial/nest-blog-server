import { string } from "@hapi/joi"
import { Document } from 'mongoose'

export interface Post extends Document {
    readonly title: string;

    readonly content: string;

    readonly summary: string;

    readonly postUrl: string;

    readonly tags: string[]

    readonly lastModifiedDate: Date

    readonly createAt: Date

    readonly updateAt: Date

    readonly isPublic: Boolean
}

export type PostDocument = Post & Document