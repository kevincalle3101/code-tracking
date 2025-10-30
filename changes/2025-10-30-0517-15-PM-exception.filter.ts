import { ExceptionFilter, Catch, ArgumentsHost, HttpStatus, HttpException } from '@nestjs/common';
import { Response } from 'express';
import { buildError } from 'src/application/dtos/response.dto';

@Catch()
export class UnknownExceptionFilter implements ExceptionFilter {
    catch(exception: Error | HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();

        let status = HttpStatus.INTERNAL_SERVER_ERROR;
        let message = exception.message || 'Error interno del servidor';

        // If it's an HttpException, get the status code
        if (exception instanceof HttpException) {
            status = exception.getStatus();
            const exceptionResponse = exception.getResponse();
            
            // Handle different response formats
            if (typeof exceptionResponse === 'string') {
                message = exceptionResponse;
            } else if (typeof exceptionResponse === 'object' && exceptionResponse && 'message' in exceptionResponse) {
                const msg = (exceptionResponse as any).message;
                message = Array.isArray(msg) 
                    ? msg.join(', ')
                    : String(msg);
            }
        }

        response.status(status).json(buildError(message));
    }
}