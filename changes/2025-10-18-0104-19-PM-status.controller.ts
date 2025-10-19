import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { CreateStatusService } from 'src/application/services/create-status.service';
import { CreateStatusDto } from 'src/application/dtos/create-status.dto';
import { Status } from 'src/domain/entities/status.entity';

@Controller('status')
export class StatusController {
    constructor(private readonly createStatusService: CreateStatusService) { }

    @Post()
    create(@Body() createStatusDto: CreateStatusDto) {
        return this.createStatusService.execute(createStatusDto)
    }

    @Put()
    update(@Body() createStatusDto: CreateStatusDto) {
        return this.createStatusService.execute(createStatusDto)
    }

    @Get("/all")
    getAll(): Promise<Status[]> {
        return this.createStatusService.getAll()
    }
}