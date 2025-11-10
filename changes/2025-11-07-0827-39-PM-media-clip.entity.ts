export class MediaClip {
  code: string;
  userId: string;
  statusId?: number;
  videoUrl?: string;
  thumbnailUrl?: string;
  postId?: string;
  title: string;
  description?: string;
  duration?: number;
  views?: number;
  likes?: number;
  createDate?: Date;
  updateDate?: Date;
  tags: string[];
  source: string;
  ubigeo?: string;

  constructor(params: {
    code?: string;
    userId: string;
    statusId?: number;
    videoUrl: string;
    thumbnailUrl?: string;
    postId?: string;
    title: string;
    description?: string;
    duration?: number;
    views?: number;
    likes?: number;
    createDate?: Date;
    updateDate?: Date;
    tags: string[];
    source: string;
    ubigeo?: string;
  }) {
    Object.assign(this, params);
  }
}

export type UpdateMediaClip = Partial<MediaClip>;