import { Controller, Get, Req, UseGuards, UnauthorizedException } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags, ApiBearerAuth, ApiExtraModels } from '@nestjs/swagger';
import { CognitoAuthGuard } from '../guards/cognito-auth.guard';
import { PermissionService } from 'src/application/services/permission.service';
import { UserPermissionResponseDto } from 'src/application/dtos/user-permission-response.dto';
import type { AuthenticatedRequest } from '../interfaces/authenticated-request.interface';

@ApiTags('Permissions')
@ApiExtraModels(UserPermissionResponseDto)
@Controller('permission')
export class PermissionController {
    constructor(
        private readonly permissionService: PermissionService
    ) { }

    @UseGuards(CognitoAuthGuard)
    @Get()
    @ApiBearerAuth()
    @ApiOperation({ summary: 'Obtener permisos del usuario autenticado' })
    @ApiResponse({ status: 200, description: 'Permisos obtenidos para el usuario autenticado', type: UserPermissionResponseDto })
    async getUserPermission(@Req() req: AuthenticatedRequest): Promise<UserPermissionResponseDto> {
        const cognitoSub = req.user?.sub;
        if (!cognitoSub) {
            throw new UnauthorizedException('Cognito sub no encontrado en el token');
        }
        return await this.permissionService.getPermissions(cognitoSub);
    }
}