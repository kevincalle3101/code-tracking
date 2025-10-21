import { Controller, Get, Param, ParseIntPipe, Logger } from '@nestjs/common';
import { GetUserPermissionsService } from 'src/application/services/get-user-permissions.service';

@Controller('permissions')
export class PermissionsController {
    private readonly logger = new Logger(PermissionsController.name);

    constructor(
        private readonly getUserPermissionsService: GetUserPermissionsService
    ) { }

    @Get(':userId')
    async getUserPermissions(@Param('userId', ParseIntPipe) userId: number) {
        this.logger.log(`GET /permissions/${userId} - Solicitando permisos`);
        return await this.getUserPermissionsService.getPermissions(userId);
    }
}