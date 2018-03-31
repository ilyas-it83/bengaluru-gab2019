var remoteServices = (function(){
    var onSignupForUpdates = function(EmailAddress){
    
        if(EmailAddress === undefined || EmailAddress === '' || EmailAddress.length ===0)
        {
             alert("Please provide an email address");
             return ;
            
        }
        if(!isValidEmail(EmailAddress))
        {
            alert("Please provide an valid email address");
             return ;
        }
        var data = { ToAddress : "contact@themvpconference.com"  , Message: EmailAddress +  " signed up for updates", Subject : "MVPConf 2018 - Signup"} ;
        var URL = "https://mvpconfservices.azurewebsites.net/api/SendEmail?code=mlM3sLMcBQVKcvvSyaVOTTAIzqG/7QAuhmudq4VONZT2iJuLNfH6Aw==";
        $.ajax({
            type: "POST",
           
            cache: false,
           
            url: URL,
            data: JSON.stringify(data),
           contentType: "application/json",
            success: function (data) {

                $("form#frmSignup input#txtEmailAddress").val('');
                alert("Successfully registered your email address for sending updates");
                //$("#divMessage").text("Processed Successfully");
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                //$("#divMessage").text(textStatus + "," + errorThrown.toString());
                //window.location.href = "/Logout/ApplicationTimeout";
                alert("Unable to register, please try again");
            }
        });
        
    };
    
    var isValidEmail = function isEmail(email) {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    };

    return {
        OnSignupForUpdates : onSignupForUpdates
        
    }
    
})();