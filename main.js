var player1 = Math.floor(Math.random()*6+1);
var player2 = Math.floor(Math.random()*6+1);
function showImage(){
  for (i=0;i<1;i++){
    if (player1 == 1){
      document.querySelector('#img1').setAttribute('src','dice1.png')
    }else if (player1 == 2){
      document.querySelector('#img1').setAttribute('src','dice2.png')
    }else if (player1 == 3){
      document.querySelector('#img1').setAttribute('src','dice3.png')
    }else if (player1 == 4){
      document.querySelector('#img1').setAttribute('src','dice4.png')
    }else if (player1 == 5){
      document.querySelector('#img1').setAttribute('src','dice5.png')
    }else if (player1 == 6){
      document.querySelector('#img1').setAttribute('src','dice6.png')
     }

   }
  for (i=1;i<2;i++){
    if (player2 == 1){
      document.querySelector('#img2').setAttribute('src','dice1.png')
    }else if (player2 == 2){
      document.querySelector('#img2').setAttribute('src','dice2.png')
    }else if (player2 == 3){
      document.querySelector('#img2').setAttribute('src','dice3.png')
    }else if (player2 == 4){
      document.querySelector('#img2').setAttribute('src','dice4.png')
    }else if (player2 == 5){
      document.querySelector('#img2').setAttribute('src','dice5.png')
    }else if (player2 == 6){
      document.querySelector('#img2').setAttribute('src','dice6.png')
     }

  }
}
function winDecider(){
  if(player1 > player2){
    document.querySelector('.decider').innerHTML= '🚩Player 1 Wins';
  }else if (player2 > player1){
    document.querySelector('.decider').innerHTML= 'Player 2 Wins🚩';
  }else if (player1 == player2){
    document.querySelector('.decider').innerHTML= '🏳Draw🏳';
  }
}
console.log(player1);
console.log(player2);
showImage();
winDecider();
