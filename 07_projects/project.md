# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode-ej1dwyhz?file=index.html)

#  Solution code

## project1

```javascript
const buttons = document.querySelectorAll('.button');
//console.log(buttons);

const body = document.querySelector('body');

buttons.forEach(function (button) {
  //console.log(button);

  //Event Listner
  button.addEventListener('click', function (e) {
    //console.log(e);
    console.log(e.target.id);
    if (e.target.id == 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id == 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id == 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id == 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id == 'orange') {
      body.style.backgroundColor = e.target.id;
    }
  });
});


```