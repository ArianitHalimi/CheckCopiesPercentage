var stringSimilarity = require('string-similarity');
var sortedValues = []

const filePercentage = (fileArray,numOfFiles) => {
  for (var i = 0; i < fileArray.length; i++) {
    for (var j = 0; j < fileArray.length; j++) {
      sortedValues.push([(100*(stringSimilarity.compareTwoStrings(fileArray[i], fileArray[j])).toFixed(2)),'file'+i,'file'+j])
    }
  }
  console.log(sortedValues.sort(sortArray));
}

const sortArray = (a,b) => {
  if (a[0] === b[0]) {
        return 0;
    }
    else {
        return (a[0] < b[0]) ? 1 : -1;
    }
}

module.exports = filePercentage
