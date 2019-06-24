// Write your solution here!
const drivers = [ 'Milo', 'Otis', 'Garfield' ];

function destructivelyAppendDriver (newDriver) {
  drivers.push(newDriver);
};

function destructivelyPrependDriver (newDriver) {
  drivers.unshift(newDriver);
};

function destructivelyRemoveLastDriver () {
  drivers.pop();
};

function destructivelyRemoveFirstDriver () {
  drivers.shift();
};

function appendDriver (name) {
  [...drivers, name];
};

function prependDriver (name) {
  [name, ...drivers];
};
