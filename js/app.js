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


// ===== render w/ Mustache ===== //
Animal.prototype.renderMustache = function () {
  const newHtml = Mustache.render($('#photo-template').html(),this);
  $('main').append(newHtml);
};

Animal.prototype.filterImages = function(){

  if (!testArray.includes(this.keyword)){
    testArray.push(this.keyword);
    const $clonedOptionEl = $('#dropdown').clone();
    $clonedOptionEl.text(this.keyword);
    $('select').append($clonedOptionEl);
  }
};


const animalsFromData = hornedAnimals => {
  hornedAnimals.forEach( horns => {
    new Animal (
      horns.title,
      horns.image_url,
      horns.description,
      horns.keyword,
      horns.horns);
  });

  animalArray.forEach(animalValue => animalValue.renderMustache());

  animalArray.forEach(animalValue => animalValue.filterImages());

};

const pullObject = {
  method: 'get',
  dataType: 'json'
};

$.ajax('data/page-1.json', pullObject).then(animalsFromData);

// ====== Event Handler : Filter ===== //

$('select').change(function () {

  const selected = $('select option:selected').text();

  $('.horned').hide();
  $(`.${selected}`).show();

});


// ====== NOTES ===== //

// read up on template literal notation

// how to hide w/ jQuery

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


