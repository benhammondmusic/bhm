<?php

// Email address verification
function isEmail($email) {
	return filter_var($email, FILTER_VALIDATE_EMAIL);
}

if($_POST) {

    $emailTo = 'benjamin.hammond@gmail.com';

    $clientEmail = addslashes(trim($_POST['email']));
    $name = addslashes(trim($_POST['name']));
    $message = addslashes(trim($_POST['message']));
    $antispam = addslashes(trim($_POST['antispam']));

    $array = array('emailMessage' => '', 'subjectMessage' => '', 'messageMessage' => '', 'antispamMessage' => '');

    if(!isEmail($clientEmail)) {
        $array['emailMessage'] = 'Invalid email!';
    }
    if($name == '') {
        $array['subjectName'] = 'Empty name!';
    }
    if($message == '') {
        $array['messageMessage'] = 'Empty message!';
    }
    if($antispam != '12') {
    	$array['antispamMessage'] = 'Wrong antispam answer!';
    }
    if(isEmail($clientEmail) && $name != '' && $message != '' && $antispam == '12') {
        // Send email
		mail($emailTo, "WEB: " . $name, $message);
    }

    echo json_encode($array);

}

?>
