import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { JwtPayload, verify } from 'jsonwebtoken';

// You should use jwks-rsa or a similar package for production to fetch Cognito public keys dynamically.
// For demo, you can use a hardcoded public key or environment variable.
const COGNITO_JWT_PUBLIC_KEY = process.env.COGNITO_JWT_PUBLIC_KEY || '';

@Injectable()
export class CognitoAuthGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers['authorization'];
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new UnauthorizedException('No token provided');
    }
    const token = authHeader.replace('Bearer ', '');
    try {
      // In production, use jwks-rsa to verify against Cognito's public keys
      const payload = verify(token, COGNITO_JWT_PUBLIC_KEY) as JwtPayload;
      request.user = payload;
      return true;
    } catch (err) {
      throw new UnauthorizedException('Invalid token');
    }
  }
}