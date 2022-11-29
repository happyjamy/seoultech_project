import { Model } from 'mongoose';

export abstract class CommonRepository<
  Entity,
  CreateCommonDto,
  UpdateCommonDto,
  CreateCommon,
> {
  private model: Model<any>;
  constructor(model: Model<any>) {
    this.model = model;
  }

  async create(createEntityDto): Promise<CreateCommon> {
    const createdCommon = new this.model(createEntityDto);
    return await createdCommon.save();
  }

  async findAll(): Promise<CreateCommon[]> {
    return await this.model.find().exec();
  }

  async findOne(id: string): Promise<CreateCommon> {
    return await this.model.findById(id).exec();
  }

  async findeOneAndviewCountUp(id: string): Promise<CreateCommon> {
    return await this.model
      .findOneAndUpdate({ id }, { $inc: { viewCount: 1 } }, { new: true })
      .exec();
  }

  async update(
    id: string,
    updateEntityDto: UpdateCommonDto,
  ): Promise<CreateCommon> {
    return await this.model
      .findOneAndUpdate({ id }, updateEntityDto, { new: true })
      .exec();
  }
  async remove(id: string): Promise<CreateCommon> {
    return await this.model.findByIdAndDelete(id).exec();
  }
}
