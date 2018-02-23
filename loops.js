function forLoop (arr) {
  for (var i=0; i<25; ++i) {
    arr.push(`I am ${i} strange loops.`);
  }
  return arr;
}

function whileLoop (n) {
  while (n > 0) {
    console.log(`{n}`);
    n--;
  }
  return 'done';
}

function maybeTrue() {
  return Math.random() >= 0.5;
}

function doWhileLoop(arr) {
  do {
    arr.pop();
  } while ((arr.length > 0) && maybeTrue());
}