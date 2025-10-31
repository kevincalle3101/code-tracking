import { Profile } from './profile.entity';
import { GlobalRole } from './global-role.entity';

export class ProfileGlobalRole {
    profileId: number;
    globalRoleId: number;
    profile?: Profile;
    globalRole?: GlobalRole;

    constructor(profileId: number, globalRoleId: number) {
        this.profileId = profileId;
        this.globalRoleId = globalRoleId;
    }
}