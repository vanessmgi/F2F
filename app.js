// stop video

$(document).ready(function () {
   var closeBtn = $('.close');

   closeBtn.on('click', function () {
      //alert("test");
      $iframe = $(this).parent().parent().find('iframe');
      $iframe.attr('src', $iframe.attr('src'));
   })
})


// cookies

$('.alert').alert()

