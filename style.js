$(document).ready(function(){
  $(".button, .push").hover(
    function(){
    $(".push").show();
  },
    function(){
    $(".push").hide(1000);
  });
});