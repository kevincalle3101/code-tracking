import { Tag } from "../entities/tag.entity";

export interface TagRepository {
    findById(id: number): Promise<Tag | null>
    findAll(): Promise<Tag[]>
    save(tag: Tag): Promise<Tag>
    findByDescriptions(descriptions: string[]): Promise<Tag[]>
}
export const TAG_REPOSITORY = 'TAG_REPOSITORY'