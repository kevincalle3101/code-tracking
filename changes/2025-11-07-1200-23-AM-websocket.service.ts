import { Injectable, Logger } from '@nestjs/common';
import { EventsGateway } from './events.gateway';

/**
 * Service to handle WebSocket notifications
 * Provides a clean interface for other services to emit WebSocket events
 */
@Injectable()
export class WebSocketService {
  private readonly logger = new Logger(WebSocketService.name);

  constructor(private readonly eventsGateway: EventsGateway) {}

  /**
   * Notify a user that their clip has been processed and is ready
   * @param userId - The ID of the user who owns the clip
   * @param clipData - The processed clip data
   */
  notifyClipProcessed(userId: string, clipData: {
    clipId: string;
    videoUrl: string;
    thumbnailUrl: string;
    duration: number;
  }): void {
    try {
      const sent = this.eventsGateway.emitClipProcessed(userId, clipData);
      
      if (sent) {
        this.logger.log(
          `Successfully sent clip-processed notification to user ${userId} for clip ${clipData.clipId}`
        );
      } else {
        this.logger.warn(
          `User ${userId} is not connected. Notification not sent for clip ${clipData.clipId}`
        );
        // TODO: In production, you might want to:
        // 1. Store notification in database for later retrieval
        // 2. Send push notification instead
        // 3. Use message queue for retry logic
      }
    } catch (error) {
      this.logger.error(
        `Failed to send clip-processed notification to user ${userId}: ${error.message}`,
        error.stack
      );
    }
  }

  /**
   * Send a test broadcast to all connected clients
... (truncated for brevity)