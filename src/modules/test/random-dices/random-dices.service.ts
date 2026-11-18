// Бизнес логика
// import * as nest from '@nestjs/common'
import { Injectable } from '@nestjs/common';

@Injectable()
class RandomDicesService {
  getRandomDices(): number[] {
    // Math.random() - возвращает рандомное число вида 0.<знаки после точки>. Пример: 0.124235235134
    // Math.floor() - округляет дробное число вниз то есть если число 0.5 то будет 0
    // Math.ceil() - округляет дробное число вверх то есть если число 0.5 то будет 1

    // Получаем целые рандомные числа от 1 до 6
    const randomDice1: number = Math.ceil(Math.random() * 6);
    const randomDice2: number = Math.ceil(Math.random() * 6);

    return [randomDice1, randomDice2]; // возврашает масиив из 2 рандомных чисел от 1 до 6. Например: [1,3]
  }
}

export { RandomDicesService };
