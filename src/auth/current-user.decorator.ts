import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { JwtUser } from './jwt.types';

export const CurrentUser = createParamDecorator((_: unknown, ctx: ExecutionContext): JwtUser => {
  const request = ctx.switchToHttp().getRequest<{ user: JwtUser }>();
  return request.user;
});
