// static 정적 프로퍼티, 메서드 - 재사용성을 높이는 방법(9.3) 모르겠음.
class Fruit {
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }

  // 클래스 레벨의 메서드, 이것은 this를 참조할 수 없다.
  static makeRandomFruit() {
    return new Fruit('banana', 'banana');
  }

  // 이 인스턴스 함수는 만들어진 데이터에 접근해서 출력을 해야함. 따라서 그대로 두는 게 낫기 때문에 인스턴스 레벨로 둠.
  display =  () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
}

const banana = Fruit.makeRandomFruit();

Math.pow(); // 이것도 정적 프로퍼티(재사용성을 높인 예시 중 하나)


