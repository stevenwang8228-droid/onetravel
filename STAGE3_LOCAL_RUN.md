# Tahap 3 - Menjalankan ONETRAVEL Secara Lokal

## Status repository saat ini

Repository `/workspace/onetravel` saat ini **belum berisi source code aplikasi** (hanya `.git` dan `.gitkeep`).
Karena itu, backend/frontend/Prisma migration belum bisa dijalankan sampai file proyek tersedia.

## Step-by-step standar (ketika source code sudah tersedia)

1. **Clone & masuk folder proyek**
   ```bash
   git clone <repo-url> onetravel
   cd onetravel
   ```

2. **Siapkan environment variable**
   - Copy `.env.example` menjadi `.env` (jika tersedia).
   - Pastikan minimal ada:
     - `DATABASE_URL=postgresql://postgres:postgres@localhost:5432/onetravel`
     - variabel untuk JWT / auth sesuai backend.

3. **Install dependency**
   - Jika monorepo npm:
     ```bash
     npm install
     ```

4. **Jalankan PostgreSQL (Docker)**
   ```bash
   docker run --name onetravel-postgres \
     -e POSTGRES_USER=postgres \
     -e POSTGRES_PASSWORD=postgres \
     -e POSTGRES_DB=onetravel \
     -p 5432:5432 \
     -d postgres:16
   ```

5. **Jalankan Prisma migration**
   ```bash
   npx prisma migrate dev
   ```

6. **Jalankan backend server**
   - Contoh umum:
     ```bash
     npm run dev:backend
     ```
   - Alternatif (jika backend berada di folder terpisah):
     ```bash
     cd backend
     npm install
     npm run dev
     ```

7. **Jalankan frontend server**
   - Contoh umum:
     ```bash
     npm run dev:frontend
     ```
   - Alternatif:
     ```bash
     cd frontend
     npm install
     npm run dev
     ```

8. **Akses frontend**
   - Biasanya: `http://localhost:3000` atau `http://localhost:5173`.

## Endpoint API auth (template)

Endpoint ini **contoh umum** yang sering dipakai:
- Register: `POST /api/auth/register`
- Login: `POST /api/auth/login`

> Endpoint final harus dikonfirmasi dari source backend (routing/controller) setelah file proyek tersedia.
