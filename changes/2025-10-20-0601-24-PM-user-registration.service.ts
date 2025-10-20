import { HttpException, HttpStatus } from "@nestjs/common";
import { User } from "../entities/user.entity";
import type { UserRepository } from "../repositories/user.repository";

export class UserRegistrationService {
    constructor(
        private readonly userRepository: UserRepository
    ) { }

    async register(user: User): Promise<{ message: string, data: User }> {
        const existingUser = await this.userRepository.findByEmail(user.email);
        if (existingUser) {
            throw new HttpException(
                `Usuario con email ${user.email} ya existe`,
                HttpStatus.CONFLICT
            );
        }

        const existingCognitoUser = await this.userRepository.findByCognitoSub(user.cognitoSub);
        if (existingCognitoUser) {
            throw new HttpException(
                `Usuario con cognito_sub ${user.cognitoSub} ya existe`,
                HttpStatus.CONFLICT
            );
        }

        const now = new Date();
        user.createdAt = now;
        user.updatedAt = now;
        user.statusId = user.statusId || 1;

        const savedUser = await this.userRepository.save(user);

        const { id, ...userWithoutId } = savedUser;

        return {
            message: "Usuario registrado correctamente",
            data: userWithoutId
        };
    }

    async update(userId: number, userData: Partial<User>): Promise<{ message: string, data: User }> {
        const existingUser = await this.userRepository.findById(userId);
        if (!existingUser) {
            throw new HttpException(
                `Usuario con id ${userId} no encontrado`,
                HttpStatus.NOT_FOUND
            );
        }

... (truncated for brevity)