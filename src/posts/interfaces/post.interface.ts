import { string } from "@hapi/joi"
import { Document } from 'mongoose'

export interface Post extends Document {
    readonly title: string;

    readonly content: string;

    readonly summary: string;

    readonly posterUrl: string;

    readonly tags: string[];

    readonly pv: number;

    readonly like: number;

    readonly lastModifiedDate: Date;

    readonly createAt: Date;

    readonly updateAt: Date;

    readonly isPublic: Boolean;
}

export type PostDocument = Post & Document