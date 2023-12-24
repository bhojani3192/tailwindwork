var owl = $('.owl-carousel');
owl.owlCarousel({
    items:4, 
  // items change number for slider display on desktop
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true
});

jQuery(document).ready(function(){
    jQuery(".nav-tabs li.active").click(); 
        
     jQuery(".nav-tabs li").click(function(e){
   e.preventDefault();
         jQuery(".nav-tabs li").removeClass('active');
         jQuery(this).addClass('active');
        let tid=  jQuery(this).find('a').attr('href');
         console.log("ID:"+tid);
         jQuery('.tab-pane').removeClass('active in');
         jQuery(tid).addClass('active in');
     });
   });