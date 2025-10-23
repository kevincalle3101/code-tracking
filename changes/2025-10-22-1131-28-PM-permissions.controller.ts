import { Controller, Get, Req, UseGuards} from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CognitoAuthGuard } from '../guards/cognito-auth.guard';
import { CreateUserPermissionsService } from 'src/application/services/create-user-permissions.service';
import { UserPermissionsResponseDto } from 'src/application/dtos/user-permissions-response.dto';
import type { AuthenticatedRequest } from '../interfaces/authenticated-request.interface';

@Controller('permissions')
export class PermissionsController {
    constructor(
        private readonly createUserPermissionsService: CreateUserPermissionsService
    ) { }

    @UseGuards(CognitoAuthGuard)
    @Get()
    @ApiOperation({ summary: 'Obtener permisos del usuario' })
    @ApiResponse({ status: 200, description: 'Permisos obtenidos exitosamente', type: UserPermissionsResponseDto })
    async getUserPermissions(@Req() req: AuthenticatedRequest): Promise<UserPermissionsResponseDto> {
        const cognitoSub = req.user?.sub;
        if (!cognitoSub) {
            throw new Error('Cognito sub not found in token');
        }
        return await this.createUserPermissionsService.getPermissions(cognitoSub);
    }
}