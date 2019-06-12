const fs = require('fs');
const readline = require('readline');  

var textArray = [];
const readInterface = readline.createInterface({  
    input: fs.createReadStream('./temp.txt'),
});


function main(){
     let length = textArray.length;
     console.log(process.argv[2]);
     let n = process.argv.length < 1 ? length-10 : length-process.argv[2];
     for(let i=n-1;i<length;i++){
         console.log(textArray[i]);
     }
      
}
const data = () => { 
readInterface.on('line', function(line) {  
    textArray.push(line);

});

}
data();

setTimeout(main, 3000);


