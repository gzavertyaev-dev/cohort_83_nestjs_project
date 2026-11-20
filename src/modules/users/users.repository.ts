// Repository - это файл, в котором мы изолируем работу с БД от бизнес логики приложения
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import User from './users.entity.js';

// @Injectable - это декоратор, который, что класс является провайдером.
// Этот декоратор позволяет NestJS автоматически создавать экхемпляр этого класса(обьект)
// и внедрять(передавать его в другие классы), например(реепозиторий в сервисы,  сервис в контроллеры) через constructor
@Injectable()
class UsersRepository {
  constructor(
    // InjectRepository - декоратор из библиотеки @nestjs/typeorm, который позволяет получить все методы
    // для запросов и работы с текщей таблицой, в данном случае это User. Все эти методы будут находиться в обьекте repository
    @InjectRepository(User)
    private readonly repository: Repository<User>,
  ) {}

  // Сохранить пользователя в таблице user в БД
  async createUser(user: User): Promise<User> {
    return this.repository.save(user);
  }

  // Найти всех пользователей из таблицы БД, которые active === true
  async findAllActiveUsers(): Promise<User[]> {
    return this.repository.findBy({ active: true });
  }

  // Найти пользователя по id
  async findUserById(id: number): Promise<User | null> {
    return this.repository.findOneBy({ id });
  }

  // Удалить пользоватля по id
  async deleteUserById(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}

export default UsersRepository;
