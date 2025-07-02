let n = 5;
for (let i = 0; i <= n; i++) {
  let row = "";
  let toggleNum = 1;
  for (let j = 0; j < i + 1; j++) {
    row = row + toggleNum;
    toggleNum == 1 ? (toggleNum = 0) : (toggleNum = 1);
  }
  console.log(row);
}
