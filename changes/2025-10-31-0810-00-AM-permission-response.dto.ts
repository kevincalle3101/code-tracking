import { ApiProperty } from '@nestjs/swagger';

class UserProfileDto {
    @ApiProperty({ description: 'ID del perfil', example: 1 })
    id: number;

    @ApiProperty({ description: 'Nombre del perfil', example: 'Test Profile' })
    name: string;
}

class UserDto {
    @ApiProperty({ description: 'ID del usuario', example: 1 })
    id: number;

    @ApiProperty({ description: 'Email del usuario', example: 'user@example.com' })
    email: string;

    @ApiProperty({ 
        description: 'Perfil asociado al usuario (puede ser null)', 
        type: UserProfileDto, 
        nullable: true 
    })
    profile: UserProfileDto | null;
}

class CompanyMembershipDto {
    @ApiProperty({ description: 'ID de la empresa', example: 1 })
    company_id: number;

    @ApiProperty({ description: 'Nombre de la empresa', example: 'Test Company' })
    company_name: string;

    @ApiProperty({ description: 'Rol del usuario en la empresa', example: 'Company Admin' })
    role: string;

    @ApiProperty({
        description: 'Permisos específicos en esta empresa',
        type: [String],
        example: ['listing:view_all', 'company:edit']
    })
    permissions: string[];
}

export class PermissionResponseDto {
    @ApiProperty({ 
        description: 'Información del usuario autenticado',
        type: UserDto
    })
    user: UserDto;

... (truncated for brevity)