// src/types/express-session.d.ts
import "express-session";

declare module "express-session" {
  interface SessionData {
    passport?: {
      user?: any;  // o define una interfaz User si quieres más estricta
    };
    // Puedes agregar más campos si necesitas, ej:
    // views?: number;
  }
}

// Para que TypeScript lo considere módulo (necesario para augmentation)
export {};