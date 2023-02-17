import { template } from './template';
import { variables } from './variables';
import Handlebars from 'handlebars';
import _merge from 'lodash.merge';

let compiler = Handlebars.compile(template);
let emailCopy = compiler(variables)
  .replace(/\n/g, '\\n')
  .replace(/\r/g, '\\r')
  .replace(/\t/g, '\\t');

const appDiv = document.getElementById('app');
appDiv.innerHTML = emailCopy;
