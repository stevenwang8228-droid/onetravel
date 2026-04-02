# ONETRAVEL

Fondasi aplikasi marketplace travel (Tahap 1) dengan stack:

- **Frontend:** Next.js + TypeScript
- **Backend:** NestJS + TypeScript
- **Database:** PostgreSQL + Prisma
- **Auth:** JWT

Role utama:
- Super Admin
- Travel Partner
- Customer

## Struktur Proyek

```text
onetravel/
├── apps/
│   ├── frontend/                # Next.js app (UI)
│   │   ├── src/app/
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx
│   │   │   └── styles.css
│   │   ├── package.json
│   │   └── tsconfig.json
│   └── backend/                 # NestJS app (API)
│       ├── prisma/
│       │   ├── schema.prisma
│       │   └── seed.ts
│       ├── src/
│       │   ├── auth/
│       │   ├── users/
│       │   ├── app.module.ts
│       │   ├── main.ts
│       │   ├── prisma.module.ts
│       │   └── prisma.service.ts
│       ├── .env.example
│       └── package.json
├── .env.example
├── package.json
└── pnpm-workspace.yaml
```

## Prasyarat

- Node.js 20+
- pnpm 9+
- PostgreSQL 15+

## Setup Awal

1. Install dependency workspace:

```bash
pnpm install
```

2. Siapkan environment:

```bash
cp .env.example .env
cp apps/backend/.env.example apps/backend/.env
```

3. Jalankan migrasi Prisma (dari folder backend):

```bash
cd apps/backend
pnpm prisma:generate
pnpm prisma:migrate --name init
```

4. Seed data awal:

```bash
pnpm prisma:seed
```

## Menjalankan Project

### Opsi 1: Jalankan masing-masing service

```bash
pnpm dev:frontend
pnpm dev:backend
```

- Frontend: http://localhost:3000
- Backend: http://localhost:4000/api

### Opsi 2: Jalankan semua workspace (parallel)

```bash
pnpm -r --parallel dev
```

## Endpoint Auth Dasar

- `POST /api/auth/login`
- `GET /api/auth/me` (butuh Bearer token)

## Seed User Default

Password semua akun: `Password123!`

- Super Admin: `admin@onetravel.local`
- Travel Partner: `partner@onetravel.local`
- Customer: `customer@onetravel.local`

## Catatan Tahap Selanjutnya

- Tambah module produk travel (paket, jadwal, kuota)
- Tambah booking + payment flow
- Tambah RBAC guard per-role
- Tambah dashboard terpisah untuk tiap role
