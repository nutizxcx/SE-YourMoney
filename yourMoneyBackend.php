<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: *');
    header('Content-Type: application/json');

    date_default_timezone_set('Asia/Bangkok');
    $requestUrl = basename($_SERVER['HTTP_REFERER']);
    $con = mysqli_connect('localhost','root','','your_money');
                if(mysqli_connect_errno()){
                    echo "Failed to connect to MySQL: " . mysqli_connect_errno();
    }
    

    
    
    switch($requestUrl) {
        case 'login' :
            $input = file_get_contents('php://input');
            $postRequest = json_decode($input);
            $sql = " SELECT *
                     FROM account
                     WHERE username = '".mysqli_real_escape_string($con,trim($postRequest->username))."'
                        AND password = '".mysqli_real_escape_string($con,trim($postRequest->password))."' ";
            $result = mysqli_query($con, $sql);
            if($row = mysqli_fetch_array($result)){
                $currentTimeinSeconds = time();  
                $currentDateAndTime = date('Y-m-d H:i:s',$currentTimeinSeconds) ;
                $sql1 = " INSERT INTO activity_log
                VALUES ('$postRequest->username','$currentDateAndTime','login_success') ";
                mysqli_query($con,$sql1);
                echo json_encode(true);
            }else{
                $currentTimeinSeconds = time();  
                $currentDateAndTime = date('Y-m-d H:i:s',$currentTimeinSeconds) ;
                $sql2 = " INSERT INTO activity_log
                VALUES ('anonymous','$currentDateAndTime','login_fail') ";
                mysqli_query($con,$sql2);
                echo json_encode(false);
            }
   
        break;

        case 'register' :
            $input = file_get_contents('php://input');
            $postRequest = json_decode($input);
            $usernameCheck = 0;
            $emailCheck = 0;
            $username = $postRequest->username;
            $firstname = $postRequest->firstName;
            $lastname = $postRequest->lastName;
            $career = $postRequest->career;
            $income_p_m = (int) $postRequest->income_p_m;
            $password = $postRequest->password;
            $email = $postRequest->email;            

            $sql = "SELECT * FROM account WHERE username = '".$username."' OR email = '".$email."' ";
            $result = mysqli_query($con,$sql);

            while($row = mysqli_fetch_array($result)){
                if($row['username'] == $username)   $usernameCheck++;
                if($row['email'] == $email) $emailCheck++;
            }

            if($usernameCheck > 0 && $emailCheck > 0){
                $currentTimeinSeconds = time();  
                $currentDateAndTime = date('Y-m-d H:i:s',$currentTimeinSeconds) ;
                $sql = "INSERT INTO activity_log
                            VALUES ('anonymous','$currentDateAndTime','register_fail') ";
                mysqli_query($con,$sql);
                echo json_encode('both already used');
            }else if($emailCheck > 0){
                $currentTimeinSeconds = time();  
                $currentDateAndTime = date('Y-m-d H:i:s',$currentTimeinSeconds) ;
                $sql = "INSERT INTO activity_log
                            VALUES ('anonymous','$currentDateAndTime','register_fail') ";
                mysqli_query($con,$sql);
                echo json_encode('this email already used');
            }else if($usernameCheck > 0){
                $currentTimeinSeconds = time();  
                $currentDateAndTime = date('Y-m-d H:i:s',$currentTimeinSeconds) ;
                $sql = "INSERT INTO activity_log
                            VALUES ('anonymous','$currentDateAndTime','register_fail') ";
                mysqli_query($con,$sql);
                echo json_encode('this username already used');
            }else {
                
                $sql = "INSERT INTO account 
                VALUES ( '$username', '$password'
                ,'$firstname' ,'$lastname' , '$career'
                ,'$income_p_m' , '$email') ";

                mysqli_query($con,$sql);

                $currentTimeinSeconds = time();  
                $currentDateAndTime = date('Y-m-d H:i:s',$currentTimeinSeconds) ;
                $sql = "INSERT INTO activity_log
                            VALUES ('$username','$currentDateAndTime','register_success') ";
                mysqli_query($con,$sql);

            }

            
        break;

        case 'forgot-pw' :
            $input = file_get_contents('php://input');
            $postRequest = json_decode($input);
            
            $to = 'nutzxcx@hotmail.com';
            $subject = 'this is test email';
            $message = 'Hi Nut';

            $header = 'From: Nut PHP ';
            $header = 'Reply-to: nutzxcx@gmail.com\r\n';
            $header = 'Content-type: text/html\r\n ';

            mail($to, $subject, $message, $header);

        break;

        case 'edit-profile':
            $input = file_get_contents('php://input');
            if($postRequest = json_decode($input)){
                

                $sql = "UPDATE account 
                        SET firstname = '".$postRequest->firstName."', lastname = '".$postRequest->lastName."'
                        , career = '".$postRequest->career."', monthly_income = '".$postRequest->income_p_m."'
                        WHERE username = '".$postRequest->username."'
                        ";

                if(mysqli_query($con,$sql)){
                    $currentTimeinSeconds = time();  
                    $currentDateAndTime = date('Y-m-d H:i:s',$currentTimeinSeconds) ;
                    $sql = "INSERT INTO activity_log
                            VALUES ('$postRequest->username','$currentDateAndTime','edit_success') ";
                    mysqli_query($con,$sql);
                    echo json_encode("edit success");
                }else{
                    $currentTimeinSeconds = time();  
                    $currentDateAndTime = date('Y-m-d H:i:s',$currentTimeinSeconds) ;
                    $sql = "INSERT INTO activity_log
                            VALUES ('$postRequest->username','$currentDateAndTime','edit_fail') ";
                    mysqli_query($con,$sql);
                    echo json_encode("edit fail");
                }


            }else {
                $sql = "SELECT firstname, lastname, career, monthly_income
                        FROM account
                        WHERE username = '".$input."' ";

                $result = mysqli_query($con,$sql);
                if($row = mysqli_fetch_array($result)){
                }
                echo json_encode($row);

            }
            

        break;

        case 'delete-user':
            $count = 0;
            if($input = file_get_contents('php://input')){
                $postRequest = json_decode($input,true);
                
                    if($postRequest['mode'] == 1){
                        print_r($postRequest['data']);
                        $data = $postRequest['data'];
                        for($i = 0; $i < sizeof($data); $i++){
                            $sql = 'DELETE FROM account WHERE username = "'.$data[$i]['username'].'" ';
                            if(mysqli_query($con, $sql)){
                                $count++;
                            }
                        }
                        if( $count == sizeof($data)){
                            echo json_encode('delete success');
                        }else{
                            echo json_encode('delete fail');
                        }
                    }
            }else{
                $array[] = array();
                $i = 0;
                $sql = "SELECT username 
                        FROM account";

                $result = mysqli_query($con, $sql);
                while($row = mysqli_fetch_array($result)){
                    $array[$i] = new stdClass();
                    $array[$i]->username = $row[0];
                    $array[$i]->selected = false;
                    $i++;
                }
                echo json_encode($array);
            }
        break;
        
        case 'account-detail':
            $array[] = array();
            $i = 0;
            $input = file_get_contents('php://input');
            $postRequest = json_decode($input);
                if($postRequest->mode == 1){
                    // $sql = 'SELECT * FROM account a
                    //         LEFT JOIN account_bank ab
                    //         ON a.username = ab.username
                    //         LEFT JOIN bank b
                    //         ON ab.bank_id = b.bank_id
                    //         LEFT JOIN account_monthly_fee amf
                    //         ON a.username = amf.username
                    //         LEFT JOIN monthly_fee mf
                    //         ON amf.fee_id = mf.fee_id
                    //         WHERE a.username = "'.$postRequest->username.'"
                    //         ';
                    $sql = 'SELECT * FROM account WHERE username = "'.$postRequest->username.'"';
                    $result = mysqli_query($con, $sql);
                    if($row = mysqli_fetch_array($result)){
                        echo json_encode($row);
                    }else{
                        echo json_encode('fail');
                    }
                    
                }else if($postRequest->mode == 2){
                    $sql = 'SELECT * FROM account_bank ab
                            LEFT JOIN bank b
                            ON ab.bank_id = b.bank_id
                            WHERE ab.username = "'.$postRequest->username.'"';
                    $result = mysqli_query($con, $sql);
                    while($row = mysqli_fetch_array($result)){
                        $array[$i] = $row;
                        $i++;
                    }
                    if($i > 0){
                        echo json_encode($array);
                    }else{
                        echo json_encode('empty');
                    }
                }else if($postRequest->mode == 3){
                    $sql = 'SELECT * FROM account_monthly_fee amf
                            LEFT JOIN monthly_fee mf
                            ON  amf.fee_id = mf.fee_id
                            WHERE amf.username = "'.$postRequest->username.'"';
                    $result = mysqli_query($con, $sql);
                    while($row = mysqli_fetch_array($result)){
                        $array[$i] = $row;
                        $i++;
                    }
                    if($i > 0){
                        echo json_encode($array);
                    }else{
                        echo json_encode('empty');
                    }
                }
        break;


       
    }
    mysqli_close($con);
    return;

    



?>