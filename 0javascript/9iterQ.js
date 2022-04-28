// 0부터 10이하까지 숫자의 2배를 순회하는 이터레이터 만들기
const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const iterator = array.values();
while (true) {
  const item = iterator.next();
  console.log(item);
  // if (item.done) break;
  // for (let i = 1; i < item; i++) {
  //   console.log(i * 2);
  // }
}
