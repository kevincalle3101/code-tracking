export class Audit {
    id?: number
    clipId: number
    statusId: number
    body: string
    source: string
    createDate?: Date
    updateDate?: Date

    constructor(clipId: number, statusId: number, body: string, source: string, id?: number) {
        this.clipId = clipId
        this.statusId = statusId
        this.body = body
        this.source = source
        this.id = id
    }
}