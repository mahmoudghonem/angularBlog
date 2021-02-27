export class User {
    _id!: string;
    firstname!: string;
    lastname!: string;
    username!: string;
    email!: string;
    bio!: string;
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