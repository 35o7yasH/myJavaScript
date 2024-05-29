# My mini Projects <3


# Codes :-

## Project_01 (background_Color Changer)

### HTML

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="style.css" />
    <title>JavaScript Background Color Switcher</title>
  </head>
  <body>

    <div class="canvas">
      <h1>Color Scheme Switcher</h1>
      <span class="button" id="grey"></span>
      <span class="button" id="white"></span>
      <span class="button" id="blue"></span>
      <span class="button" id="yellow"></span>
      <h2>
        Try clicking on one of the colors above
        <span>to change the background color of this page!</span>
      </h2>
    </div>
    <script src="index.js"></script>
  </body>
</html>
```
### CSS

```CSS
html {
    margin: 0;
  }
  
  span {
    display: block;
  }
  .canvas {
    margin: 100px auto 100px;
    width: 80%;
    text-align: center;
  }
  
  .button {
    width: 100px;
    height: 100px;
    border: solid black 2px;
    display: inline-block;
  }
  
  #grey {
    background: grey;
  }
  
  #white {
    background: white;
  }
  #blue {
    background: blue;
  }
  #yellow {
    background: yellow;
  }
```
### JS

```javascript
console.log("hitesh")
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    
  });
});
```

## Project_02 (BMI_Calculator)

### HTML
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="styles.css" />
    <title>BMI Calculator</title>
  </head>
  <body>
    <div class="container">

      <h1>BMI Calculator</h1>
      <form>
        <p><label>Height in CM: </label><input type="text" id="height" /></p>
        <p><label>Weight in KG: </label><input type="text" id="weight" /></p>
        <button>Calculate</button>
        <div id="results"></div>
        <div id="weight-guide">
          <h3>BMI Weight Guide</h3>
          <p>Under Weight = Less than 18.6</p>
          <p>Normal Range = 18.6 and 24.9</p>
          <p>Overweight = Greater than 24.9</p>
        </div>
      </form>
    </div>
  </body>
  <script src="index.js"></script>
</html>

```
### CSS

```CSS
.container {
    width: 575px;
    height: 825px;
  
    background-color: #797978;
    padding-left: 30px;
  }
  #height,
  #weight {
    width: 150px;
    height: 25px;
    margin-top: 30px;
  }
  
  #weight-guide {
    margin-left: 75px;
    margin-top: 25px;
  }
  
  #results {
    font-size: 35px;
    margin-left: 90px;
    margin-top: 20px;
    color: rgb(241, 241, 241);
  }
  
  button {
    width: 150px;
    height: 35px;
    margin-left: 90px;
    margin-top: 25px;
    background-color: #fff;
    padding: 1px 30px;
    border-radius: 8px;
    color: #212121;
    text-decoration: none;
    border: 2px solid #212121;
  
    font-size: 25px;
  }
  
  h1 {
    padding-left: 15px;
    padding-top: 25px;
    
  }
  
```

### JavaScript

```javascript
const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)

    const results = document.querySelector('#results')

    if(height === '' || height < 0 || isNaN(height) ){
        results.innerHTML = `Please enter a valid Height.`
    }else if(weight === '' || weight < 0 || isNaN(height) ){
        results.innerHTML = `Please enter a valid Weight.`
    } else {
       const BMI = (weight / ((height*height)/10000)).toFixed(2)
       let message;

       if (BMI < 18.6) {
        message = `You're under weight. And your BMI index is: ${BMI}`;
       }
       else if (BMI >= 18.6 && BMI <= 24.9) {
        message = `You have normal weight. And your BMI index is: ${BMI}`;
       }
       else{
        message = `You're over weight. And your BMI index is: ${BMI}`;
       }
       results.innerHTML = `<span>${message}</span>`
    }

});
```

## Project_03 (Digital Clock)

### HTML

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Your Local Time</title>
    <style>
      body {
        background-color: #212121;
        color: #fff;
      }
      .center {
        display: flex;
        height: 100vh;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }
      #clock {
        font-size: 40px;
        background-color: orange;
        padding: 20px 50px;
        margin-top: 10px;
        border-radius: 10px;
      }
    </style>
  </head>
  <body>
    <div class="center">
      <div id="banner"><span>Your local time</span></div>
      <div id="clock"></div>
    </div>
    <script src="index.js"></script>
  </body>
</html>
```

