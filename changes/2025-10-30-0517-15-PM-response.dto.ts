export class ResponseDto<T> {
    success: boolean;
    message: string;
    data: T | null;
}

export function buildSuccess<T>(message: string, data?: T): ResponseDto<T> {
    return {
        success: true,
        message,
        data: data ?? null,
    };
}

export function buildError(message: string): ResponseDto<null> {
    return {
        success: false,
        message,
        data: null,
    };
}