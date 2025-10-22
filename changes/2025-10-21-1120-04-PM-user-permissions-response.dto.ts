class UserProfileDto {
    id: number;
    name: string;
}

class UserDto {
    id: number;
    email: string;
    profile: UserProfileDto | null;
}

class CompanyMembershipDto {
    company_id: number;
    company_name: string;
    role: string;
    permissions: string[];
}

export class UserPermissionsResponseDto {
    user: UserDto;
    global_permissions: string[];
    company_memberships: CompanyMembershipDto[];
}