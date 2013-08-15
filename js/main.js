function showPhoneNumber() {
    $('#phoneNumber').show();
}
function closePhoneNumber() {
    $('#phoneNumber').hide();
}

$(document).ready(function(){
	$('.carousel').carousel({
  		interval: 6000
	});
});

function callModal (item) {
	var title = $(item).children('.caption').html();
	$(".modal-title").empty();
	$(".modal-title").append(title);
	
	var thumbSrc = $(item).children('img').attr("src");
	var imgSrc = thumbSrc.replace("_thumb", "");
	var imgHtml = '<img src="' + imgSrc + '" alt="" class="img-responsive">'
	$(".modal-body").empty();
	$(".modal-body").append(imgHtml);
	$('#myModal').modal();
}