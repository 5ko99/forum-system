export class Question {
    private questionAuthor: string;
    private questionTitle: string;
    private questionText: string;
    private questionDate: Date;
    public constructor(_questionAuthor: string,  _questionTitle: string, _questionText: string, ) {
        this.questionAuthor = _questionAuthor;
        this.questionTitle = _questionTitle;
        this.questionText = _questionText;
        this.questionDate = new Date();
    }

    // Getters
    public getAuthor(): string {
        return this.questionAuthor;
    }

    public getTitle(): string {
        return this.questionTitle;
    }

    public getText(): string {
        return this.questionText;
    }

    public getDate(): Date {
        return this.questionDate;
    }

    // Setters
    public setAuthor(author: string): void {
        this.questionAuthor = author;
    }

    public setTitle(title: string): void {
        this.questionTitle = title;
    }

    public setText(text: string): void {
        this.questionText = text;
    }

    public setDate(date: Date): void {
        this.questionDate = date;
    }

}
