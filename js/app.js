'use strict';

// constructor function
const animalArray = [];
const testArray = [];

function Animal (title, image_url, description, keyword, horns){
  this.name = title;
  this.src = image_url;
  this.description = description;
  this.keyword = keyword;
  this.horns = horns;

  animalArray.push(this);
}

Animal.prototype.renderImage = function() {

  const $clonedSectionEl = $('#photo-template').clone();
  // console.log($clonedSectionEl);

  // $clonedSectionEl.find('h2').text(this.name);
  $clonedSectionEl.find('img').attr('src', this.src).attr('alt', this.description);
  // $clonedSectionEl.find('p').text(this.description);

  $('main').append($clonedSectionEl);

};

Animal.prototype.filterImages = function(){

  // eslint-disable-next-line no-empty
  if (!testArray.includes(this.keyword)){
    testArray.push(this.keyword);
    const $clonedOptionEl = $('#dropdown').clone();
    $clonedOptionEl.text(this.keyword);
    $('select').append($clonedOptionEl);
  }

};




//Animal.populateFilter = function()
//empty array
//loop pover animal array
// if no keyword, push into array
// if empty array has keyword, then skip
// loop over new array w/ keywords
//string of option tag w/ keyword -- appended to
// needs sep optiont tags for dropdown to function




const animalsFromData = hornedAnimals => {
  hornedAnimals.forEach( horns => {
    new Animal (horns.title, horns.image_url, horns.description, horns.keyword, horns.horns);
  });

  animalArray.forEach(animalValue => animalValue.renderImage());

  animalArray.forEach(animalValue => animalValue.filterImages());

};
const pullObject = {
  method: 'get',
  dataType: 'json'
};
$.ajax('data/page-1.json', pullObject).then(animalsFromData);



// console.log(animalArray);

console.log(testArray);

