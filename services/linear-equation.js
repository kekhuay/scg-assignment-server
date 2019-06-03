var _ = require('lodash');
var linear = require('linear-solve');

var linearService = {};

seq = [3, 5, 9, 15];

var findAnswers = function(loopCount, seq) {
  return seq.slice(0, loopCount + 1);
};

var findLoopCount = function(seq) {
  var i = 0;
  var diffSeq = [];

  for (var j of seq) {
    diffSeq.push(j);
  }

  while (true) {
    ++i;
    diffSeq = _.map(diffSeq, function(e, i) {
      return diffSeq[i + 1] - e;
    });
    diffSeq.pop();

    if (diffSeq.length < 2) {
      throw 'can not find solutions for this sequence.'
    }
  
    var sameValue = diffSeq.every(function(val, j, arr) {
      return val === arr[0];
    });
  
    if (sameValue) {
      break;
    }
  }
  return i;
}

var solveVariables = function(loopCount, answers) {
  var matrix = [];
  for (var j = 1; j <= loopCount + 1; ++j) {
    var row = [];
    for (var k = 0; k < loopCount + 1; ++k) {
      row.push(Math.pow(j, k));
    }
    matrix.push(row);
  }
  return linear.solve(matrix, answers);
};

var findNthNumber = function(n, sol, loopCount) {
  var result = 0;
  for (var j = 0; j <= loopCount; ++j) {
    result += sol[j] * Math.pow(n, j);
  }
  return result;
};

linearService.findNextThreeSequence = function(seq) {
  var result = [];
  var loopCount = findLoopCount(seq);
  var answers = findAnswers(loopCount, seq);
  var sol = solveVariables(loopCount, answers);
  for (var i = seq.length + 1; i < seq.length + 4; ++i) {
    var solNth = findNthNumber(i, sol, loopCount);
    result.push(solNth);
  }
  return result;
};

module.exports = linearService;
