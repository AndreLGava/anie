$(document).ready(function(){

  $("#content").load("pages/introducao.html");
  $("#introducao").addClass("btn-pink-3");

  $("#introducao").click(function(){
    $("#content").load("pages/introducao.html");
    $(".menu button").removeClass("btn-pink-3");
    $(this).addClass("btn-pink-3");
  });

  $("#elementos").click(function(){
    $("#content").load("pages/elementos.html");
    $(".menu button").removeClass("btn-pink-3");
    $(this).addClass("btn-pink-3");
  });

  $("#formatacoes").click(function(){
    $("#content").load("pages/formatacoes.html");
    $(".menu button").removeClass("btn-pink-3");
    $(this).addClass("btn-pink-3");
  });

  $("#img").click(function(){
    $("#content").load("pages/img.html");
    $(".menu button").removeClass("btn-pink-3");
    $(this).addClass("btn-pink-3");
  });

  $("#cores").click(function(){
    $("#content").load("pages/cores.html");
    $(".menu button").removeClass("btn-pink-3");
    $(this).addClass("btn-pink-3");
  });

});