export enum OrderStatus {
    UPLOADING = 1,
    UPLOADED = 2,
    PUBLISHED = 3,
    DELETED = 4
}

export const OrderStatusValues: OrderStatus[] = [
    OrderStatus.UPLOADING,
    OrderStatus.UPLOADED,
    OrderStatus.PUBLISHED,
    OrderStatus.DELETED
]

export const ValidStatusDescriptions = {
    [OrderStatus.UPLOADING]: 'UPLOADING',
    [OrderStatus.UPLOADED]: 'UPLOADED',
    [OrderStatus.PUBLISHED]: 'PUBLISHED',
    [OrderStatus.DELETED]: 'DELETED'
}

export const ValidDescriptionValues = Object.values(ValidStatusDescriptions)