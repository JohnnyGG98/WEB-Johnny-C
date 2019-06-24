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
    $("#btn-parar").click(function(){
      $("#caja-infinita").stop();
    });

    $("#btn-call-m").click(function(){
      $("#barra").show("slow", function(){
        $("#sub-barra").animate({
          width: $("#barra").width()
        }, 3000);
      });
    });

    $("#btn-call-o").click(function(){
        $("#sub-barra").animate({
          width: '0px'
        }, 3000,  function(){
          $("#barra").hide("slow");
        });
    });


    $("#btn-ch").click(function(){
      $("#ojo-iz").animate({
        marginTop: "75px"
      }, "slow", function(){
        cambiarColorFondo("#FEA47F");
      }).animate({
        marginLeft: "75px"
      }, "slow", function(){
        cambiarColorFondo("#EAB543");
      }).animate({
        marginTop: "0px"
      }, "slow", function(){
        cambiarColorFondo("#182C61");
      }).animate({
        marginLeft: "0px"
      });
    });
});

function cambiarColorFondo(color){
  $("#cuadrado").css("background-color", color);
}

function bajarScroll(){
  $("html, body").animate({ scrollTop: $(document).height() }, "slow");
}
