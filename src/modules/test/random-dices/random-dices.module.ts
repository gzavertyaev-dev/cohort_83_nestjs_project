// Собираем все слои

// @Module - это декоратор. Является главным организатором и строительным блоком
// нашего приложения(в данном случае частью нашего приложения, а именно модулем Random Dices)
// Если представить проект как конструктор Lego, то модули - это отдельные крупные блоки нашего прриложения.
// На примере с автомобилем кабина, кузов, колесо - это отдельные модули из которых собирается наша машина
import { Module } from '@nestjs/common';
import { RandomDicesController } from './random-dices.contoller.js';
import { RandomDicesService } from './random-dices.service.js';

@Module({
    // сcontrollers - это маршруты, которые должны быть созданы в этом модуле
  controllers: [RandomDicesController],
   // providers - это сервисы(@Injectable), которые будут доступны именно внутри этого модуля
  providers: [RandomDicesService],
})
class RandomDicesModule {}

export { RandomDicesModule };
