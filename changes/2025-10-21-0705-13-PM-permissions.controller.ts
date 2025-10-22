import { Controller, Get, Req, UseGuards} from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CognitoAuthGuard } from '../guards/cognito-auth.guard';
import { GetUserPermissionsService } from 'src/application/services/get-user-permissions.service';
import type { AuthenticatedRequest } from '../interfaces/authenticated-request.interface';

@Controller('permissions')
export class PermissionsController {
    constructor(
        private readonly getUserPermissionsService: GetUserPermissionsService
    ) { }

    @UseGuards(CognitoAuthGuard)
    @Get()
    @ApiOperation({ summary: 'Obtener permisos del usuario' })
    @ApiResponse({ status: 200, description: 'Permisos obtenidos exitosamente' })
    async getUserPermissions(@Req() req: AuthenticatedRequest) {
        const cognitoSub = req.user?.sub;
        if (!cognitoSub) {
            throw new Error('Cognito sub not found in token');
        }
        return await this.getUserPermissionsService.getPermissionsByCognitoSub(cognitoSub);
    }
}