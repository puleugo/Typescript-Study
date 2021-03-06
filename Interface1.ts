// type Team = string; // 타입
type Team = 'red' | 'blue' | 'yellow';
type HealthBar = 1 | 5 | 10;

interface Gamer {
  // type Player = { // type, interface는 같은 역할을 하지만, interface는 인자들의 타입 설명을 하고
  nickname: string;
  team: Team;
  healthBar: HealthBar;
}

const nico: Gamer = {
  nickname: 'nico',
  team: 'red',
  healthBar: 10,
};

type Food = string;

const kimchi: Food = 'delicious';

// 상속

interface User_ {
  name: string;
}

interface Player_ extends User_ {}

type User = {
  name: string;
};

type Player = User & {};

// interface의 다중 상속
// interface는 OOP를 기반으로 설계되었다.
interface Tester {
  name: string;
}
interface Tester {
  team: 'red' | 'blue' | 'yellow';
}
interface Tester {
  healthBar: 1 | 5 | 10;
}

const puleugo: Tester = {
  name: 'puleugo',
  team: 'red',
  healthBar: 5,
};
