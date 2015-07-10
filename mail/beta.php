<?php
require 'class.phpmailer.php';

// Check for empty fields
// if(empty($_POST['name'])  		  ||
//    empty($_POST['fathersname'])   ||
//    empty($_POST['nic'])  		  ||
//    empty($_POST['contactnumber']) ||
//    empty($_POST['occupation'])    ||
//    empty($_POST['age'])           ||
//    empty($_POST['email']) 		  ||
//    !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
//    {
// 	echo "No arguments Provided!";
// 	return false;
//    }
	
$name = $_POST['name'];
// $fathersname = $_POST['fathersname'];
// $nic = $_POST['nic'];
// $contactnumber = $_POST['contactnumber'];
// $occupation = $_POST['occupation'];
// $age = $_POST['age'];
// $email_address = $_POST['email'];



$mail = new PHPMailer();
$mail->isSendmail();
$mail->setFrom("volunteer@ffppk.org", "FFP Volunteer Sign Up");
$mail->addReplyTo("abc@xyz.com", "Anonymous");
$mail->addAddress("grunfunke@gmail.com", "FFP");
$mail->Subject = "Image Test";
$mail->Body = "THE NAME IS: $name";
$mail->AddAttachment($_FILES['file']['tmp_name'], $_FILES['file']['name']);
return $mail->send();

?>


<?php
/*
	// Check for empty fields
if(empty($_POST['name'])  		  ||
   empty($_POST['fathersname'])   ||
   empty($_POST['nic'])  		  ||
   empty($_POST['contactnumber']) ||
   empty($_POST['occupation'])    ||
   empty($_POST['age'])           ||
   empty($_POST['email']) 		  ||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
	echo "No arguments Provided!";
	return false;
   }
	
$name = $_POST['name'];
$fathersname = $_POST['fathersname'];
$nic = $_POST['nic'];
$contactnumber = $_POST['contactnumber'];
$occupation = $_POST['occupation'];
$age = $_POST['age'];
$email_address = $_POST['email'];
	
// Create the email and send the message
$to = 'grunfunke@gmail.com'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "Volunteer Form:  $name";
$email_body = "Name: $name\n\nFather's Name: $fathersname\n\nNIC: $nic\n\nContact Number: $contactnumber\n\nOccupation: $occupation\n\nAge: $age\n\nEmail: $email_address";
$headers = "From: volunteer@ffppk.org\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers .= "Reply-To: $email_address";	
mail($to,$email_subject,$email_body,$headers);
return true;					

*/
?>