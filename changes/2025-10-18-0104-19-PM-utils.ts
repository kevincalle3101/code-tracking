export const chunkArray = <T>(arr: T[], size: number): T[][] =>
    arr.reduce<T[][]>(
        (acc, _, i) => (i % size === 0 ? [...acc, arr.slice(i, i + size)] : acc),
        []
    )