$(window).load(function(){
  // SETUP
  $('#page-title-yes').hide();
  $('#page-title-no').hide();
  $('#meta-description-yes').hide();
  $('#meta-description-no').hide();
  var modalTitle = $('#cms_toolbar .cms_modal .cms_modal-title', window.parent.document);

  setTimeout(function(){
    modalTitle.html('SEO-Check');
    $('.cms_modal', parent.document).find('.cms_modal-body').removeClass('cms_loader');
    $('.cms_modal', parent.document).find('.cms_btn').text('Schließen');
  }, 100);

  // TITLE
  var title = window.parent.document.title;

  // DESCRIPTION
  var metaDescription = $('meta[name="description"]', parent.document);
  if (metaDescription) {metaDescription = metaDescription.attr("content");}

  if (title){
    $('#page-title-yes').show();
  }
  else{
    $('#page-title-no').show();
  }
  if (metaDescription) {
    $('#meta-description-yes').show();
  }
  else{
    $('#meta-description-no').show();
  }

});
