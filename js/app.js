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
  $clonedSectionEl.find('img').attr('src', this.src)
    .attr('alt', this.description);

  $clonedSectionEl.attr('class',`horned ${this.keyword}`);

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


$('select').change(function () {

  const selected = $('select option:selected').text();

  $('.horned').hide();
  $(`.${selected}`).show();

});


// read up on template literal notation

// how to hide w/ jQuery

/*
$('li:first-child').toggle(); // one way
$('li:first-child').hide(); --> easier
*/


// event listener


/*

$('select').val();
-- pulls value property from html --

1. iterate over array objects
2. if array keyword matches select's keyword
3. get that title
4. select all li's
5. .each === forEach
6. this === <li> iterating over
7. check if the list items text matches the arrays text

*/


