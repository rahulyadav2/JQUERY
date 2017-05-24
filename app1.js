 $( document ).ready(function() {

    var myFacebookToken = '';

    function getPosts(){

        $.ajax('https://graph.facebook.com/me/posts?access_token='+myFacebookToken,{

                success : function(response){
                    console.log(response.data);
                    console.log(typeof(response));
                    jQuery.each(response.data,function(i, val) {
                        if(typeof(val.message) != "undefined"){
                            $("#posts").append(val.message+'<br/>');
                        }
                    });
            }
          }

            );//end argument list 

// end get facebook info
}

    $("#loadDataBtn").on('click',getPosts);
    $("#loadDataBtn").on('click',getPosts);
  });
