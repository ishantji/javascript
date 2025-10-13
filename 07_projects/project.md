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

## project 2 solution

```javascript
const form = document.querySelector('form');
// this use case will give you empty value
//const height = parseInt(document.querySelector('#height').value);

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  //console.log(height);
  //console.log(weight);
  const results = document.querySelector('#results');
  let guide;

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    if (bmi < 18.6) {
      guide = 'Under Weight';
    } else if (bmi >= 18.6 && bmi < 24.9) {
      guide = 'Normal Range';
    } else if (bmi >= 24.9) {
      guide = 'Overweight';
    }
    results.innerHTML = `<span>${bmi} <br>${guide}</span>`;
  }
});


```