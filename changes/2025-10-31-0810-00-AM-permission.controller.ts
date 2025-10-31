import { Controller, Get, Req, UseGuards, UnauthorizedException, UseFilters } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags, ApiBearerAuth, ApiExtraModels } from '@nestjs/swagger';
import { CognitoAuthGuard } from '../guards/cognito-auth.guard';
import { PermissionService } from 'src/application/services/permission.service';
import { PermissionResponseDto } from 'src/application/dtos/permission-response.dto';
import type { AuthenticatedRequest } from '../interfaces/authenticated-request.interface';
import { UnknownExceptionFilter } from '../config/exception.filter';

@ApiTags('Permissions')
@ApiExtraModels(PermissionResponseDto)
@Controller('permission')
@UseFilters(new UnknownExceptionFilter())
export class PermissionController {
    constructor(
        private readonly permissionService: PermissionService
    ) { }

    @UseGuards(CognitoAuthGuard)
    @Get()
    @ApiBearerAuth()
    @ApiOperation({ summary: 'Obtener permisos del usuario autenticado' })
    @ApiResponse({ status: 200, description: 'Permisos obtenidos para el usuario autenticado', type: PermissionResponseDto })
    async getUserPermission(@Req() req: AuthenticatedRequest): Promise<PermissionResponseDto> {
        const cognitoSub = req.user?.sub;
        if (!cognitoSub) {
            throw new UnauthorizedException('Cognito sub no encontrado en el token');
        }
        return await this.permissionService.getPermissions(cognitoSub);
    }
}