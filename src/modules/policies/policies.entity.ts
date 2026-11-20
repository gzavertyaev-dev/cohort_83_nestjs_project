import { INSURANCE_TYPES } from './enum/inusrance-types.enum.js';
import User from '../users/users.entity.js'

class Policy {
  id: number;
  type: INSURANCE_TYPES;
  holder: User;
  agent: User;
  coverageInCent: number;
  issuedAt: Date;
  expiresAt: Date;
  active: boolean;
}

export default Policy;
