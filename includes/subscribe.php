<?php
    // Put your MailChimp API and List ID hehe
    $api_key = 'c4fba4ef80ec92f1efabbe1616338dd7-us12';
    $list_id = 'dc1d537dc2';
    include('MailChimp.php');
    use \DrewM\MailChimp\MailChimp;
    $MailChimp = new MailChimp($api_key);
    $result = $MailChimp->post("lists/$list_id/members", array(
                            'email_address' => $_POST["email"],
                            'status'        => 'subscribed',
                        ));
    if ($MailChimp->success()) {
        // Success message
        echo "Thank you, you have been added to our mailing list.";
    } else {
        // Display error
        $response=$MailChimp->getLastResponse();
        $body = json_decode( $response['body'] );
        if($body->title=="Member Exists"){
            echo "Email already subscribed";
        } else {
            echo $MailChimp->getLastError();
        }
    }
?>
