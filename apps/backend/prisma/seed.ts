import { PrismaClient, Role } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const hashed = await bcrypt.hash('Password123!', 10);

  const admin = await prisma.user.upsert({
    where: { email: 'admin@onetravel.local' },
    update: {},
    create: {
      email: 'admin@onetravel.local',
      password: hashed,
      fullName: 'Super Admin ONETRAVEL',
      role: Role.SUPER_ADMIN,
    },
  });

  const partner = await prisma.user.upsert({
    where: { email: 'partner@onetravel.local' },
    update: {},
    create: {
      email: 'partner@onetravel.local',
      password: hashed,
      fullName: 'Travel Partner Demo',
      role: Role.TRAVEL_PARTNER,
      partnerProfile: {
        create: {
          companyName: 'PT Jelajah Nusantara',
          verified: true,
        },
      },
    },
  });

  const customer = await prisma.user.upsert({
    where: { email: 'customer@onetravel.local' },
    update: {},
    create: {
      email: 'customer@onetravel.local',
      password: hashed,
      fullName: 'Customer Demo',
      role: Role.CUSTOMER,
    },
  });

  console.log({ admin: admin.email, partner: partner.email, customer: customer.email });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
