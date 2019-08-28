//UserInterface Logic
$(document).ready(function(){
    $("#design").click(function() {
      $("#design").toggle();
      $("#content5").toggle();
    });
  });
    $(document).ready(function(){
    $("#content5").click(function() {
      $("#design").toggle();
      $("#content5").toggle();
    });
  });
   
  $(document).ready(function(){
    $("#dev").click(function() {
      $("#dev").toggle();
      $("#dev-content").toggle();
    });
  });
    $(document).ready(function(){
    $("#dev-content").click(function() {
      $("#dev").toggle();
      $("#dev-content").toggle();
    });
  });
  $(document).ready(function(){
    $("#product").click(function() {
      $("#product").toggle();
      $("#prod-content").toggle();
    });
  });
    $(document).ready(function(){
    $("#prod-content").click(function() {
      $("#product").toggle();
      $("#prod-content").toggle();
    });
  });
  $("form").submit(function() {
    var name= $("input#name").val();
    alert("We've received your message "+name+". Thank you for contacting us");
    event.preventDefault();
  });
  