'use strict'

// const images = [];

// const Image (name, src, alt){
//   this.name = name;
//   this.src = src;
//   this.alt = alt;

//   Image.images.push(this);
// }

// Image.prototype.displayImages = function() {

// }

// =======================

const animalArray = [];
function Animal (name, src, hobbies){
  this.name = name;
  this.src = src;
  this.hobbies = hobbies;
  animalArray.push(this);
}
const animalsFromData = hornedAnimals => {
  hornedAnimals.forEach( horns => {
    new Animal (horns.name, horns.image_url, horns.hobbies);
  });
  //  eventually iterate through `animalArray` &
  //  render w/ Jquery
};
const pullObject = {
  method: ‘get’,
  dataType: ‘json’
};
$.ajax(‘data/page-1.json’).then(animalsFromData);