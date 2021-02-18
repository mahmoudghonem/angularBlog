import { Comment } from 'src/app/models/commentModel';

export class Article{
    _id!: string;
    title!: string;
    body!: string;
    tags!: string[];
    createdAt!: Date;
    updatedAt!: Date;
    photo!: string;
    cloudinary_id!: string;
    likes!: string[];
    comments!: Comment[];
    reads!: number[];
    author!: string;
    userId!: string;
    constructor() {
    }
}