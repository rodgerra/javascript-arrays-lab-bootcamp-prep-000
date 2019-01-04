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