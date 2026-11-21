import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { INSURANCE_TYPES } from './enum/inusrance-types.enum.js';
import User from '../users/users.entity.js';

@Entity()
class Policy {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'enum', enum: INSURANCE_TYPES })
  type: INSURANCE_TYPES;
  @ManyToOne((): typeof User => User)
  holder: User;
  @ManyToOne((): typeof User => User)
  agent: User;
  @Column({ name: 'coverage_in_cent' })
  coverageInCent: number;
  @Column({ name: 'issued_at' })
  issuedAt: Date;
  @Column({ name: 'expires_at' })
  expiresAt: Date;
  @Column()
  active: boolean;
}

export default Policy;
