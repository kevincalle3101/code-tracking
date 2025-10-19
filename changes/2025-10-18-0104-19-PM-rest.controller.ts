import { Body, Controller, Get, Post, Logger } from '@nestjs/common';
import { CreateResourceService } from '../../application/services/create-resource.service';
import { CreateResourceDto } from '../../application/dtos/create-resource.dto';

@Controller('resources')
export class RestController {
  private readonly logger = new Logger(RestController.name);
  constructor(private readonly createResourceService: CreateResourceService) {}

  @Get()
  health() {
    const msg = "It's running";
    this.logger.log(msg);
    return msg;
  }

  @Post()
  create(@Body() createResourceDto: CreateResourceDto) {
    this.logger.log(createResourceDto, 'INPUT');
    return this.createResourceService.execute(createResourceDto);
  }

  @Get("/all")
  getAll() {
    this.logger.log('Loading all resources');
    return this.createResourceService.getAll();
  }
}