# My mini Projects


# Codes :-

## Project_01 

### HTML

``` html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Number Guessing Game</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body style="background-color: #212121; color: #fff">
    <h1>Start should change the Background color every second</h1>
    <button id="start">Start</button>
    <button id="stop">Stop</button>
    <script src="index.js"></script>
  </body>
</html>

```

### JavaScript
```javascript
const randomColor = function(){
  const hex = '123456789ABCDEF';
  let color = '#';
  for (i = 0; i = 6; i++){
    color += hex[Math.floor(Math.random() * 16)]
  }
  return color;
}

let intervalId;
const startChangingColor = function(){
  intervalId = setInterval(changeColor, 1000);

  function changeColor(){
    document.bodu.style.
  }
}


document.querySelector('#start').addEventListener('click', function(){})

```