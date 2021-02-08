export class Article{
    id!: string;
    title!: string;
    body!: string;
    tags!: string[];
    createdAt!: Date;
    updatedAt!: Date;
    photo!: string;
    cloudinary_id!: string;
    likes!: string[];
    comments!: string[];
    reads!: number[];
    author!: string;
    userId!: string;
    constructor() {
    }
}