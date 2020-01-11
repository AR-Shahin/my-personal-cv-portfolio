$(document).ready(function(){
  var $grid =  $('.grid').isotope({
  itemSelector: '.grid-item',
  percentPosition: true,
  masonry: {
    // use outer width of grid-sizer for columnWidth
    columnWidth: '.grid-sizer'
  }
})
    
    
$('.btn-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});
    /* projects btn*/
    $('.btn').click(function(){    $(this).addClass('active').siblings().removeClass('active');
    });
     /* card-first-carousel*/
 $('.carousel').carousel({
  interval: 100;
});
    
});
