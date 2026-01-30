import csurf from 'csurf';

/**
 * Configuración de CSRF para proteger formularios y sesiones
 * NO debe usarse en rutas JWT puras
 */
export const csrfProtection = csurf({
  cookie: {
    httpOnly: true,
    sameSite: 'strict',
    secure: process.env.NODE_ENV === 'production',
  }
});

/**
 * Endpoint para obtener token CSRF
 */
export const getCsrfToken = (req, res) => {
  res.json({ csrfToken: req.csrfToken() });
};