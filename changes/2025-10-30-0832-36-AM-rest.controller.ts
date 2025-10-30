import { Controller, Get, Logger } from '@nestjs/common';
import { ApiExcludeController } from '@nestjs/swagger';

@ApiExcludeController()
@Controller('resources')
export class RestController {
  private readonly logger = new Logger(RestController.name);

  @Get()
  health() {
    const msg = "It's running";
    this.logger.log(msg);
    return msg;
  }
}