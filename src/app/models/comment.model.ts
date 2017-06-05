export class Comment {
    // TODO: Change word post to comment
    private postAuthor: string;
    private postAuthorUID: string;
    private postText: string;
    private postDate: Date;
    private postRating: number;
    public constructor(_postAuthor: string, _postAuthorUID: string, _postText: string, ) {
        this.postAuthor = _postAuthor;
        this.postAuthorUID = _postAuthorUID;
        this.postText = _postText;
        this.postDate = new Date();
        this.postRating = 0;
    }

    // Getters
    public getAuthor(): string {
        return this.postAuthor;
    }

    public getAuthorUID(): string {
        return this.postAuthorUID;
    }

    public getText(): string {
        return this.postText;
    }

    public getDate(): Date {
        return this.postDate;
    }

    public getRating(): number {
        return this.postRating;
    }

    // Setters
    public setAuthor(author: string): void {
        this.postAuthor = author;
    }

    public setAuthorUID(authorUID: string): void {
        this.postAuthorUID = authorUID;
    }

    public setText(text: string): void {
        this.postText = text;
    }

    public setDate(date: Date): void {
        this.postDate = date;
    }

    public setRating(rating: number): void {
        this.postRating = rating;
    }

}
