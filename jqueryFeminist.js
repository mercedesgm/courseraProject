$(function(){
  $("#timelineContainer").on('wheel',function(event){event.stopPropagation();});

  $("#rowContainer").on('wheel',function(event){
      var scrollLeft = $(this).scrollLeft();
      var delta = event.originalEvent.deltaY;
      this.scrollLeft += delta;
      event.preventDefault();
    });

});



