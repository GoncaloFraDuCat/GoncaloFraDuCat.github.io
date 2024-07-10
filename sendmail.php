<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Set email parameters
    $to = 'goncalocatarro@gmail.com'; // Change to your email address
    $subject = 'New Message from Your Website';
    $headers = 'From: ' . $email . "\r\n" .
               'Reply-To: ' . $email . "\r\n";

    // Email body
    $body = "Name: $name\r\n";
    $body .= "Email: $email\r\n";
    $body .= "Message:\r\n$message";

    // Send email
    if (mail($to, $subject, $body, $headers)) {
        echo 'Your message was sent successfully!';
    } else {
        echo 'There was an error sending your message.';
    }
} else {
    header("Location: /"); // Redirect to homepage if not a POST request
    exit();
}
?>
