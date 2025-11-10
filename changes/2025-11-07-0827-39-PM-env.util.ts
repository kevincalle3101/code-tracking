export function getRequiredEnv(key: string): string {
  const value = process.env[key];
  if (!value) {
    throw new Error(`La variable de entorno ${key} es obligatoria y no está definida.`);
  }
  return value;
}