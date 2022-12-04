import {
  createParamDecorator,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';

export const UserId = createParamDecorator(
  (data: unknown, context: ExecutionContext) => {
    const userId = context.switchToHttp().getRequest().user._id;
    if (!userId) {
      throw new UnauthorizedException('user does not exist');
    }
    return userId.toString();
  },
);
