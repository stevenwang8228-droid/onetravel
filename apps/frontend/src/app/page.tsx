const roles = ['Super Admin', 'Travel Partner', 'Customer'];

export default function HomePage() {
  return (
    <main className="container">
      <h1>ONETRAVEL</h1>
      <p>Fondasi marketplace travel berbasis Next.js + NestJS + PostgreSQL + Prisma.</p>

      <section>
        <h2>Role Aplikasi</h2>
        <ul>
          {roles.map((role) => (
            <li key={role}>{role}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
