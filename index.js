var readlineSync = require('readline-sync');
var chalk = require('chalk');
//packages


//creating reusable function
function quiz() {
  
  //constants 
  var rules =[
    "The quiz consists of 5 questions",
    "The quiz is heavily based on The Office TV Show",
    "The Correct answer gets you 100 points",
    "The Incorrect answer takes 50 points from score",
    "Don't worry, there are hints too"
  ];
  
  var quiz = [
    {
      question: "What substance does Jim put office supplies owned by Dwight into?",
      answer: "Jello",
      hint: "It sounds like Cello"
    },
    {
      question: "What is the name of the employee who started out as “the temp” in the Dunder Mifflin office?",
      answer: "Ryan",
      hint: "Michael loves him"
    },
    {
      question: "Dwight owns and runs a farm in his spare time. What does this farm primarily produce?",
      answer: "Beets",
      hint: "Nice to meetS you"
    },
    {
      question: "Who calls Jim by the nicknames “Tuna” or “Big Tuna”?",
      answer: "Andy",
      hint: "Sounds like candy"
    },
    {
      question: "Who served on the jury for the Scranton strangler case?",
      answer: "Toby",
      hint: "Michael just hates him"
    },
    {
      question: "Which office employee did Michael hit with his car?",
      answer: "Meredith",
      hint: "She is soccor mom"
    }
  ]

  var score = 0;

  var scoreBoard = [{
    name: 'Harshith',
    score:400
  },
  {
    name: 'Michael Scott',
    score:100
  },
  {
    name: 'Jim',
    score:200
  }
  ]
  var newUser = {
    name:"",
    score:0
  }



  console.log(chalk.bgWhite.yellow.bold.underline("         Welcome to OFFICE QUIZ              "));
  console.log();
  console.log();
  console.log();
  console.log();
  //quote
  console.log(chalk.cyan.italic(`
  Sometimes I'll start a sentence
  and I don't even know where it's going.
  I just hope I find it along the way.`))
  console.log();

  var user = readlineSync.question(chalk.blue(`
  Welcome to Dunder Mifflin Quiz,
  What is your name?\n`));
  
  //user name cannot be undefined
  if(user.length === 0){
    var user = readlineSync.question("Please enter your name");
  }
  
  console.log(chalk.magenta("Let's get started ",user));
  
  console.log(chalk.yellow.bold("Rules: "))
  console.log();

  

  //list rules
  for(let i=0;i<rules.length;i++){
    console.log(chalk.bgMagenta.white(rules[i]))
  }

  
  console.log();
  console.log(chalk.green.bold("Current Score: ",score));
  console.log();
  console.log();
  console.log();

  function checkAnswer(question,answer,hint){
    var userInput = readlineSync.question(question +'\n');
    
    //check for lowercase too
    if(userInput.toLowerCase() === answer.toLowerCase()){
      console.log(chalk.green("Great Job!"));
      score = score+100;
    } 
    else {
      console.log();
      var hintCheck = readlineSync.question(chalk.magenta("Hey Hey Do you want a hint mate"));
      if(hintCheck.toLowerCase() == 'y' || hintCheck.toLowerCase() == 'yes'){
        console.log(chalk.yellow(hint));
        var userInput = readlineSync.question("What do you think now?");
        if(userInput.toLowerCase() === answer.toLowerCase()){
          console.log();
          console.log(chalk.green("Great Job!"));
          score = score+100;
      } else {
        console.log();
        console.log(chalk.red("Oh No!!!!"));
        score = score-50;
      }
      }else {
        console.log();
        console.log(chalk.red("Oh No!!!!"));
        score = score-50;
      }
    }
    console.log();
    console.log(chalk.green.bold("Current Score: ",score));
    console.log("-----------------------------------------");
    console.log();
    console.log();
  }
  for(let i=0;i<6;i++){
  checkAnswer(quiz[i].question,quiz[i].answer,quiz[i].hint);
  }

  console.log(chalk.bgBlack.green.bold.underline("Congratulations🙌🙌🙌🙌🙌  q"+user));
  console.log(chalk.bgBlack.green.bold.underline("Your final score is "+score));
  
  newUser.name = user;
  newUser.score = score;
  scoreBoard.push(newUser);
  scoreBoard.sort((a,b)=>  b.score - a.score);
  
  console.log();
  
  console.log(chalk.bgWhite.black("=====================SCOREBOARD================="));
  console.log();
  console.log();
  console.log(chalk.bgWhite.yellow("Name"+"===>"+"Score"));
  console.log();
  
  
  //to list highscores
  for(let i=0;i<scoreBoard.length;i++){

    console.log(chalk.bgBlack.yellow((scoreBoard[i].name+"===>"+scoreBoard[i].score)));
    console.log();
  }
  console.log();
  if((newUser.score === scoreBoard[0].score) && (newUser.name === scoreBoard[0].name)){
    console.log("🤩 🤩 🤩 🤩 🤩 🤩 🤩 🤩 🤩");
    console.log(chalk.bgWhite.yellow("You are a top scorer haan!!!!!! Send the screenshot so that your name is in scoreboard "));
    console.log("🤩 🤩 🤩 🤩 🤩 🤩 🤩 🤩 🤩");
  }
  
  console.log();
}


console.clear();

quiz();

var requizCheck = readlineSync.question('Do you want to give another try mate?');
  if(requizCheck.toLowerCase() === 'y' || requizCheck.toLowerCase() === 'yes'){
    console.clear();
    quiz();
  } else {
    console.log("Thank you for your time");
  }