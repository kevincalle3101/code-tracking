export class MediaClip {
    id?: number;
    code?: string
    userId: string
    statusId: number
    videoUrlLq: string
    videoUrlHq: string
    postUrl?: string
    thumbnailUrl?: string
    title: string
    description?: string
    duration?: number
    views?: number
    likes?: number
    createDate?: Date
    updateDate?: Date
    tags?: string[]
    source?: string
    ubigeo?: string

    constructor(
        userId: string,
        statusId: number,
        title: string,
        videoUrlLq: string,
        videoUrlHq: string,
        postUrl?: string,
        thumbnailUrl?: string,
        description?: string,
        duration?: number,
        ubigeo?: string,
        code?: string
    ) {
        this.userId = userId
        this.statusId = statusId
        this.title = title
        this.videoUrlLq = videoUrlLq
        this.videoUrlHq = videoUrlHq
        this.postUrl = postUrl
        this.thumbnailUrl = thumbnailUrl
        this.description = description
        this.duration = duration
        this.ubigeo = ubigeo
        this.code = code
    }
}