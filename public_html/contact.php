Thanks for your message!

<?php
	
	$userName 		= $_POST['name'];
	$userEmail	 	= $_POST['email'];
	$userMessage 		= $_POST['message'];

	$to 			= "me@benhammondmusic.com";
	$subject 		= "Website Contact Form";
	$body 			= "Information Submitted:";

	$body .= "\r\n Name: " . $userName;
    $body .= "\r\n Email: " . $userEmail; 	
	$body .= "\r\n Message: " . $userMessage;

	mail($to, $subject, $body);
?>