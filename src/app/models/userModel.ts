export class User {
    id!: string;
    firstname!: string;
    lastname!: string;
    username!: string;
    email!: string;
    createdDate!: Date;
    profilePhoto!: string;
    cloudinary_id!: string;
    following!: string[];
    follower!: string[];
    articles!: string[];
    savearticles!: string[];
    constructor() {
    }
}