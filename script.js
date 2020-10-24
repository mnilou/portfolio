$(document).ready(function () {
  $('#submit').on('click', function () {
    buildString();
  });

  function buildString() {
    var name = $('#usr').val().trim();
    var treatedName = name.split(' ').join('%20');
    var email = $('#email').val().trim();
    var message = $('#comment').val().trim();
    var treatedMessage = message.split(' ').join('%20');
    var emailString = `mailto:nilou@km-direct.com?subject=message%20from%20portfolio&body=${treatedName},%20${email},%20${treatedMessage}`;
    console.log(treatedName);
    console.log(treatedMessage, emailString);
    $('#emailUrl').attr('action', emailString);
  }
});
