// export function validator(age) {
//   // console.log(age);
//   if (5 >= age >= 20) {
//     // console.log("лет1");
//     return "лет";
//   } else if ((age = 21)) {
//     // console.log("год1");
//     return "год";
//   } else if (22 >= age >= 24) {
//     // console.log("годa1");
//     return "года";
//   } else if (25 >= age >= 30) {
//     // console.log("лет2");
//     return "лет";
//   }
// }
export function validator(age) {
  let count = age % 100;
  // console.log("count = ", count);

  if (count >= 10 && count <= 20) {
    return "лет";
  } else {
    count = age % 10;
    // console.log("count = ", count);
    if (count === 1) {
      return "год";
    } else if (count >= 2 && count <= 4) {
      return "года";
    } else {
      return "лет";
    }
  }
}
