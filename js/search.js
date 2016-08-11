var finishedSearch = $('#card-results');
var resultsArr = [];

function addCard(card) {


  // Retrieves img. Functional but currently being refused connection
  // var cardImg = $('<img>');
  // cardImg.attr('src', 'http://magiccards.info/scans/en/' + card.printings[0].toLowerCase() + '/' + card.number + '.jpg');
  // cardItem.append(cardImg);

  //Explore pushing results to an array and then displaying each as a li



  var whiteSearch = $('.white');
  var blueSearch = $('.blue');
  var blackSearch = $('.black');
  var redSearch = $('.red');
  var greenSearch = $('.green');
  console.log(card.colors);

  var mythicSearch = $('.mythic');
  var rareSearch = $('.rare');
  var uncommonSearch = $('.uncommon');
  var commonSearch = $('.common');
  console.log(card.colors);


  if (whiteSearch.prop('checked') && (card.colors.indexOf('White') !== -1)) {
    resultsArr.push(card);
    console.log(resultsArr);
  } else if (blueSearch.prop('checked') && (card.colors.indexOf('Blue') !== -1)) {
      resultsArr.push(card);
      console.log(resultsArr);
  } else if (blackSearch.prop('checked') && (card.colors.indexOf('Black') !== -1)) {
      resultsArr.push(card);
      console.log(resultsArr);
  } else if (redSearch.prop('checked') && (card.colors.indexOf('Red') !== -1)) {
      resultsArr.push(card);
      console.log(resultsArr);
  } else if (greenSearch.prop('checked') && (card.colors.indexOf('Green') !== -1)) {
      resultsArr.push(card);
      console.log(resultsArr);
  }

  if (mythicSearch.prop('checked') && (card.rarity.indexOf('Mythic Rare') !== -1)) {
    resultsArr.push(card);
    console.log(resultsArr);
  } else if (rareSearch.prop('checked') && (card.rarity.indexOf('Rare') !== -1)) {
      resultsArr.push(card);
      console.log(resultsArr);
  } else if (uncommonSearch.prop('checked') && (card.rarity.indexOf('Uncommon') !== -1)) {
      resultsArr.push(card);
      console.log(resultsArr);
  } else if (commonSearch.prop('checked') && (card.rarity.indexOf('Common') !== -1)) {
      resultsArr.push(card);
      console.log(resultsArr);
  }
}

for (var i = 0 ; i < resultsArr.length ; i++) {
    postResult(resultsArr[i]);
}
var cardItem = $('<li>');
cardItem.html('<h2>' + card.name + '</h2>' + '<p>' + card.manaCost + '<br>' + card.type + '<br>' + card.rarity + '<br>' + card.text + '</p>');
function postResult(cardPost) {
  finishedSearch.hide();
  finishedSearch.append(cardItem);
  finishedSearch.fadeIn();
}


$('#search-submit').on('click', function(event){
  event.preventDefault();
  $.ajax({
    type: 'GET',
    url: 'json/ARB-x.json',
    dataType: 'json',
    success: function(result) {
      console.log(result);
      console.log($('#card-form'));
      finishedSearch.empty();
      for(var i = 0; result.cards.length ; i++) {
        addCard(result.cards[i]);
      }
    }
  });
});



// testing getting form elements
// var x = $('#card-form');
// console.log(x);
