import React from 'react';
import ReactDOM from 'react-dom';

const APPS = {}

function renderAppInElement(el) {
  var App = APPS[el.dataset.component];
  if (!App) return;
  // get props from elements data attribute
  const props = Object.assign({}, el.dataset);
  ReactDOM.render(<App {...props} />, el);
}

document
  .querySelectorAll('.__react-app')
  .forEach(renderAppInElement)
