var finishedSearch = $('#card-results');
var cardName = $('[name="cardname"]');
var cardItem = $('<li>');
var resultsArr = [];
var resultObj;
var cardImg = $('<img>');

var whiteSearch = $('.white');
var blueSearch = $('.blue');
var blackSearch = $('.black');
var redSearch = $('.red');
var greenSearch = $('.green');

var mythicSearch = $('.mythic');
var rareSearch = $('.rare');
var uncommonSearch = $('.uncommon');
var commonSearch = $('.common');

$('#search-submit').on('click', function(event) {
  event.preventDefault();
  for(var i in resultObj.cards) {
    var card = resultObj.cards[i];
    if (card.name.toUpperCase().includes(cardName.prop('value').toUpperCase()) && cardName.prop('value') !== ('')) {
      resultsArr.push(card);
    } else if (whiteSearch.prop('checked') && (card.colors.indexOf('White') !== -1) && (resultsArr.indexOf(card) == -1)) {
        resultsArr.push(card);
    } else if (blueSearch.prop('checked') && (card.colors.indexOf('Blue') !== -1) && (resultsArr.indexOf(card) == -1)) {
        resultsArr.push(card);
    } else if (blackSearch.prop('checked') && (card.colors.indexOf('Black') !== -1) && (resultsArr.indexOf(card) == -1)) {
        resultsArr.push(card);
    } else if (redSearch.prop('checked') && (card.colors.indexOf('Red') !== -1) && (resultsArr.indexOf(card) == -1)) {
        resultsArr.push(card);
    } else if (greenSearch.prop('checked') && (card.colors.indexOf('Green') !== -1) && (resultsArr.indexOf(card) == -1)) {
        resultsArr.push(card);
    } else if (mythicSearch.prop('checked') && (card.rarity.indexOf('Mythic Rare') !== -1) && (resultsArr.indexOf(card) == -1)) {
      resultsArr.push(card);
    } else if (rareSearch.prop('checked') && (card.rarity.indexOf('Rare') !== -1) && (resultsArr.indexOf(card) == -1)) {
        resultsArr.push(card);
    } else if (uncommonSearch.prop('checked') && (card.rarity.indexOf('Uncommon') !== -1) && (resultsArr.indexOf(card) == -1)) {
        resultsArr.push(card);
    } else if (commonSearch.prop('checked') && (card.rarity.indexOf('Common') !== -1) && (resultsArr.indexOf(card) == -1)) {
        resultsArr.push(card);
    }
  }
  postResult(resultsArr);
});

$('#form-reset').on('click', function(event) {
  finishedSearch.empty();
  resultsArr = [];
});

function postResult(cardPost) {
  for (var i in cardPost) {
    var cardData = cardPost[i];
    finishedSearch.hide();
    cardItem.append('<h2>' + cardData.name + '</h2>' + '<p>' + cardData.manaCost + '<br>' + cardData.type + '<br>' + cardData.rarity + '<br>' + cardData.text + '</p>');
    // Retrieves image, disabled to prevent rate limiting. Look into on click for card name
    // var cardImg = $('<img>');
    // cardImg.attr('src', 'http://magiccards.info/scans/en/' + cardData.printings[0].toLowerCase() + '/' + cardData.number + '.jpg');
    // cardItem.append(cardImg);
    finishedSearch.append(cardItem);
    finishedSearch.fadeIn();
  }
}

$.ajax({
  type: 'GET',
  url: 'json/ARB-x.json',
  dataType: 'json',
  success: function(result) {
    console.log(result);
    resultObj = result;
  }
});
