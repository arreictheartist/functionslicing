//Complete the solution so that it returns true if the first
//argument(string) passed in ends with the 2nd argument (also a string).
function solution(str, ending) {
  let first = str.split("");
  let last = ending.split("");
  let diff = str.length - ending.length;
  if (first.slice(diff).join === last.slice(0).join) {
    console.log(true);
  } else {
    console.log(false);
  }

  console.log(first);
  console.log(last);
  console.log(first.slice(5).join);
  console.log(last.slice(0).join);
}
solution("loathing", "ing");
