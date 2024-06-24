# Async Projects:-

## * Project 1 ( Unlimated Color Changer):-

### HTML
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Number Guessing Game</title>
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

``` javascript
const randomColor = function(){
        const hex = "123456789ABCDEF";
        let color = '#';
        for (i = 0; i = 6; i++){
            color += hex[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    let intervalID;
    const startChangingColor = function(){
        if(!intervalID){
            intervalID = setInterval(changeBGColor, 1000);
        }

        function changeBGColor(){
            document.body.style.backgroundColor = randomColor();
        }
    };

    const stopChangingColor = function(){
        clearInterval(intervalID)
        intervalID = null;
    }

    document.querySelector('#start').addEventListener('click', startChangingColor)

    document.querySelector('#stop').addEventListener('click', stopChangingColor)
```

## * Project 2 ( keyBoard Check ) :-

### HTML

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Event KeyCodes</title>
    <link rel="stylesheet" type="text/css" href="styles.css" />
    <style>
      table,
      th,
      td {
        border: 1px solid #e7e7e7;
      }
      .project {
        background-color: #1c1c1c;
        color: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        height: 100vh;
      }

      .color {
        color: aliceblue;
        display: flex;
        flex-direction: row;
      }
    </style>
  </head>
  <body>
    <div class="project">
      <div id="insert">
        <div class="key">Press the key and watch magic</div>
      </div>
    </div>

    <script src="index.js"></script>
  </body>
</html>
```
## JavaScript

```Javascript
const insert = document.getElementById('insert')

window.addEventListener('keydown', (e) => {
    insert.innerHTML = `
     <div class='color'>
        <table>
        <tr>
            <th>Key</th>
            <th>Keycode</th>
            <th>Code</th>
        </tr>
        <tr>
            <td>${e.key === " " ? "Space": e.key}</td>
            <td>${e.keyCode}</td>
            <td>${e.code}</td>
        </tr>
        </table>
     </div>
    `
})
```