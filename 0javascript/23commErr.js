// comments
// <- 한 줄 짜리 주석 작성할 때
// TODO(준호) <- 해야할 일 작성할 때
// EX) TODO(준호) : XX기능 구현하기

/**
 * 주석은 코드 자체를 설명하는 것이 아니라,
 * 왜 어떻게 를 설명하는 것이 좋음
 * (단, 꼭 필요한 경우에만)
 */

// 외부에서 많이 쓰이는 함수 API인 경우 JSDoc을 사용하면 좋다.
/** 엔터 누르면 되는데 여기 안됨 */
function add(a, b) {}

// Error
throw new Error('에러! 에러!'); // 에러 발생 시키는 함수

// try catch
function processFile(path) {
  let content;
  try {
    content = readFile(path);
  } catch (error) {
    console.log(error);
    content = '기본내용';
  } finally {
    // 성공하든 실패하든 마지막으로 리소스 정리 가능
    console.log('Finally');
  }
}
