import { Module } from '@nestjs/common';

import { DBModule } from './utils/db.js';
import UsersModule from './modules/users/users.module.js';

@Module({
  // imports - собирает все отдельные модили нашего приложение
  imports: [DBModule, UsersModule],
})
export class AppModule {}
