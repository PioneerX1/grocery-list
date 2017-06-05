$(document).ready(function() {
  $("form#inputList").submit(function(event) {

    var groceryList = [1, 2, 3, 4, 5];
    var i = 0;

    groceryList.forEach(function(item) {
      groceryList[i] = $("#item" + (groceryList.indexOf(item)+1)).val();
      i++;
    });

    var publishList = groceryList.sort().map(function(item) {
      return item.toUpperCase();
    });

    publishList.forEach(function(item) {
      $("#outputItem" + (publishList.indexOf(item)+1)).text(item);
    });

    $(".outputList").show();
    $("#inputList").hide();


    $("#backButton").click(function(event) {
      //alert('js called');
      $(".outputList").hide();
      $("#inputList").show();

      var form = document.getElementById("inputList");
      form.reset();

    });

    event.preventDefault();
  });
});
