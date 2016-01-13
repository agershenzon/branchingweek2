$(document).ready(function() {

  $("img").click(function() {
     var img_id = this.id;
      // alert(img_id);
     if (img_id === 'tiger') {
       $('#tiger-text p').show();
       $('#parrot-text p, #snowleopard-text p').hide();
     } else if (img_id === 'parrot') {
       $('#parrot-text p').show();
       $('#tiger-text p, #snowleopard-text p').hide();
     } else if (img_id === 'snowleopard') {
       $('#snowleopard-text p').show();
       $('#parrot-text p, #tiger-text p').hide();
       }

  });
});
