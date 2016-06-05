$(document).ready(function() {
	$("body").css("background-image", "url(IMG/meteor-wallpaper-shots-space-users-desktop.jpg)","max-width","100%");

});

$(document).ready(function()
{
	
    $('.contact').click(function (e) 
    {
        $('.card').toggleClass('active');
        $('.banner').toggleClass('active');
        $('.photo').toggleClass('active');
        $('.social-media-banner').toggleClass('active');
        $('.email-form').toggleClass('active');  
        var buttonText = $('button.contact#main-button').text();
        if (buttonText === 'back')
        {
            buttonText = 'click to get in touch';
            $('button.contact#main-button').text(buttonText);
        }
        else
        {
            buttonText = 'back';
            $('button.contact#main-button').text(buttonText);
        }
    });
});