//function hover(element) {
//  element.setAttribute('src', 'http://dummyimage.com/100x100/eb00eb/fff');
//}
//
//function unhover(element) {
//  element.setAttribute('src', 'http://dummyimage.com/100x100/000/fff');
//};
//
//console.log("I AM PRETTY.JS");

//https://stackoverflow.com/questions/18032220/css-change-image-src-on-imghover


//$(document).ready(function(){
//  
//  var owl_1 = $('#owl-1');
//  var owl_2 = $('#owl-2');
//  
//  owl_1.owlCarousel({
//    loop:true,
//    margin:10,
//    nav:false,
//    items: 1,
//    dots: false
//  });
//  
//  owl_2.owlCarousel({
//    margin:10,
//    nav: true,
//    items: 5,
//    dots: false
//  });
//  
//  owl_2.find(".item").click(function(){
//    var slide_index = owl_2.find(".item").index(this);
//    owl_1.trigger('to.owl.carousel',[slide_index,300]);
//  });
//  
//  // Custom Button
//  $('.customNextBtn').click(function() {
//    owl_1.trigger('next.owl.carousel',500);
//  });
//  $('.customPreviousBtn').click(function() {
//    owl_1.trigger('prev.owl.carousel',500);
//  }); 
//});



$('.navTrigger').click(function(){
  $(this).toggleClass('active');
});

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

$( ".la" ).mouseover(function() {
	console.log("I AM LA")
  $( "#img-holder" ).append('<img src="img/logical_big.svg">');
});

var imgWidth = $("#img-holder").width(300);

$(document).ready(function() {                  
  $("#img-holder").css("margin-left", "500px");
  //      ^--- change is here
});


$( ".la" ).mouseout(function() {
	console.log("I AM LA MOUSEOUT")
  $( "#img-holder img" ).attr('src', "");
});







$( ".fr" ).mouseover(function() {
	console.log("I AM FR")
  $( "#img-holder" ).append('<img src="img/friendly_big.svg">');
});



$(document).ready(function() {                  
  $("#img-holder").css("margin-left", "500px");
  //      ^--- change is here
});


$( ".fr" ).mouseout(function() {
	console.log("I AM FR MOUSEOUT")
  $( "#img-holder img" ).attr('src', "");
});







$( ".si" ).mouseover(function() {
	console.log("I AM SI")
  $( "#img-holder" ).append('<img src="img/systematic_big.svg">');
});



$(document).ready(function() {                  
  $("#img-holder").css("margin-left", "500px");
  //      ^--- change is here
});


$( ".si" ).mouseout(function() {
	console.log("I AM C MOUSEOUT")
  $( "#img-holder img" ).attr('src', "");
});






$( ".c" ).mouseover(function() {
	console.log("I AM C")
  $( "#img-holder" ).append('<img src="img/caring_big.svg">');
});



$(document).ready(function() {                  
  $("#img-holder").css("margin-left", "500px");
  //      ^--- change is here
});


$( ".c" ).mouseout(function() {
	console.log("I AM C MOUSEOUT")
  $( "#img-holder img" ).attr('src', "");
});




$( ".in" ).mouseover(function() {
	console.log("I AM IN")
  $( "#img-holder" ).append('<img src="img/introverted_big.svg">');
});



$(document).ready(function() {                  
  $("#img-holder").css("margin-left", "500px");
  //      ^--- change is here
});


$( ".in" ).mouseout(function() {
	console.log("I AM IN MOUSEOUT")
  $( "#img-holder img" ).attr('src', "");
});






$( ".ti" ).mouseover(function() {
	console.log("I AM TI")
  $( "#img-holder" ).append('<img src="img/timeefficient_big.svg">');
});



$(document).ready(function() {                  
  $("#img-holder").css("margin-left", "500px");
  //      ^--- change is here
});


$( ".ti" ).mouseout(function() {
	console.log("I AM TI MOUSEOUT")
  $( "#img-holder img" ).attr('src', "");
});






$( ".a" ).mouseover(function() {
	console.log("I AM A")
  $( "#img-holder" ).append('<img src="img/ambitious_big.svg">');
});



$(document).ready(function() {                  
  $("#img-holder").css("margin-left", "500px");
  //      ^--- change is here
});


$( ".a" ).mouseout(function() {
	console.log("I AM A MOUSEOUT")
  $( "#img-holder img" ).attr('src', "");
});





$( ".co" ).mouseover(function() {
	console.log("I AM CO")
  $( "#img-holder" ).append('<img src="img/compassionate_big.svg">');
});



$(document).ready(function() {                  
  $("#img-holder").css("margin-left", "500px");
  //      ^--- change is here
});


$( ".co" ).mouseout(function() {
	console.log("I AM A CO MOUSEOUT")
  $( "#img-holder img" ).attr('src', "");
});







$( ".cr" ).mouseover(function() {
	console.log("I AM CR")
  $( "#img-holder" ).append('<img src="img/creative_big.svg">');
});



$(document).ready(function() {                  
  $("#img-holder").css("margin-left", "500px");
  //      ^--- change is here
});


$( ".cr" ).mouseout(function() {
	console.log("I AM A CR MOUSEOUT")
  $( "#img-holder img" ).attr('src', "");
});








$( ".ac" ).mouseover(function() {
	console.log("I AM AC")
  $( "#img-holder" ).append('<img src="img/academic_big.svg">');
});



$(document).ready(function() {                  
  $("#img-holder").css("margin-left", "500px");
  //      ^--- change is here
});


$( ".ac" ).mouseout(function() {
	console.log("I AM A AC MOUSEOUT")
  $( "#img-holder img" ).attr('src', "");
});







$( ".ca" ).mouseover(function() {
	console.log("I AM CA")
  $( "#img-holder" ).append('<img src="img/caring_big.svg">');
});



$(document).ready(function() {                  
  $("#img-holder").css("margin-left", "500px");
  //      ^--- change is here
});


$( ".ca" ).mouseout(function() {
	console.log("I AM A CA MOUSEOUT")
  $( "#img-holder img" ).attr('src', "");
});





$( ".h" ).mouseover(function() {
	console.log("I AM CA")
  $( "#img-holder" ).append('<img src="img/hardwork_big.svg">');
});



$(document).ready(function() {                  
  $("#img-holder").css("margin-left", "500px");
  //      ^--- change is here
});


$( ".h" ).mouseout(function() {
	console.log("I AM A CA MOUSEOUT")
  $( "#img-holder img" ).attr('src', "");
});






(function() {
  $('.toggle-wrap').on('click', function() {
    $(this).toggleClass('active');
    $('aside').animate({width: 'toggle'}, 200);
  });
})();





//document.getElementById("#img-holder").innerHTML = str.repeat(0);


//$( ".la" ).mouseleave(function() {
//  $( "#img-holder" ).append( "" );
//});


//$('#img-holder-one').hover(
//    function(){
//        // mouseover
//        $(this).find('<img src="img/hardwork_big.svg">').attr({'height':'300px', 'width':'300px'});
//    },
//    function(){
//        // mouseout
//        $(this).find('<img src="img/hardwork_big.svg">').removeAttr('height').removeAttr('width');


