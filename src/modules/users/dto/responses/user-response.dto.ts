import { ROLES } from '../../enum/roles.enum.js';

export class UserResponseDto {
  id: number;
  email: string;
  name: string;
  role: ROLES;
}
