import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import Policy from './policies.entity.js';

@Injectable()
class PoliciesRepository {
  constructor(
    @InjectRepository(Policy)
    private readonly respository: Repository<Policy>,
  ) {}

  // Создать страховку
  async createPolicy(policy: Policy): Promise<Policy> {
    return this.respository.save(policy);
  }

  async findAllActivePolicies(): Promise<Policy[]> {
    return this.respository.findBy({ active: true });
  }

  async findPolicyById(id: number): Promise<Policy | null> {
    return this.respository.findOneBy({ id });
  }

  async deletePolicy(id: number): Promise<void> {
    await this.respository.delete(id);
  }
}

export default PoliciesRepository;
