import { Injectable } from '@nestjs/common';
import { CreateResourceService } from '../../application/services/create-resource.service';

// ADAPTADOR PRIMARIO: Inicia la acción desde un mensaje de SQS.
// Nota: La lógica para conectar y recibir mensajes de SQS (ej: con @ssut/nestjs-sqs)
// se configuraría en el módulo de infraestructura.
@Injectable()
export class SqsListener {
    constructor(private readonly createResourceService: CreateResourceService) {}

    // Este sería el método que manejaría un mensaje
    // @SqsMessageHandler(/** config de la cola */)
    async handleMessage(message: any) {
        console.log('Mensaje SQS recibido:', message);
        
        // Asumimos que el mensaje tiene un cuerpo JSON con el 'name'
        const body = JSON.parse(message.Body);
        const { name } = body;
        
        await this.createResourceService.execute({ name });
    }
}