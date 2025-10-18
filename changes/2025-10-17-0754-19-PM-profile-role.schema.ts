import { EntitySchema } from 'typeorm';
import { ProfileRole } from 'src/domain/entities/profile-role.entity';

export const ProfileRoleSchema = new EntitySchema<ProfileRole>({
    name: 'ProfileRole',
    target: ProfileRole,
    columns: {
        profileId: { type: 'int', primary: true },
        roleId: { type: 'int', primary: true }
    }
});