{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  }

  class CoffeeMaker {
    static BEANS_GRAM_PER_SHOT: number = 7; // static 으로 class level 로 들어줌
    coffeeBeans: number = 0; // instance level

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT) {
        throw new Error('Not enough coffee beans!')
      }

      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT

      return {
        shots,
        hasMilk: false
      }
    }

    // class level 의 함수도 만들 수 있다
    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans)
    }
  }

  const maker = new CoffeeMaker(32);
  console.log(maker)
  const maker2 = new CoffeeMaker(32);
  console.log(maker2)

  const maker3 = CoffeeMaker.makeMachine(64);
  console.log({ maker3 })
}

