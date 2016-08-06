$(document).ready(function(){
    
    function adjustSizes() {
        var screenWidth = screen.width;
        var screenHeight = screen.height; 
        var displayWidth = jQuery(window).width();
        var displayHeight = jQuery(window).height();

        if(displayWidth>748 && displayWidth<1200) {
            jQuery(".text-content").css('margin-top','0');
            jQuery(".text-content").each(function(){
                var thisHeight=jQuery(this).height();
                var rowHeight=jQuery(this).parent().parent().height();
                var marginTop=Math.floor((rowHeight-thisHeight)/2);
                jQuery(this).css('margin-top',marginTop+'px');
            });
            
            jQuery(".img-content").each(function(){
                var thisWidth=jQuery(this).width();
                // var thisHeight=Math.floor((thisWidth)*2/3);
                var copyHeight = $(".section3-copy").height();
                console.log(copyHeight);
                // jQuery(this).css('height',thisHeight+'px');
                jQuery(this).css('height',copyHeight+60+'px');                    
            });
            
        } 
        else if (displayWidth>1200) {
            jQuery(".text-content").css('margin-top','0');
            jQuery(".text-content").each(function(){
                var thisHeight=jQuery(this).height();
                var rowHeight=jQuery(this).parent().parent().height();
                var marginTop=Math.floor((rowHeight-thisHeight)/2);
                jQuery(this).css('margin-top',marginTop+'px');
            });

            jQuery(".img-content").each(function(){
                var thisWidth=jQuery(this).width();
                var thisHeight=Math.floor((thisWidth)*2/3);
                jQuery(this).css('height',thisHeight+'px');
                
            });
        }

        else {
            jQuery(".text-content").css('margin-top','0');
            jQuery(".img-content").css('height', displayWidth);
        } 

    }

    jQuery(document).ready(adjustSizes);
    jQuery(window).resize(adjustSizes);
    jQuery(window).load(adjustSizes);

    jQuery(document).ready(function() {
        
            // FORM DOWNLOAD THE REQUEST
            $("#formKnowMore").validate({
              onkeyup: false,
              onfocusout: false,
                rules: {
                    name: {
                        required: true,
                        minlength: 2
                    },
                    email: {
                        required: true
                    },
                    region: {
                        required: true
                    }
                },
                messages: {
                    name: {
                      required: "Please enter your name"
                    },
                    email: {
                      required: "Please enter your email",
                      email: "Please check email address is correct"
                    },
                    region: {
                      required: "Please select your region."
                    }                           
                },

               submitHandler: function() {

                  var dados = $( ".j_form_envia" ).serialize();

                  console.log(dados);

                  $.ajax({
                      url: 'process-form1-local.php',
                      data: dados,
                      type: 'POST',
                      dataType: 'html',
                      success: function(data) {
                          console.log(data);
                          jQuery("#formKnowMore").hide();
                          jQuery(".form-thanks").show();
                          window.location.href='pdf/filepdf.php';                                  
                      }
                  }); 

               }
            });

            // FORM REQUEST CALL
            $("#formRequestCall").validate({
              onkeyup: false,
              onfocusout: false,
                rules: {
                    name: {
                        required: true,
                        minlength: 2
                    },
                    email: {
                        required: true
                        // email: true
                    },
                    telephone: {
                        required: true
                    },
                    region: {
                        required: true
                    }
                },
                messages: {
                    name: {
                      required: "Please enter your name."
                    },
                    email: {
                      required: "Please enter your email.",
                      email: "Please check email address is correct."
                    },
                    telephone: {
                      required: "Please enter your telephone."
                    },
                    region: {
                      required: "Please select your region."
                    }                                                  
                },

                submitHandler: function() {
                    var dados = $( ".j_formBottom_envia" ).serialize();
                    console.log(dados);

                    $.ajax({
                        url: 'process-form2-local.php',
                        data: dados,
                        type: 'POST',
                        dataType: 'html',
                        success: function(data) {
                            console.log(data);
                            jQuery(".form2").hide();
                            $('#formRequestCall')[0].reset();
                            jQuery(".form-thanks-requestcall").show();

                            $('.reset-form').click(function(){
                                jQuery(".form-thanks-requestcall").fadeOut();                                       
                                jQuery(".form2").fadeIn();
                            });                         
                        }
                    });

               }
            });  //#formRequestCall     


	        // scroll the window
	      $('a.view-btn').click(function(e) {
	        e.preventDefault();
	        // Check https://github.com/flesler/jquery.scrollTo for more customizability
	        $(window).stop(true).scrollTo(this.hash, {
	            duration:1000, 
	            interrupt:true,
	            offset:-100
	        });
	      });                 

    });

    //activate WOW.js
    new WOW().init();
});



