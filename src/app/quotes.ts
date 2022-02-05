export class Quotes {
    constructor(public id:number, public quote:string,public author:string,public votes:number){
        this.id =id
        this.quote = quote
        this.author = author
        this.votes = votes
    }
}
