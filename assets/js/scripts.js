jQuery(document).ready(function () {
  /*
	    Contact form
	*/
  $('.contact_form_cont form input[type="text"], .contact_form_cont form textarea').on("focus", function () {
    $('.contact_form_cont form input[type="text"], .contact_form_cont form textarea').removeClass("input-error");
  });
  $(".contact_form_cont form").submit(function (e) {
    e.preventDefault();
    $('.contact_form_cont form input[type="text"], .contact_form_cont form textarea').removeClass("input-error");
    var postdata = $(".contact_form_cont form").serialize();
    $.ajax({
      type: "POST",
      url: "assets/contact.php",
      data: postdata,
      dataType: "json",
      success: function (json) {
        if (json.emailMessage != "") {
          $(".contact_form_cont form .contact-email").addClass("input-error");
        }
        if (json.subjectMessage != "") {
          $(".contact_form_cont form .contact-subject").addClass("input-error");
        }
        if (json.messageMessage != "") {
          $(".contact_form_cont form textarea").addClass("input-error");
        }

        // && json.antispamMessage == ''
        if (json.emailMessage == "" && json.subjectMessage == "" && json.messageMessage == "") {
          $(".contact_form_cont form").fadeOut("fast", function () {
            $(".contact_form_cont").append("<p>Thank you for your email! A reply will be sent as soon as possible.</p>");
          });
        }
      },
    });
  });
});
