import { Controller, Get } from '@nestjs/common';
import { buildSuccess, ResponseDto } from 'src/application/dtos/response.dto';

@Controller('health')
export class HealthController {
    constructor() { }

    @Get()
    async healthCheck(): Promise<ResponseDto<void>> {
        return buildSuccess('Running');
    }
}