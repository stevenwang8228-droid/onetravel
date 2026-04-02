import { Injectable } from '@nestjs/common';
import { Role, User } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  findByEmail(email: string): Promise<User | null> {
    return this.prisma.user.findUnique({ where: { email } });
  }

  create(data: { email: string; password: string; fullName: string; role: Role }): Promise<User> {
    return this.prisma.user.create({ data });
  }
}
