function check_login()
{
 var name=$("#user_name").val();
 var pass=$("#password").val();
 if(name=="root" && pass=="root")
 {
  $('#login').click(function () {
    location.href = "../../dist/index.html"
  });
  $("#user_name").val("");
  $("#password").val("");

 }
 else
 {
  $("#login_form").removeClass('shake_effect');  
  setTimeout(function()
  {
   $("#login_form").addClass('shake_effect')
  },1);  
 }
}
function check_register(){
  var name = $("#r_user_name").val();
  var pass = $("#r_password").val();
  var email = $("r_email").val();
  if(name!="" && pass!="" && email != "")
   {
    $('#create').click(function () {
      $('form').animate({
          height: 'toggle',
          opacity: 'toggle'
      }, 'slow');
  });
    $("#user_name").val("");
    $("#password").val("");
   }
   else
   {
    $("#login_form").removeClass('shake_effect');  
    setTimeout(function()
    {
     $("#login_form").addClass('shake_effect')
    },1);  
   }
}
$(function(){
  $("#create").click(function(){
    check_register();
    return false;
  })
  $("#login").click(function(){
    check_login();
    return false;
  })
  $('.message a').click(function () {
      $('form').animate({
          height: 'toggle',
          opacity: 'toggle'
      }, 'slow');
  });
})