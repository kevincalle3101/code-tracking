export class Tag {
    id?: number
    description: string

    constructor(description: string, id?: number) {
        this.description = description
        this.id = id
    }
}