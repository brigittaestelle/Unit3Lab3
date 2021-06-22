"use strict";

const Obj1 = {
  name: "jane",
  score: 95,
  date: "2020-01-24",
  passed: true,
};

const Obj2 = {
  name: "joe",
  score: 77,
  date: "2018-05-14",
  passed: true,
};

const Obj3 = {
  name: "jack",
  score: 59,
  date: "2019-07-05",
  passed: false,
};

const Obj4 = {
  name: "jill",
  score: 88,
  date: "2020-04-22",
  passed: true,
};

let submissions = [Obj1, Obj2, Obj3, Obj4];
console.log(submissions);
// Array established - 1

function addSubmission(array, newName, newScore, newDate) {
  let Obj5 = {
    name: newName,
    score: newScore,
    date: newDate,
    passed: newScore >= 60,
  };
  submissions.push(Obj5);
}

// // test by
// addSubmission(submissions, "Bob", 40, "2019-07-05");
// console.log(submissions);
// // addSubmission function works - 2

function deleteSubmissionByIndex(array, index) {
  submissions.splice(index, 1);
}
// test by
// deleteSubmissionByIndex(submissions, 2);
// console.log(submissions);
// deleteSubmissionByIndex function works - 3

function deleteSubmissionByName(array, name) {
  submissions.splice(submissions.indexOf("name"), 1);
}
// test by
// deleteSubmissionByName(submissions, "jill");
// console.log(submissions);
// deleteSubmissionByName function works - 4

function editSubmission(array, index, score) {
  if (editSubmission[index].score >= 60) {
    return (passed = true);
  } else {
    return (passed = false);
  }
}

// editSubmission function - unsure if this works - 5

function findSubmissionByName(array, name) {
  console.log(objectOf(submissions.find(name)));
}

// findSubmissionByName - 6

let lowScore = 100;
for (let i = 0; i < submissions.length; i++) {
  if (submissions[i].score < lowScore) {
    lowScore = submissions[i].score;
  }
}
console.log(lowScore);

// works - 7

function findAverageScore(array) {
  for (let i of submissions) {
    console.log(total / length);
  }
}
// 8

console.log(function filterPassing(array) {
  submissions.filter(function (passed) {
    return score >= 60;
  });
});
// 9
function filter90AndAbove(array) {
  return score >= 90;
}
console.log(submissions);
// 10
