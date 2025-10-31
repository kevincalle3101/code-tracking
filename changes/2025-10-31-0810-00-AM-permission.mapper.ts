import { Injectable } from '@nestjs/common';
import { PermissionResponseDto } from '../dtos/permission-response.dto';
import type { UserPermissionResponse } from 'src/domain/services/create-permission.service';

@Injectable()
export class PermissionMapper {

    public toDto(domainResponse: UserPermissionResponse): PermissionResponseDto {
        const dto = new PermissionResponseDto();
        
        dto.user = {
            id: domainResponse.user.id,
            email: domainResponse.user.email,
            profile: domainResponse.user.profile ? {
                id: domainResponse.user.profile.id,
                name: domainResponse.user.profile.name
            } : null
        };
        
        dto.global_permissions = domainResponse.global_permissions;
        
        dto.company_memberships = domainResponse.company_memberships.map(membership => ({
            company_id: membership.company_id,
            company_name: membership.company_name,
            role: membership.role,
            permissions: membership.permissions
        }));
        
        return dto;
    }
}