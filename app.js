#!/usr/bin/env node
const path = require('path')
const fs = require('fs')
var jsdiff = require('diff')
const fstatistics = require('./modules/checkFileStatistics')
const checkFileSimularity = require('./modules/checkFileSimularity')
let filesContent = []
let fileWords = []
let numOfFiles = 0
let percentage = []


if(process.argv.length != 5){
  console.log('Please check the syntax')
  process.exit()
}
if(process.argv[3] && process.argv[2]==='check-folder'){
  if(fs.existsSync(process.argv[3])){
    fs.readdir(process.argv[3],(err,files)=>{
      for (let i = 0; i < files.length; i++) {
        let f = fs.readFileSync(process.argv[3] + '/' + files[i],(err)=>{
          if(err) throw err;
        })
        f1 = f.toString().trim()
        f1 = f1.replace(/\s+/g, " ");
        percentage.push(f1)
        filesContent.push(f.toString());
        numOfFiles++;
      }
      if(process.argv[4]=='percentage'){
        fstatistics(percentage,numOfFiles)
      }
      else if(process.argv[4]=='details'){
        checkFileSimularity(filesContent,numOfFiles)
      }
      else{
        console.log('Unknown command');
      }
    })
  }else{
    console.log('This path does not exists');
    process.exit()
  }
}

const countWords = text => {
  return text.trim().split(/\s+/).length;
}
