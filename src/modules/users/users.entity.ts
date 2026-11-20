// При использовании ORM систем(для взаимодействия с DB), тут будут класс, который напрмую отображается в таблице в БД
// Каждый экземпляр класса(обьект) представляет отдельную строку в таблице в БД. В данном примере это класс User
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { ROLES } from './enum/roles.enum.js';

// @Entity - это специальный декоратор, который превращает обычный Typescript класс в модель таблицы базы данных.
// C его помощью TypeORM понимает, что данный класс(в данном случае User) нужно связать  со схемой БД( создать таблицу,
// читать из нее и записывать в нее данные)
@Entity()
class User {
  // - name - название столбца в таблице БД
  // - nullable - указывает могут ли быть созданные в определенном столбце значения в виде NULL
  // - unique - определяет должно ли быть значение столбца уникальным или нет
  // - type - указывает явный тип для вашего столбца, в данном примере мы его используем, т.к у нас используется специальный тип enum
  // - enum - это массив возмодных перечисленных значений(в нащем случае ROLES)
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;
  @Column({ name: 'email', nullable: false, unique: true })
  email: string;
  @Column({ nullable: false, unique: false })
  password: string;
  @Column({ nullable: false, unique: false })
  name: string;
  @Column({ nullable: false, unique: false, type: 'enum', enum: ROLES })
  role: ROLES;
  @Column({ nullable: false, unique: false })
  active: boolean;
}

export default User;
