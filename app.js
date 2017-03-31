// replace broken image link
var brokenImg = $('#kitties > img');
brokenImg.attr('src', 'https://slack-imgs.com/?c=1&url=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2FF8oecFGChBsL6%2Fgiphy.gif');

// remove bottom header
$('h1').empty();  // "empty" all h1s
$("h1").remove(); // "remove" all h1s
// append word on line
$('h2').append("Cat");
// remove all pix
// $('img').remove();


$('.cereal-item').on('click', meow);
function meow(){
  alert('meow!');
};


// when mouse enters the image inside cat fall:
  // change the opacity of the image
$('#cat-falll > img').on('mouseenter',changeOpacity)

// define a function that will change the opacity
function changeOpacity(event){
  console.log('changing opacity');
  console.log('this', this);
  $(this).fadeTo(1000, 0.3);
}

function changeOpacity(event){
  console.log('changing opacity');
  console.log('event.target', event.target);
  var target = $(event.target);
  console.log('$(event.target)', target);
  target.fadeTo(2000, .5);
}

// change something on click of gallery
// h1 color?
$('#cereal-gallery').on('click', changeColor);

function changeColor(event){
  console.log('changing color');
  $('h1').css('color', '#BADA55');
  // event.target is the actual target
  $(event.target).css('background-color', '#C0FFEE');
  // this is the thing the handler was attached to
  $(this).css('background-color', 'gold');
}


// count vowels in a given phrase
// example input: "hello"
// example output: total number of vowels, returned
function countVowels(phrase){
  let numVowels = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  // create for loop to go through length of phrase
  for(let i=0; i<phrase.length; i++){
    // and count, connect phrase with numVowels
    // increase numVowels whenever the current letter
      // is a vowel
    if (vowles.indexOf(phrase[i]) !== -1){
      numVowels++;
    }
  }
  // returns number of vowels
  return numVowels;
}
