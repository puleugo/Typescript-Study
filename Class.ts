class Player {
  constructor(
    private firstName: string,
    private lastName: string,
    public nickname: string
  ) {}
}

abstract class User {
  constructor(
    private firstName: string,
    private lastName: string,
    protected nickname: string
  ) {}
  abstract getNickName(): void;
  getFullName() {
    // 함수에도 private 사용가능
    return `${this.firstName} ${this.lastName}`;
  }
}

class Player2 extends User {
  // 상속만 가능함, 새로운 인스턴스 생성 불가
  getNickName(): void {
    console.log(this.nickname);
  }
}

const nico1 = new Player("nico", "las", "니꼬");
const nico2 = new Player2("nico", "las", "니꼬");

nico1.nickname;
nico2.getFullName();
// nico2.nickname // protected는 외부에서 접근 불가, 자식 클래스에서는 사용 가능
