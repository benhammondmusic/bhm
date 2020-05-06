(function($) {
    // Select the form and form message
    var form = $('#contact-form'),
        form_messages = $('#form-messages');
        
    // Action at on submit event
    $(form).on('submit', function(e) {
        e.preventDefault(); // Stop browser loading
		
		console.log("got here");
		
        // Get form data
        var form_data = $(form).serialize();
        
        // Send Ajax Request
        var the_request = $.ajax({
            type: 'POST', // Request Type POST, GET, etc.
            url: "contact.php",
            data: form_data
        });
        
        // At success
        the_request.done(function(data){
            form_messages.text("Success: "+data);
            
            // Do other things at success
        });
        
        // At error
        the_request.done(function(){
            form_messages.text("Error: "+data);
            
            // Do other things at fails
        });
    });
})(jQuery);

// $(function() {

// 	// Get the form.
// 	var form = $('#contact-form');

// 	// Get the messages div.
// 	var formMessages = $('#form-messages');

// 	// Set up an event listener for the contact form.
// 	$(form).submit(function(e) {


// 		// Stop the browser from submitting the form.
//         e.preventDefault();

// 		// Serialize the form data.
// 		var formData = $(form).serialize();

// 		// Submit the form using AJAX.
// 		$.ajax({
// 			type: 'POST',
// 			url: $(form).attr('action'),
// 			data: formData
// 		})
// 		.done(function(response) {
// 			// Make sure that the formMessages div has the 'success' class.
// 			$(formMessages).removeClass('error');
// 			$(formMessages).addClass('success');

// 			// Set the message text.
// 			$(formMessages).text(response);

// 			// Clear the form.
// 			$('#name').val('');
// 			$('#email').val('');
// 			$('#message').val('');
// 		})
// 		.fail(function(data) {
// 			// Make sure that the formMessages div has the 'error' class.
// 			$(formMessages).removeClass('success');
// 			$(formMessages).addClass('error');

// 			// Set the message text.
// 			if (data.responseText !== '') {
// 				$(formMessages).text(data.responseText);
// 			} else {
// 				$(formMessages).text('Oops! An error occured and your message could not be sent.');
// 			}
// 		});

// 	});

// });
