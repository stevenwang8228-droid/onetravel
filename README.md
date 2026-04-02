# ONETRAVEL Backend (Tahap 2)

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy env:
   ```bash
   cp .env.example .env
   ```
3. Generate Prisma client and run migration:
   ```bash
   npm run prisma:generate
   npm run prisma:migrate
   ```
4. Run app:
   ```bash
   npm run start:dev
   ```

## Endpoint

- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/auth/profile` (Bearer token)
