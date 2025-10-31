import { Audit } from './audit.entity';
import { ClipTag } from './clip-tag.entity';
import { Status } from './status.entity';

export class Clip {
    id?: number;
    code: string
    userId: string
    statusId: number
    videoUrl?: string
    postId?: string
    thumbnailUrl?: string
    title: string
    description?: string
    duration?: number
    views?: number
    likes?: number
    createDate: Date
    updateDate: Date
    tags?: string[]
    source?: string
    ubigeo?: string
    clipTags?: ClipTag[]
    audits?: Audit[]
    status?: Status

}