$(function(){


  let element = $('.soPagination');
  let length = $('.soPagination .elements ul li').length;
  let pagingElements = $('.pagingElements');
  let totalData = 2;
  let totalPage = Math.ceil(length / 2);


  // Menüleri Yerine Koyma
  for(let i = 1; i < totalPage; i++){
    pagingElements.append("<li><a href='javascript: void(0);'>" + i + "</a></li>");
  }

});
