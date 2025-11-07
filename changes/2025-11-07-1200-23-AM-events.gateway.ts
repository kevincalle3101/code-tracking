import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
} from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import { Server, Socket } from 'socket.io';

/**
 * WebSocket Gateway for real-time notifications
 * Handles client connections and emits events when video processing completes
 */
@WebSocketGateway({
  cors: {
    origin: '*', // Will be configured properly via environment variables
    credentials: true,
  },
  namespace: '/events',
})
export class EventsGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer()
  server: Server;

  private readonly logger = new Logger(EventsGateway.name);
  
  // Map to track userId -> socketId (in production, use Redis)
  private readonly userSockets = new Map<string, string>();

  afterInit(server: Server) {
    this.logger.log('WebSocket Gateway initialized');
    this.logger.log(`Socket.IO server running on namespace: /events`);
  }

  handleConnection(client: Socket) {
    const userId = client.handshake.query.userId as string;
    const clientId = client.id;

    this.logger.log(`Client connected: ${clientId}`);
    
    if (userId) {
      this.userSockets.set(userId, clientId);
      this.logger.log(`User ${userId} mapped to socket ${clientId}`);
      
... (truncated for brevity)