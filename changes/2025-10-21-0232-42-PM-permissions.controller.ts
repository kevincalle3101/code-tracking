import { Controller, Get, Req, UseGuards, Logger } from '@nestjs/common';
import { Request } from 'express';
import { CognitoAuthGuard } from '../guards/cognito-auth.guard';
import { GetUserPermissionsService } from 'src/application/services/get-user-permissions.service';

@Controller('permissions')
export class PermissionsController {
    private readonly logger = new Logger(PermissionsController.name);

    constructor(
        private readonly getUserPermissionsService: GetUserPermissionsService
    ) { }

    @UseGuards(CognitoAuthGuard)
    @Get()
    async getUserPermissions(@Req() req: Request) {
        const cognitoSub = req.user?.sub;
        this.logger.log(`GET /permissions - Solicitando permisos para sub: ${cognitoSub}`);
        return await this.getUserPermissionsService.getPermissionsByCognitoSub(cognitoSub);
    }
}