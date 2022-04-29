// 자료구조와 배열

let array = new Array(3); // 비어있는 배열

array = new Array(1, 2, 3); // 1, 2, 3 이 들어가있는 배열

array = Array.of(1, 2, 3, 4, 5, 6, 7); // 많은 배열을 넣을 수 있음

const anotherArray = [1, 2, 3, 4]; // 이런 식으로도 배열을 만들 수 있음

array = Array.from(anotherArray); // 기존의 배열을 복사해서 새로운 배열 만들기
// Array.from('text') => ['t', 'e', 'x', 't'] 로 나눌 수 있음

// 일반적으로 배열은 동일한 메모리 크기를 가지며, 연속적으로 이어져 있어야 함.
// 그러나 자바스크립트에서의 배열은 연속적으로 이어져 있지 않고 오브젝트와 유사
// 자바스크립트의 배열은 일반적인 배열의 동작을 흉내낸 특수한 객체다
// 따라서 이것을 보완하기 위해 타입이 정해져있는 타입 배열이 있다.

array = Array.from({
  0: '안',
  1: '녕',
  length: 2, // 이것까지 써주면 배열로 만들 수 있음
});
// ['안', '녕']

// 배열 길이 확인 법
array.length;

// 배열 추가, 삭제 방식 중 하면 안되는 방식
array[4] = 'K'; // 덮어 쓸 가능성 있음
delete array[4]; // 빈 칸 남음

// 배열을 가지고 사용할 수 있는 함수
// 특정 오브젝트가 배열인지 확인
Array.isArray(array);
// 특정 아이템의 위치 찾기
array.indexOf('안');
// 배열안에 특정한 아이템이 있는지 체크
array.includes('안');
// 추가 - 맨 뒤
array.push('뒤'); // 배열 자체를 수정(업데이트)
// 추가 - 맨 앞
array.unshift('앞'); // 배열 자체를 수정(업데이트)
// 제거 - 맨 뒤
array.pop(); // 배열 자체를 수정(업데이트)
// 제거 - 맨 앞
array.shift(); // 배열 자체를 수정(업데이트)

// 중간에 추가 또는 삭제
array.splice(1, 1); // a, b, c, ... : a부터 b개를 삭제하고 그 자리에 c부터 추가 / 배열 자체를 수정(업데이트)
array.splice(); // 전부 다 삭제.
// 순서 거꾸로
array.reverse();
// 중첩된 배열을 하나의 배열로
let arr = [
  [1, 2, 3],
  [4, [5, 6]],
];
arr.flat(); // 한 단계만. [1, 2, 3, 4, [5, 6]]
arr.flat(2); // 2단계 까지. [1, 2, 3, 4, 5, 6]

// 특정한 값으로 배열 채우기
arr.fill(0); // 0으로 모두 채움 / 배열 자체를 수정(업데이트)
arr.fill('s', 1, 3); // 1부터 3-1 까지 s로 채움 / 배열 자체를 수정(업데이트)

// 배열을 문자열로
arr.join(); // 사이사이에 콤마가 있는 문자열로 바뀜.
arr.join('|'); // 콤마 대신 |가 있는 문자열로 바뀜.

// 얕은 복사 - 객체는 메모리 주소가 전달 됨. (?????)
// 자바스크립트에서 복사할때는 항상 얕은 복사가 이루어짐.
// Array.from, concat, slice, spread(...), Object.assign

// 고차함수 (??)
// 배열을 빙글빙글 돌면서 원하는 것을 할 떄
const fruits = ['🍌', '🍓', '🍇', '🍓'];
fruits.forEach(function (value, index, array) {
  console.log(value);
  console.log(index);
  console.log(array);
});
fruits.forEach(function (value) {
  console.log(value);
});
fruits.forEach((value) => console.log(value));

// 조건에 맞는(콜백함수) 아이템을 찾을 때
// finde : 제일 먼저 조건에 맞는 아이템 반환
const item1 = { name: 'A', price: 2 };
const item2 = { name: 'B', price: 3 };
const item3 = { name: 'C', price: 4 };
const products = [item1, item2, item3, item2];
const found = products.find((value) => {
  // value는 products의 속성들
  return value.name == 'B';
});

// findeIndex: 제일 먼저 조건에 맞는 아이템의 인덱스를 반환
result = products.findIndex((value) => value.name === 'B');

// 배열의 아이템이 부분적으로 조건(콜백함수)에 맞는지 확인
result = product.some((item) => item.name === 'B');

// 배열의 아이템이 전부 조건(콜백함수)에 맞는지 확인
result = product.every((item) => item.name === 'B');

// 조건에 맞는 모든 아이템들을 새로운 배열로!
result = products.filter((item) => item.name === 'B');

// Map : 배열의 아이템들을 각각 다른 아이템으로 매핑할 수 있는, 변환해서 새로운 배열 생성
const nums = [1, 2, 3, 4, 5];
result = nums.map((item) => item * 2); // 모두 2배씩
result = nums.map((item) => { // 짝수만 2배씩
  if (item % 2 === 0) {
    return item * 2;
  } else {
    return item;
  }
})
// 사이즈 확인
nums.size;
// 존재하는지 확인
nums.has.('key1');
// 순회
nums.forEach((value, key) => console.log(key, value));
// 찾기
console.log(nums.get('key1'));
// 삭제
nums.delete('key3');
// 전부삭제
nums.clear();

// Flatmap : 중첩된 배열을 쫙 펴줌
result = ['dream', 'coding'].flatMap((text) => text.split(''));
// ['d', 'r', 'e', 'a', 'm', 'c', ...]

// sort : 문자열 형태의 오름차순으로 요소 정렬 (???)
const numbers = [0, 5, 4, 2, 1, 10];
numbers.sort();
numbers.sort((a, b) => a - b); // < 0 : a가 앞으로 정렬(오름차순) / > 0 : b가 앞으로 정렬(내림차순)

// reduce : 배열의 요소들을 접어서 값을 하나로 만듬
result = [1, 2, 3, 4, 5].reduce((sum, value) => {
  sum += value;
  return sum;
}, 0); // sum을 0으로 초기화
result = [1, 2, 3, 4, 5].reduce((sum, value) => (sum += value), 0);