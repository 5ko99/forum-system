export class Post {
    private postAuthor: string;
    private postText: string;
    private postDate: Date;
    private postRating: number;
    public constructor(_postAuthor: string, _postText: string, _postRating: number) {
        this.postAuthor = _postAuthor;
        this.postText = _postText;
        this.postDate = new Date();
        this.postRating = _postRating;
    }

    // Getters
    public getAuthor(): string {
        return this.postAuthor;
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
