 // main document ready function to check if dom is loaded fully or not
  $( document ).ready(function() {

    var myFacebookToken = '';

    function getFacebookInfo(){

        $.ajax('https://graph.facebook.com/me?access_token='+myFacebookToken,{

                success : function(response){
                    console.log(response);
                    console.log(typeof(response));
                    

                    
                   
                   $("#myProfileId").html('<a target="blank" href="https://facebook.com/'+response.id+'">https://facebook.com/'+response.id+'</a>');
                       $("#myName").text(response.name);
                        $("#myEmail").text(response.email);
                         $("#myGender").text(response.gender);


                       $("#myHometown").text(response.hometown.name);
                    $("#myStatus").text(response.relationship_status);

                  
                    $("#DOB").text(response.birthday);
                    $("#myLocation").text(response.location.name);
                    $("#myEducation").text(response.education)
                  

                    },

                     /*timeout:500, // in ms



                beforeSend : function(){

                    $('.loader').show();

                },

                complete : function(){

                   $('.loader').hide();

                }*/
                    

                
            }//end argument list 



        );// end ajax call



    }// end get facebook info

    $("#loadDataBtn").on('click',getFacebookInfo)



  });





    