### JavaScript

```javascript
const clock = document.getElementById('clock')

setInterval(function(){
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}, 1000);
```

## Project_04 (Guess the Number game)

### HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Number Guessing Game</title>
    <link rel="stylesheet" href="style.css">
</head>
<body style="background-color:#212121; color:#fff;">
    
    <div id="wrapper">
      <h1>Number guessing game</h1>
    <p>Try and guess a random number between 1 and 100.</p>
    <p>You have 10 attempts to guess the right number.</p>
    </br>
        <form class="form">
            <label2 for="guessField" id="guess">Guess a number</label>
            <input type="text" id="guessField" class="guessField">
            <input type="submit" id="subt" value="Submit guess" class="guessSubmit">
        </form>

        <div class="resultParas">
            <p >Previous Guesses: <span class="guesses"></span></p>
            <p >Guesses Remaining: <span class="lastResult">10</span></p>
            <p class="lowOrHi"></p>
        </div>
    </div>
    <script src="index.js"></script>
</body>
</html>

```

### CSS
```css
html {
    font-family: sans-serif;
  }
  
  body {
    width: 300px;
    max-width: 750px;
    min-width: 480px;
    margin: 0 auto;
    background-color: #212121;
  }
  
  .lastResult {
    color: white;
    padding: 7px;
  }
  
  .guesses {
    color: white;
    padding: 7px;
  }
  
  button {
    background-color: #141414;
    color: #fff;
    width: 250px;
    height: 50px;
    border-radius: 25px;
    font-size: 30px;
    border-style: none;
    margin-top: 30px;
    /* margin-left: 50px; */
  }
  
  #subt {
    background-color: #161616;
    color: #ffffff;
    width: 200px;
    height: 50px;
    border-radius: 10px;
    font-size: 20px;
    border-style: none;
    margin-top: 50px;
    /* margin-left: 75px; */
  }
  
  #guessField {
    color: #000;
    width: 250px;
    height: 50px;
    font-size: 30px;
    border-style: none;
    margin-top: 25px;
  
    /* margin-left: 50px; */
    border: 5px solid #6c6d6d;
    text-align: center;
  }
  
  #guess {
    font-size: 55px;
    /* margin-left: 90px; */
    margin-top: 120px;
    color: #fff;
  }
  
  .guesses {
    background-color: #7a7a7a;
  }
  
  #wrapper {
    box-sizing: border-box;
    text-align: center;
    width: 450px;
    height: 550px;
    background-color: #474747;
    color: #fff;
    font-size: 25px;
  }
  
  h1 {
    background-color: #161616;
  
    color: #fff;
    text-align: center;
  }
  
  p {
    font-size: 16px;
    text-align: center;
  }  
```
### Javascript

``` javascript
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remainingGuess = document.querySelector('.lastResult')
const lowOrHigh = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')


const p = document.createElement('p')



let prevGuess = []
let numGuess = 1

let playGame = true;


if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}


function validateGuess(guess) {
    if(isNaN(guess)){
        alert('Please enter a valid number')
    } else if(guess < 1){
        alert('Please enter a number more than 1')
    } else if(guess > 100){
        alert('Please enter a number less than 100')
    } else{
        prevGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`Game Over! Random number was ${randomNumber}`)
            endGame()
        } else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }

}

function checkGuess(guess) {
    if(guess === randomNumber){
        displayMessage(`You guessed it right`)
        endGame()
    } else if(guess < randomNumber) {
        displayMessage(`Your guess is too low.`)
    } else if(guess > randomNumber) {
        displayMessage(`Your guess is too high.`)
    }
}

function displayGuess(guess) {
    userInput.value = ''
    guessSlot.innerHTML += `${guess},  `
    numGuess++;
    remainingGuess.innerHTML = `${11 - numGuess}`
}

function displayMessage(message) {
    lowOrHigh.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame"> Start New Game</h2>`;
    startOver.appendChild(p)
    playGame = false;
    newGame()
}



function newGame() {
    const newGameButton = document.querySelector('#newgame')
    newGameButton.addEventListener('click', function(e) {
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remainingGuess.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disable')
        startOver.removeChild(p)


        playGame = true
    })
}
```