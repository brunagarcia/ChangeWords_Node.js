//Changind all words that starts with b to "The World" by Bruna Garcia.

const fs = require('fs');

//READ QUOTE FILE AND SAVE TO A VARIABLE

const changeName = fs.readFile('quote.txt', 'utf8', function (err, fileContent) {
  //create variable to hold the quote after converted to array. 
  quoteArr = []
  if (err) {
    console.log(err);
    return
  } else {
    //convert string to array
    quoteArr = fileContent.split(' ');
    //loop through array
    for (i = 0; i < quoteArr.length; i++) {
      //if the word starts with B
      if (quoteArr[i].match(/below|but/gi)) {
        //change the word to Brainstation
        quoteArr[i] = 'The Space';
        //transform array to string again
        var quoteStr = quoteArr.toString();
      } else {
        console.log("There is no words to match");
      }
    }
    //write file using Synchronous method. It will be call after all the process below occurs.
    fs.writeFileSync('newQuote.txt', quoteStr.replace(/,/gi, ' '));
  }
}) //closing readfile