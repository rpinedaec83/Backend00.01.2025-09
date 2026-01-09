# Postman Collection (Markdown)

## Variables sugeridas
- baseUrl: http://localhost:3000
- accessToken: (se llena despues de /jwt/login)
- csrfToken: (se llena despues de /csrf)

## Session
### POST /session/register
- URL: {{baseUrl}}/session/register
- Headers: Content-Type: application/json
- Body (raw JSON):
```json
{
  "email": "demo@correo.com",
  "password": "secret123",
  "role": "user"
}
```

### POST /session/login
- URL: {{baseUrl}}/session/login
- Headers: Content-Type: application/json
- Body (raw JSON):
```json
{
  "email": "demo@correo.com",
  "password": "secret123"
}
```

### GET /csrf
- URL: {{baseUrl}}/csrf
- Tests (Postman):
```js
pm.environment.set("csrfToken", pm.response.json().csrfToken);
```

### GET /me
- URL: {{baseUrl}}/me

### POST /session/logout
- URL: {{baseUrl}}/session/logout
- Header: X-CSRF-Token: {{csrfToken}}

## JWT
### POST /jwt/login
- URL: {{baseUrl}}/jwt/login
- Headers: Content-Type: application/json
- Body (raw JSON):
```json
{
  "email": "demo@correo.com",
  "password": "secret123"
}
```
- Tests (Postman):
```js
pm.environment.set("accessToken", pm.response.json().accessToken);
```

### GET /jwt/me
- URL: {{baseUrl}}/jwt/me
- Header: Authorization: Bearer {{accessToken}}

### POST /jwt/refresh
- URL: {{baseUrl}}/jwt/refresh

### POST /jwt/logout
- URL: {{baseUrl}}/jwt/logout

## Private/Admin
### GET /private/profile
- URL: {{baseUrl}}/private/profile

### GET /admin/stats
- URL: {{baseUrl}}/admin/stats
- Header (opcion JWT): Authorization: Bearer {{accessToken}}
