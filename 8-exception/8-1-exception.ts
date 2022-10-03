// Java: Exception
// JavaScript: Error

// 다음 코드를 ts-node 로 실행 시 RangeError 발생
// const arr = new Array(100000000000000);

// try -> catch -> finally
function readFile(fileName: string): string {
  if (fileName === 'not exist') {
    throw new Error(`file not exist! ${fileName}`)
  }

  return 'file contents'
}

function closeFile(fileName: string) {
  console.log(`file closed. ${fileName}`)
}

const fileName = 'not exist';

try {
  console.log(readFile(fileName));
} catch(error) {
  console.log('catched!')
} finally {
  closeFile(fileName);
}
