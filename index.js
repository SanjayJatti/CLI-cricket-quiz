var readlinesync= require('readline-sync');
//Welcome message with username
var username= readlinesync.question('Please enter your name= ');
console.log("Hello, "+ username+ "!  "+ "Welcome to Cricket Quiz");
console.log('-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*')

var score=0;

function play(question,answer){
var userAnswer= readlinesync.question(question);
if(userAnswer.toUpperCase()===answer.toUpperCase()){
  console.log('Hooray! you are right!');
  score=score+1
}else{
  console.log('Oops! wrong answer!');
}
console.log('-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*')
}

//questions and answers 
var questionSet=[
  {question:'Que 01 Which cricket ground is called a Home of Cricket? ',
  answer:'lords'
  },
   {question:'Que 02 How many ICC ODI World cup has won by australia ? ',
   answer:'5'
  },
    {question:'Que 03 Which bowler has taken the highest number of wickets in Test Cricket? ',
   answer:'shane warne'
  },
    {question:'Que 04 How many international centuries has scored by Sachin Tendulkar? ',
   answer:'100'
  },
    {question:'Que 05 What is the name given to the bilateral international Test cricket series played between England and Australia? ',
  answer:'ashes'
  },
  {question:'Que 06 In which city did Virender Sehwag score his first triple century in 2004? ',
  answer:'multan'
  },
    {question:'Que 07 Who among these Australian players is called Mr Cricket?',
  answer:'Michael Hussey'
  },
      {question:'Que 08 Which player has taken the highest IPL wickets? ',
  answer:'Lasith Malinga'
  },
      {question:'Que 09 Which IPL team has won the most IPL tropies? ',
  answer:'Mumbai Indians'
  },
      {question:'Que 10 Which player has IPL 2016 Orange Cap? ',
  answer:'virat kohli'
  }
];

for(i = 0; i < questionSet.length; i++){
  var currentQuestion = questionSet[i];
  play(currentQuestion.question, currentQuestion.answer);
}


console.log('Your Final Score is '+score+ ' out of 10.');
console.log('Well played '+username)
console.log('Thank you for playing Quiz. Hope you enjoyed it.')

