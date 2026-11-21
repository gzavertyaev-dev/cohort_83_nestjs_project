import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import Policy from './policies.entity.js';
import PoliciesRepository from './policies.repository.js';

@Module({
  imports: [TypeOrmModule.forFeature([Policy])],
  providers: [PoliciesRepository],
})
class PoliciesModule {}

export default PoliciesModule;
