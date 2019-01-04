var kittens = ['Milo', 'Otis', 'Garfield'];
function destructivelyAppendKitten(name) {
  kittens.push(name);
}
var kittens = ['Milo', 'Otis', 'Garfield'];
function destructivelyPrependKitten(name) {
  kittens.unshift(name);
}
var kittens = ['Milo', 'Otis', 'Garfield'];
function destructivelyRemoveLastKitten(name) {
  kittens.pop(name);
}
var kittens = ['Milo', 'Otis', 'Garfield'];
function destructivelyRemoveFirstKitten(name) {
  kittens.shift();
}
var kittens = ['Milo', 'Otis', 'Garfield'];
function appendKitten(name) {
  var newKittens = [...kittens, name];
  return newKittens;
}
var kittens = ['Milo', 'Otis', 'Garfield'];
function prependKitten(name) {
  var newKittens = [name,...kittens];
  return newKittens;
}
var kittens = ['Milo', 'Otis', 'Garfield'];
function removeLastKitten(name) {
  kittens = kittens.slice(2,-3);
  return kittens;
}