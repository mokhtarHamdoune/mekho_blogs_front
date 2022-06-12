import _ from "lodash";


const element = document.createElement('div');
  const btn = document.createElement('button');

   element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  btn.innerHTML = 'Click me and check the console!';

  element.appendChild(btn);

document.body.appendChild(element);