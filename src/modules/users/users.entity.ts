import {ROLES} from './enum/roles.enum.js'

class User {
  id: number;
  email: string;
  password: string;
  name: string;
  role: ROLES;
  active: boolean;
}

export { User };
