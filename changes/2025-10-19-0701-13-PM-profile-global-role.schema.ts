import { EntitySchema } from 'typeorm';
import { ProfileGlobalRole } from 'src/domain/entities/profile-global-role.entity';

export const ProfileGlobalRoleSchema = new EntitySchema<ProfileGlobalRole>({
    name: 'ProfileGlobalRole',
    target: ProfileGlobalRole,
    columns: {
        profileId: { type: 'int', primary: true },
        globalRoleId: { type: 'int', primary: true }
    }
});