var readlinesync= require('readline-sync');
var chalk =require('chalk');
//Welcome message with username
var username= readlinesync.question(chalk.yellow('Please enter your name = '));

console.log("Hello, "+ username+ "!  "+ "Welcome to Cricket Quiz\n");

console.log(chalk.yellow("Rules of Quiz: "));
console.log(chalk.green("\n Right Answer = 5 pts\n"))
console.log(chalk.red("\n Wrong Answer = -2 pts\n"))
console.log('-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*')

var score=0;
var scores = [];

function play(question,options,answer){
    console.log(chalk.yellow("\n" + question));
  console.log(options);

var userAnswer= readlinesync.question(question);
if(userAnswer.toUpperCase()===answer.toUpperCase()){

  console.log(chalk.greenBright('Hooray! you are right!'));
  score=score+5;
   console.log("your current score is "+ score);
}
else{
  console.log(chalk.red('Oops! wrong answer!'));
    score=score-2;
    console.log(chalk.yellow("your current score is "+ score));
}
console.log('-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*')
}

//questions and answers 
var questionSet=[
  {"question":'Que 01 Which cricket venue is called a Home of Cricket? ',
  "options": " a)Lords\n b)Vankhede\n c)Eden Garden\n d)Oval\n",
  "answer":'a'
  },
   {"question":'Que 02 How many ICC ODI World cup has won by australia ? ',
    "options": " a)3\n b)4\n c)5\n d)2\n",
   "answer":'c'
  },
    {question:'Que 03 Which bowler has taken the highest number of wickets in Test Cricket? ',
    "options": " a)Wasim Akram\n b)Murlitharan\n c)Shene Warne\n d)Anderson\n",
   "answer":'c'
  },
    {"question":'Que 04 How many international centuries has scored by Sachin Tendulkar? ',
      "options":" a)99\n b)101\n c)50\n d)100\n",
   "answer":'d'
  },
    {"question":'Que 05 What is the name given to the bilateral international Test cricket series played between England and Australia? ',
    "options":" a)Ashes\n b)Border-Gavskar Trophy\n c)IPL\n d)Commenwealth\n",
  "answer":'a'
  },

];
function Quiz() {
for(i = 0; i < questionSet.length; i++){
  var currentQuestion = questionSet[i];
  play(currentQuestion.question,currentQuestion.options, currentQuestion.answer);
   console.log(".........................");
}
console.log(chalk.yellow('Your Final Score is '+score+ ' out of 25.'));
console.log(chalk.red('Thank you for playing Quiz. Hope you enjoyed it.'))
}
Quiz();



