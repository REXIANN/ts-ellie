/**
 * Type Inference
 */

let text = 'hello';
text = 'hi';
// text = 1; // Error!

function print(message = "message") {
  console.log(message); // string 으로 추론
}

function add(x: number, y: number) {
  return x + y // 반환타입도 number 로 추론됨
}

const result = add(1, 2) // result 도 number 로 추론됨
