import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateAuditDto } from 'src/application/dtos/create-audit.dto';
import { CreateAuditService } from 'src/application/services/create-audit.service';
import { Audit } from 'src/domain/entities/audit.entity';

@Controller('audit')
export class AuditController {
    constructor(private readonly createAuditService: CreateAuditService) { }

    @Post()
    create(@Body() createAuditDto: CreateAuditDto): Promise<Audit> {
        return this.createAuditService.execute(createAuditDto)
    }

    @Get('/all')
    getAll(): Promise<Audit[]> {
        return this.createAuditService.getAll()
    }
}