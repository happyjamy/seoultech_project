export abstract class CommonService<
  Entity,
  CreateCommonDto,
  UpdateCommonDto,
  CreateCommon,
> {
  constructor(private repository: any) {
    this.repository = repository;
  }

  async create(
    createDto: CreateCommonDto,
    userId: string,
  ): Promise<CreateCommon> {
    const createdCommon = {
      ...createDto,
      authorId: userId,
      viewCount: 0,
    };
    return await this.repository.create(createdCommon);
  }

  async findAll(): Promise<CreateCommon[]> {
    return await this.repository.findAll();
  }

  async findOne(id: string): Promise<CreateCommon> {
    return await this.repository.findOne(id);
  }

  async update(id: string, updateDto: UpdateCommonDto): Promise<CreateCommon> {
    return await this.repository.update(id, updateDto);
  }

  async remove(id: string): Promise<CreateCommon> {
    return await this.repository.remove(id);
  }
}
