import { CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';

export abstract class CheckCommonGuard implements CanActivate {
  constructor(private repository: any) {
    this.repository = repository;
  }
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    const param = request.params.id;
    const authorId = (await this.repository.findOne(param)).author._id;

    if (user._id.toString() !== authorId.toString()) {
      throw new ForbiddenException('본인이 아닌 사람은 게시글을 수정, 삭제 할 수 없습니다.');
    }

    return true;
  }
}
