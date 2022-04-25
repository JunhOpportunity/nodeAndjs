// os 정보
const os = require('os');
console.log(os.cpus()); // cpu 정보를 알려주는 os 모듈의 함수.

// process 정보 <-- 잘 모르겠다. 책, 강의 다시.
const process = require('process');

setTimeout(() => {
  // 위의 코드들이 모두 수행된 후
}, 0); // 0 초 후에
process.nextTick(); // 현재 수행되고있는 코드 다 완료된 후에 내가 등록한 콜백함수를
