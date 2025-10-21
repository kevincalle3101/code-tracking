import { Controller, Get, Req, UseGuards, Logger } from '@nestjs/common';
import { CognitoAuthGuard } from '../guards/cognito-auth.guard';
import { GetUserPermissionsService } from 'src/application/services/get-user-permissions.service';
import type { AuthenticatedRequest } from '../interfaces/authenticated-request.interface';

@Controller('permissions')
export class PermissionsController {
    private readonly logger = new Logger(PermissionsController.name);

    constructor(
        private readonly getUserPermissionsService: GetUserPermissionsService
    ) { }

    @UseGuards(CognitoAuthGuard)
    @Get()
    async getUserPermissions(@Req() req: AuthenticatedRequest) {
        const cognitoSub = req.user?.sub;
        if (!cognitoSub) {
            throw new Error('Cognito sub not found in token');
        }
        this.logger.log(`GET /permissions - Solicitando permisos para sub: ${cognitoSub}`);
        return await this.getUserPermissionsService.getPermissionsByCognitoSub(cognitoSub);
    }
}