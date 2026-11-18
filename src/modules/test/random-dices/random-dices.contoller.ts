// Логика для работы с http запросами(ответами)

// Декораторы в NestJS - это "обертки" или спец ярлыки, которые добавляют классу, методу или свойству новые возможности без измнения
// их основного кода
// Аналогия из жизни: класс - это базовый автомобиль. Если мы повесим на него декоратор @СпортивныйТюнинг,
// то машина не перестает быть машиной, но у нее изменяется характеристики двигателя и допустим добалвяется спойлер.
// т.е Декоратор - это инструкция для системы: "Возьми этот кусок кода и добавь ему такую логику"
// В NestJS @Controller и @Get - это декораторы
// @Controller и @Get работают в паре для создания эндпонитов(маршруты). Пример: http://localhost:3000/random-dices
// Простыми словами:
// - @Controller определяет главный адрес(префикс), по которому обращаются к вашему ресурсу
// - @Get - этот HTTP декоратор и определяет конкретное действие и метод запроса
import { Controller, Get } from '@nestjs/common';
import { RandomDicesService } from './random-dices.service.js';

@Controller('random-dices')
class RandomDicesController {
  constructor(private readonly service: RandomDicesService) {}

  @Get()
  getRandomDicesRequest(): number[] {
    return this.service.getRandomDices(); // Вызов this.service.getRandomDices() вернет нам [1,3], а мы в getRandomDices вернем рузультат [1,3]
  }
}

export { RandomDicesController };
