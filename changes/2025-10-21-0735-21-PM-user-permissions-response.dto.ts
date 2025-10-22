import { ApiProperty } from '@nestjs/swagger';

export class UserProfileDto {
    @ApiProperty({ example: 1 })
    id: number;

    @ApiProperty({ example: 'Agente Inmobiliario' })
    name: string;
}

export class UserDto {
    @ApiProperty({ example: 1 })
    id: number;

    @ApiProperty({ example: 'usuario@example.com' })
    email: string;

    @ApiProperty({ type: UserProfileDto, nullable: true })
    profile: UserProfileDto | null;
}

export class CompanyMembershipDto {
    @ApiProperty({ example: 1 })
    company_id: number;

    @ApiProperty({ example: 'Inmobiliaria Sol S.A.C.' })
    company_name: string;

    @ApiProperty({ example: 'Administrador Empresa' })
    role: string;

    @ApiProperty({ 
        type: [String], 
        example: ['listing:create', 'listing:edit_all', 'listing:delete_all'] 
    })
    permissions: string[];
}

export class UserPermissionsResponseDto {
    @ApiProperty({ type: UserDto })
    user: UserDto;

    @ApiProperty({ 
        type: [String], 
        example: ['listing:view_all', 'profile:edit_own'] 
    })
    global_permissions: string[];

    @ApiProperty({ type: [CompanyMembershipDto] })
    company_memberships: CompanyMembershipDto[];
... (truncated for brevity)