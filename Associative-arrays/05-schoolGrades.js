function schoolGrades(arr) {
  let myObj = {};

  for (let curGrades of arr) {
    let grades = curGrades.split(" ");
    let studentName = grades.shift();
    if (studentName in myObj) {
      for (let grade of grades) {
        myObj[studentName].push(grade);
      }
    } else {
      myObj[studentName] = grades;
    }
  }

  for (let student in myObj) {
    let avgGrade = 0;
    let gradesCount = myObj[student].length;
    for (let grade of myObj[student]) {
      avgGrade += Number(grade);
    }
    avgGrade /= gradesCount;
    myObj[student] = avgGrade;
  }

  let entries = Object.entries(myObj);
  entries.sort((a, b) => a[0].localeCompare(b[0]));

  let sorted = Object.fromEntries(entries);
  for (let student in sorted) {
    let studentName = student;
    let avgGrade = Number(sorted[student]).toFixed(2)
    console.log(`${studentName}: ${avgGrade} `);
  }
}
schoolGrades(["Lilly 4 6 6 5", "Tim 5 6", "Tammy 2 4 3", "Tim 6 6"]);
