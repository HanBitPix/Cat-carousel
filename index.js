'use strict';

/*

Cat carousel
In this challenge, you need to write JavaScript that provides the following experience: 
when a user selects one of the thumbnail images using the mouse or keyboard, that image 
should be displayed in the full-size image container at the top. Updating the image should 
also update its alt attribute. To test keyboard interactivity, you can Tab to one of the 
thumbnails and press the Enter key.

Some of the methods we discussed in the previous assignment might be helpful here, but you 
should also use the jQuery docs and Google if you're not sure what to do here. Researching 
on your own is a key skill, and it'll get easier with practice.

*/

$('.thumbnails input').on('click',function(){
  // Finds the images's src and inputs it
  let $clickedImageSrc = $(this).attr('src');

  // Finds the images's alt and inputs it
  let $clickedImageAlt = $(this).attr('alt');

  // Replacing the "src" of the Big Image with the new selected image
  $('.hero img').attr('src', $clickedImageSrc);

  // Replacing the "alt" of the Big Image with the new selected image
  $('.hero img').attr('alt', $clickedImageAlt);
});