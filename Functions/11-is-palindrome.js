// function isPalindrome(string) {
//   let str = "";
//   let reversed = "";

//   for (let i = 0; i < string.length; i++) {
//     reversed = "";
//     str = String(string[i]);
//     for (let i = str.length - 1; i >= 0; i--) {
//       reversed += str[i];
//     }
//     if (str === reversed) {
//       console.log(`true`);
//     } else {
//       console.log(`false`);
//     }
//   }
// }
// isPalindrome([123, 323, 421, 121]);

function PalindromeChecker(arr) {
  for (let i = 0; i < arr.length; i++) {
    let result = isPalindrome(arr[i]);
    console.log(result);
  }

  function isPalindrome(num) {
    let numStr = String(num);
    let reversedStr = "";

    for (let i = numStr.length - 1; i >= 0; i--) {
      let curchar = numStr[i];
      reversedStr += curchar;
    }

    let isPalindromeResult = numStr == reversedStr;
    return isPalindromeResult;
  }

}

PalindromeChecker([123, 323, 421, 121]);
