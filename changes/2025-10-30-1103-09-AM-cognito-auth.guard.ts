import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { verify, JwtPayload } from 'jsonwebtoken';
import { JwksClient } from 'jwks-rsa';

@Injectable()
export class CognitoAuthGuard implements CanActivate {
  private jwksClient: JwksClient;

  constructor(private readonly configService: ConfigService) {
    const userPoolId = this.configService.get<string>('cognito.userPoolId');
    const region = this.configService.get<string>('cognito.region');
    
    this.jwksClient = new JwksClient({
      jwksUri: `https://cognito-idp.${region}.amazonaws.com/${userPoolId}/.well-known/jwks.json`,
      cache: true,
      rateLimit: true,
    });
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers['authorization'];
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new UnauthorizedException('El header de autorización no existe o es inválido');
    }
    
    const token = authHeader.replace('Bearer ', '');
    
    try {
      const decoded = await this.verifyToken(token);
      
      request.user = decoded;
      return true;
    } catch (err) {
      throw new UnauthorizedException('Token de autorización inválido o expirado');
    }
  }

  private async verifyToken(token: string): Promise<JwtPayload> {
    return new Promise((resolve, reject) => {
      const decodedToken = this.decodeToken(token);
      
      if (!decodedToken || !decodedToken.header || !decodedToken.header.kid) {
        return reject(new Error('Token inválido'));
      }

      this.jwksClient.getSigningKey(decodedToken.header.kid, (err, key) => {
        if (err) {
... (truncated for brevity)