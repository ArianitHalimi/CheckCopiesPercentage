var jsdiff = require('diff')
require('colors');
var diffArray = []

const checkFileSimularity = (filesContent,numOfFiles) => {
  for (var i = 0; i < filesContent.length; i++) {
    for (var j = 0; j < filesContent.length; j++) {
      var diff = jsdiff.diffWords(filesContent[i],filesContent[j],{ignoreWhitespace:true,ignoreCase:true})
      diffArray.push(diff)
    }
  }
  checkSim(diffArray,numOfFiles)
}

const checkSim = (array,numOfFiles) => {
  var iterator = 0
  var otherFile = 0
  for (var i = 0; i < array.length; i++) {
    if(i%3===(numOfFiles-1)){
      iterator++;
      otherFile = 0;
      console.log('File ' + iterator + ' || ' + 'File ' + otherFile)
    }else{
      console.log('File ' + iterator + ' || ' + 'File ' + otherFile)
      otherFile++;
    }
    array[i].forEach(part=>{
      var color = part.added ? 'grey' :
      part.removed ? 'red' : 'green';
      process.stderr.write(part.value[color]);
    })
    console.log('\n\n');
  }
}

module.exports = checkFileSimularity
