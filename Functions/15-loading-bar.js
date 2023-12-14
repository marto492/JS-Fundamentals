function loadingBar(num) {
  switch (num) {
    case 10:
      console.log(`${num}% [%.........]`);
      console.log(`Still loading...`);
      break;
    case 20:
      console.log(`${num}% [%%........]`);
      console.log(`Still loading...`);
      break;
    case 30:
      console.log(`${num}% [%%%.......]`);
      console.log(`Still loading...`);
      break;
    case 40:
      console.log(`${num}% [%%%%......]`);
      console.log(`Still loading...`);
      break;
    case 50:
      console.log(`${num}% [%%%%%.....]`);
      console.log(`Still loading...`);
      break;
    case 60:
      console.log(`${num}% [%%%%%%....]`);
      console.log(`Still loading...`);
      break;
    case 70:
      console.log(`${num}% [%%%%%%%...]`);
      console.log(`Still loading...`);
      break;
    case 80:
      console.log(`${num}% [%%%%%%%%..]`);
      console.log(`Still loading...`);
      break;
    case 90:
      console.log(`${num}% [%%%%%%%%%.]`);
      console.log(`Still loading...`);
      break;
    case 100:
      console.log(`${num}% [%%%%%%%%%%]`);
      break;
  }
}

//function loadingBar(number) {
//     let procentages = '%'.repeat(number / 10);
//     let dots = '.'.repeat(10 - number / 10);
//     if (number === 100) {
//         console.log(`${number}% Complete!`);
//         console.log(`[${procentages}]`);
//     } else {
//         console.log(`${number}% [${procentages}${dots}]`);
//         console.log(`Still loading...`);
//     }
// }

loadingBar(50)
