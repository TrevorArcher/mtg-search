function addCard(card) {
  var cardItem = $('<li>');
  cardItem.append(card.name);

  var finishedSearch = $('#card-results');
  finishedSearch.append(cardItem);
  finishedSearch.fadeIn();
}
$('#search-submit').on('click', function(event){
  event.preventDefault();
  $.ajax({
    type: 'GET',
    url: 'json/EMA-x.json',
    dataType: 'json',
    success: function(result) {
      console.log('this happened');
      // var $whiteCheck = $('input.white');
      // console.log($whiteCheck);
      // for (var i = 0; i < result.length; i++) {
      //   addCard(result[i]);
      //   console.log(addCard(result[i]));
      // }
      addCard('sen triplets');
    }
  });
});



// testing getting form elements
// var x = $('#card-form');
// console.log(x);
