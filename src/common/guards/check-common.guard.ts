import { CanActivate, ExecutionContext } from '@nestjs/common';

export class CheckCommonGuard implements CanActivate {
  constructor(private repository: any) {
    this.repository = repository;
  }
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    const authorId = (await this.repository.findOne(request.params.id)).author
      ._id;

    return user._id === authorId;
  }
}
