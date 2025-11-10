import * as fs from 'fs';
import * as yaml from 'js-yaml';
import * as path from 'path';

/**
 * Lee el archivo de configuración YAML y popula 'process.env' con los nombres de las colas
 * para que estén disponibles para los decoradores de NestJS antes del arranque de la app.
 */
export function bootstrapEnvironment() {
  try {
    const env = process.env.NODE_ENV || 'dev';
    const filePath = path.join(process.cwd(), 'config', `${env}.yml`);

    if (!fs.existsSync(filePath)) {
      console.warn(`[Bootstrap] Archivo de configuración no encontrado en ${filePath}. Saltando populación de variables de entorno.`);
      return;
    }

    const config = yaml.load(fs.readFileSync(filePath, 'utf8')) as Record<string, any>;

    if (config.queues && Array.isArray(config.queues)) {
      config.queues.forEach((queue: { name: string }) => {
        // Crea una variable de entorno predecible
        const envVarName = queue.name.toUpperCase().replace(/-/g, '_');
        process.env[envVarName] = queue.name;
      });
    }
  } catch (error) {
    console.error('[Bootstrap] Fallo al popular las variables de entorno desde el archivo de configuración.', error);
    process.exit(1); // Detiene la aplicación si la configuración no se puede leer
  }
}