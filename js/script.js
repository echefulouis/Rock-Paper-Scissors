function rpsGame(choice){
    
    var humanChoice, botChoice;
    humanChoice=choice.id
    botChoice=numberToChoice(randomInt());
    console.log(document.getElementById('rock'));
    console.log('Human', humanChoice);
    console.log('bot', botChoice)
    results =decideWinner(humanChoice,botChoice);
    console.log(results);
    message= finalMessage(results);
    console.log(message)
    rpsfrontEnd(humanChoice,botChoice,message)
}

function randomInt(){
    return botChoice=Math.floor(Math.random()*3);
}

function numberToChoice(number){
    return ['rock','paper','scissors'][number];
}

function decideWinner(human , computer){
    var rpsDatabase={
        'rock':{'scissors':1, 'rock':0.5, 'paper':0},
        'paper':{'scissors':0, 'rock':1, 'paper':0.5},
        'scissors':{'scissors':0.5, 'rock':0, 'paper':1}
    }

    var humanScore= rpsDatabase[human][computer];
    var computerScore= rpsDatabase[computer][human];

    return [humanScore,computerScore]
}

function finalMessage(resultArray){
    if (resultArray[0] === 0){
        return {
            'message': "You Lost!",
            'color': 'red'
        };

    }else if (resultArray[0] === 0.5){
        return {
            'message': "You tied!",
            'color': ''
        };
    }else{
        return {
            'message': "You Won!",
            'color': 'green'
        };
    }
}

function rpsfrontEnd(human,computer,message){
    var buttonDatabase={
        'rock': document.getElementById('rock'),
        'papper': document.getElementById('paper'),
        'scissors': document.getElementById('scissors'),
    }

    //Clear content
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement("div");
    var botDiv = document.createElement("div");
    var messageDiv = document.createElement("div");

    humanDiv.setAttribute('id', 'human');
    botDiv.setAttribute('id', 'bot');
    messageDiv.setAttribute('id', 'message');

    humanDiv.innerHTML=`You picked: ${human}`;
    botDiv.innerHTML=`Computer picked: ${computer}`;
    messageDiv.innerHTML=`${message['message']}`;

    document.getElementById('rps-frontend').appendChild(humanDiv).style.color=`${message['color']}`;
    document.getElementById('rps-frontend').appendChild(botDiv).style.color=`${message['color']}`;
    document.getElementById('rps-frontend').appendChild(messageDiv).style.color=`${message['color']}`;

    document.getElementById('reload').style.display='block';
    document.getElementById('reload').style.textAlign='center';
}

function reload(){
    location.reload();
}