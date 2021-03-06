// abstract class User {
//   constructor(protected firstName: string, protected lastName: string) {}
//   abstract sayHi(name: string): string;
//   abstract fullName(): string;
// }

// class Player extends User {
//   fullName(): string {
//     return `${this.firstName} ${this.lastName}`;
//   }
//   sayHi(name: string): string {
//     return `${name} my name is ${this.fullName}`;
//   }
// }

interface User {
  firstName: string;
  lastName: string;
  sayHi(name: string): string;
  fullName(): string;
}

interface Human {
  health: number;
}

// 다중 상속 가능
// class PlayerTest implements User, Human{}

// implements로 가져온 인자들은 public만 사용 가능
class Player implements User {
  constructor(
    public firstName: string,
    public lastName: string,
    private temp: string
  ) {}
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  sayHi(name: string) {
    return `${name} my name is ${this.fullName}`;
  }
  sayTemp() {
    return `${this.temp}`;
  }
}
