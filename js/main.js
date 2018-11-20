$(function() {
    //Smooth Scrolling
    $(".scroll").click(function (e) {
        e.preventDefault();
        elementClick = $(this).attr("href");
        destination = $(elementClick).offset().top;
        $("body,html").animate({scrollTop: destination }, 800);
    });
})

$(document).ready(function() {
	$('#fullpage').fullpage({
		//options here
		scrollingSpeed: 900,
		scrollBar: true,
      	navigation: true
	});
});

//Slider
function fc() {
elem = document.getElementById("scroller").value;

if (elem >= 20) {
//ert(elem);
console.log(elem);
}
}