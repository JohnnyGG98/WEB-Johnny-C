/*
Siempre ejecutar codigo luego de que la pagina este cargada

$(document).ready(function(){


});
*/
$(document).ready(function(){
    $("#btn-p").click(function(){
      $("#p-ocultar").hide();
    });
    $("#btn-m").click(function(){
      $("#p-ocultar").show();
    });
    $("#btn-t").click(function(){
      $("#p-ocultar").toggle();
    });

    $("#btn-f").click(function (){
      $("#p-fade").fadeToggle();
      $("#foot-fade").fadeToggle("slow");
    });

    $("#btn-s").click(function(){
      $("#img").slideToggle("slow");
    });

    $("#btn-ani").click(function(){
      var caja = $("#caja");
      var sub_caja = $("#sub-caja");
      caja.animate({width: '300px'}, "slow");
      sub_caja.animate({
        height: '100px',
        width: '50px'
      }, "slow");
      bajarScroll();
      caja.animate({height: '300px'}, "slow");
      sub_caja.animate({
        width: '300px',
        height: '100px'
      }, "slow");
      bajarScroll();
      caja.animate({width: '500px'}, "slow");
      sub_caja.animate({height: '300px'}, "slow");
    });

    $("#btn-infinito").click(function(){
      $("#caja-infinita").slideToggle(5000);
    });
    $("btn-parar").click(function(){
      $("caja-infinita").stop();
    });
});

function bajarScroll(){
  $("html, body").animate({ scrollTop: $(document).height() }, "slow");
}
