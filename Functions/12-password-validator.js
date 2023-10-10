function passwordValidator(password) {
  //   let passwordStr = String(password);
  //   let digitCounter = 0;
  //   let specialChars = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;

  //   for (let i = 0; i < passwordStr.length; i++) {
  //     let curChar = Number(passwordStr[i]);
  //     if (isNaN(curChar)) {
  //       continue;
  //     } else {
  //       digitCounter++;
  //     }
  //   }
  //   if ( passwordStr.length >= 6 && passwordStr.length <= 10 && digitCounter >= 2 ){
  //     console.log(`Password is valid`);
  //   } else if ( passwordStr.length < 6 || passwordStr.length > 10 || digitCounter < 2) {
  //     console.log("Password must be between 6 and 10 characters");
  //     console.log("Password must have at least 2 digits");
  //   }else if(){

  //   }
  // }

  if (
    checkPassLength(password) &&
    checkOnlyLettersDigits(password) &&
    checkMinTwoDigits(password)
  ) {
    console.log(`Password is valid`);
  }
  if (checkPassLength(password) == false) {
    console.log(`Password must be between 6 and 10 characters`);
  }
  if (checkOnlyLettersDigits(password) == false) {
    console.log(`Password must consist only of letters and digits`);
  }

  if (checkMinTwoDigits(password) == false) {
    console.log(`Password must have at least 2 digits`);
  }

  function checkPassLength(pass) {
    if (pass.length > 5 && pass.length < 11) {
      return true;
    } else {
      return false;
    }
  }
  function checkOnlyLettersDigits(pass) {
    //Ascii letters & digits = 65 > 90 & 97 > 122

    for (let i = 0; i < pass.length; i++) {
      let curChar = pass[i].charCodeAt();
      if (
        !((curChar > 64 && curChar < 91) ||
        (curChar > 96 && curChar < 123) ||
        (curChar > 47 && curChar < 58))
      ) {
        return false;
       }
    }
    return true;
  }
  function checkMinTwoDigits(pass) {
    //Ascii numbers = 48 > 57
    let digitCounter = 0;
    for (let i = 0; i < pass.length; i++) {
      let curChar = pass[i].charCodeAt();
      if (curChar > 47 && curChar < 58) {
        digitCounter++;
      }
    }
    if (digitCounter >= 2) {
      return true;
    } else {
      return false;
    }
  }
}

passwordValidator("myPAss123");
