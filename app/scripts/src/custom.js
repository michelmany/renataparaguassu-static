$(document).ready(function(){
    
    jQuery(document).ready(function() {
        
            // FORM VALIDATE
            $("#formName").validate({
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

                  // FORM SEND AJAX
                  var dados = $( ".j_form_envia" ).serialize();

                  console.log(dados);

                  $.ajax({
                      url: 'file.php',
                      data: dados,
                      type: 'POST',
                      dataType: 'html',
                      success: function(data) {
                          console.log(data);
                          jQuery("#formName").hide();
                          jQuery(".form-thanks").show();                                
                      }
                  }); 

               }
            });

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



