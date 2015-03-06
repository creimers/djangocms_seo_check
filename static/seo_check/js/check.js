$(window).load(function(){
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

  var title = window.parent.document.title;
  var metaDescription = window.parent.document.getElementsByTagName('meta').item(property='description');
  if (metaDescription) {metaDescription = metaDescription.content;}

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
