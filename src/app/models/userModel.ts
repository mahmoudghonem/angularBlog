export class User {
    id!: string;
    firstname!: string;
    lastname!: string;
    username!: string;
    email!: string;
    createdDate!: Date;
    profiePhoto!: string;
    following!: string[];
    follower!: string[];
    articles!: string[];
    savearticles!: string[];
    constructor() {
    }
}