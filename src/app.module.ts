import { Module } from '@nestjs/common';

import UsersModule from './modules/users/users.module.js';
import {RandomDicesModule} from './modules/test/random-dices/random-dices.module.js'

@Module({
  // import - собирает все отдельные модили нашего приложение
  imports: [RandomDicesModule, UsersModule],
})
export class AppModule {}
