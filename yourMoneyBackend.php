<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: *');
    header('Content-Type: application/json');
    header('Content-Type: text/html; charset=utf-8_bin');

    date_default_timezone_set('Asia/Bangkok');
    $requestUrl = basename($_SERVER['HTTP_REFERER']);
    $con = mysqli_connect('localhost','root','','your_money');
                if(mysqli_connect_errno()){
                    echo "Failed to connect to MySQL: " . mysqli_connect_errno();
    }
    mysqli_query($con,"SET CHARACTER SET UTF8");
    



    
    
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

        //////////////////////////////////////////////////////

        case 'edit-monthly-fee':
            $input = file_get_contents('php://input');
            $postRequest = json_decode($input);
            if($postRequest->mode == 1){
                $username = $postRequest->username;
                $fee_id = $postRequest->fee_id;
                $fee_name = $postRequest->fee_name;
                $fee_price = (int)$postRequest->fee_price;
                $fee_period = (int)$postRequest->fee_period;
                $fee_type = $postRequest->fee_type;
                $sql = "UPDATE monthly_fee m 
                    INNER JOIN account_monthly_fee a ON a.fee_id = m.fee_id 
                    SET m.fee_name = '$fee_name' ,m.fee_price= '$fee_price',m.fee_period='$fee_period' ,m.fee_type='$fee_type'
                    WHERE a.username='".$username."' AND a.fee_id = '".$fee_id."'";
                $result = mysqli_query($con, $sql);
                $currentTimeinSeconds = time();  
                $currentDateAndTime = date('Y-m-d H:i:s',$currentTimeinSeconds) ;
                $sql = "INSERT INTO activity_log
                            VALUES ('$username','$currentDateAndTime','edited-monthly-fee') ";
                mysqli_query($con,$sql);
            }else{
                $fee_id = $postRequest->fee_id;
                $sql = "SELECT fee_name,fee_price,fee_period,fee_type
                        FROM monthly_fee
                        WHERE fee_id = '".$fee_id."' ";

                $result = mysqli_query($con,$sql);
                if($row = mysqli_fetch_array($result)){
                }
                echo json_encode($row);
            }
        break;

        case 'add-monthly-fee':
            $input = file_get_contents('php://input');
            $postRequest = json_decode($input);
            $username = $postRequest->username;
            $fee_name = $postRequest->fee_name;
            $fee_price = (int)$postRequest->fee_price;
            $fee_period = (int)$postRequest->fee_period;
            $fee_type = $postRequest->fee_type;
            //insert to table monthly_fee
            $sql = "INSERT INTO monthly_fee (monthly_fee.fee_name,monthly_fee.fee_price,monthly_fee.fee_period,monthly_fee.fee_type) VALUES ('$fee_name','$fee_price','$fee_period','$fee_type')";
            $result = mysqli_query($con, $sql);

            $sql = "SELECT fee_id FROM monthly_fee WHERE fee_name = '".$fee_name."' AND fee_price= '".$fee_price."' AND fee_period='".$fee_period."' AND fee_type='".$fee_type."' ";
            
            $result = mysqli_query($con,$sql);
            $fee_id = mysqli_fetch_array($result);
            // insert to table account_monthly_fee
            $sql = "INSERT INTO account_monthly_fee (username,fee_id) VALUES ('".$username."','".$fee_id[0]."')";
            $result = mysqli_query($con, $sql);

            $currentTimeinSeconds = time();  
                $currentDateAndTime = date('Y-m-d H:i:s',$currentTimeinSeconds) ;
                $sql = "INSERT INTO activity_log
                            VALUES ('$username','$currentDateAndTime','add-monthly-fee') ";
                mysqli_query($con,$sql);
        break;

        case 'add-new-credit':
            $input = file_get_contents('php://input');
            $postRequest = json_decode($input);
            $credit_type = $postRequest->typeCredit;
            $credit_name = $postRequest->nameCredit;
            $company_name = $postRequest->nameBank;
            $time_period = $postRequest->Time;
            $credit_limit = $postRequest->LimitRate;
            $credit_minimum_income = $postRequest->Minimumincome;
            $credit_interest = $postRequest->Interest;
            $company_name_Check = 0;
            $sql = "SELECT * FROM company WHERE company_name = '".$company_name."' ";
            $result = mysqli_query($con,$sql);
            //check company
            while($row = mysqli_fetch_array($result)){
                if($row['company_name'] == $company_name){
                    $company_id = $row['company_id'];
                    $company_name_Check++;
                }
            }
            //insert to table credit
            $sql = "INSERT INTO credit VALUES (null,'$credit_name','$credit_interest','$time_period','$credit_limit','$credit_minimum_income','$credit_type')";
            mysqli_query($con,$sql);
            if($company_name_Check > 0){
                
                $sql = "SELECT MAX(c.credit_id)
                FROM credit c
                WHERE c.credit_name='".$credit_name."'
                AND c.credit_interest='".$credit_interest."'
                AND c.time_period='".$time_period."'
                AND c.credit_limit='".$credit_limit."'
                AND c.credit_minimum_income='".$credit_minimum_income."'
                AND c.credit_type='".$credit_type."'";
                $result = mysqli_query($con, $sql);
                $credit_id = mysqli_fetch_array($result)[0];
                
                //insert to table credit_company
                $sql = "INSERT INTO credit_company VALUES ('".$credit_id."','".$company_id."')";
                mysqli_query($con, $sql);
            }else{
                //insert to table company
                $sql = "INSERT INTO company VALUES (null,'$company_name')";
                mysqli_query($con,$sql);
                //get company_id
                $sql = "SELECT * FROM company WHERE company_name = '".$company_name."' ";
                $result = mysqli_query($con,$sql);
                while($row = mysqli_fetch_array($result)){
                    if($row['company_name'] == $company_name){
                        $company_id = $row['company_id'];
                    }
                }

                print_r($company_id);

                $sql = "SELECT c.credit_id 
                FROM credit c
                WHERE c.credit_name='".$credit_name."'
                AND c.credit_interest='".$credit_interest."'
                AND c.time_period='".$time_period."'
                AND c.credit_limit='".$credit_limit."'
                AND c.credit_minimum_income='".$credit_minimum_income."'
                AND c.credit_type='".$credit_type."'";
                $result = mysqli_query($con, $sql);
                $credit_id = mysqli_fetch_array($result)[0];

                //insert to table credit_company
                $sql = "INSERT INTO credit_company VALUES ('".$credit_id."','$company_id')";
                mysqli_query($con, $sql);

            }
            
        break;


        case 'monthly-fee':
          
                $array[] = array();
                $i = 0;
                $input = file_get_contents('php://input');
                $postRequest = json_decode($input);
                if($postRequest->mode == 1){
                    $username = $postRequest->username;
                    $sql = "SELECT m.fee_id, m.fee_name,m.fee_price,m.fee_period ,m.fee_type
                    FROM monthly_fee m 
                    INNER JOIN account_monthly_fee a ON m.fee_id = a.fee_id 
                    INNER JOIN account c ON a.username = c.username 
                    WHERE a.username='".$username."'";
                    $result = mysqli_query($con, $sql);
                    while($row = mysqli_fetch_array($result)){
                        $array[$i] = $row;
                        $i++;
                    }

                    $currentTimeinSeconds = time();  
                        $currentDateAndTime = date('Y-m-d H:i:s',$currentTimeinSeconds) ;
                        $sql = "INSERT INTO activity_log
                                    VALUES ('$username','$currentDateAndTime','show-monthly-fee') ";
                        mysqli_query($con,$sql);

                    echo json_encode($array);
            }else if($postRequest->mode == 2){
                    "DELETE b.*
                    FROM account a
                    INNER JOIN account_monthly_fee b
                    ON a.username = b.username
                    INNER JOIN monthly_fee c
                    ON b.fee_id = c.fee_id
                    WHERE b.fee_id = '".$fee_id."' AND b.username = '".$username."'";
                    $result = mysqli_query($con, $sql);
                    
                    $currentTimeinSeconds = time();  
                        $currentDateAndTime = date('Y-m-d H:i:s',$currentTimeinSeconds) ;
                        $sql = "INSERT INTO activity_log
                                    VALUES ('$username','$currentDateAndTime','delete-monthly-fee') ";
                        mysqli_query($con,$sql);
            }

        break;

        case 'delete-monthly-fee':
            $input = file_get_contents('php://input');
            $postRequest = json_decode($input);
            $username = $postRequest->username;
            $fee_id = $postRequest->fee_id;
            //delete at table account_monthly_fee
            $sql = "DELETE b.*
            FROM account a
            INNER JOIN account_monthly_fee b
            ON a.username = b.username
            INNER JOIN monthly_fee c
            ON b.fee_id = c.fee_id
            WHERE b.fee_id = '".$fee_id."' AND b.username = '".$username."'";
            $result = mysqli_query($con, $sql);

            $currentTimeinSeconds = time();  
                $currentDateAndTime = date('Y-m-d H:i:s',$currentTimeinSeconds) ;
                $sql = "INSERT INTO activity_log
                            VALUES ('$username','$currentDateAndTime','delete-monthly-fee') ";
                mysqli_query($con,$sql);

        break;

        case 'edit-credit':
            $input = file_get_contents('php://input');
            $postRequest = json_decode($input);
            if($postRequest->mode ==1){
                $credit_id = $postRequest->data;
                $sql = "SELECT c.* , cpn.company_name
                        FROM credit c 
                        INNER JOIN credit_company cc
                        ON c.credit_id = cc.credit_id
                        INNER JOIN company cpn
                        ON cpn.company_id = cc.company_id
                        WHERE c.credit_id = '".$credit_id."' ";
                // $sql = "INSERT INTO credit VALUES (null,'$credit_name','$credit_interest','$time_period','$credit_limit','$credit_minimum_income','$credit_type')";
                $result = mysqli_query($con, $sql);
                $row = mysqli_fetch_array($result);
                echo json_encode($row);
            }else {
                $data = $postRequest->data;
                $credit_id = $postRequest->credit_id;
                $sql = "UPDATE credit c
                        INNER JOIN credit_company cc
                        ON c.credit_id = cc.credit_id
                        INNER JOIN company cpn
                        ON cc.company_id = cpn.company_id
                        SET c.credit_type = '$data->typeCredit', c.credit_name = '$data->nameCredit'
                            , cpn.company_name = '$data->nameBank', c.time_period = '$data->Time'
                            , c.credit_limit = '$data->LimitRate', c.credit_minimum_income = '$data->Minimumincome'
                            , c.credit_interest = '$data->Interest'
                        WHERE c.credit_id = '$credit_id'
                        ";
                
                mysqli_query($con, $sql);
                
            }
        break;

        //มีต่อ
        case 'credit':
            $arr[] = array();
            $i=0;
            $input = file_get_contents('php://input');
            $postRequest = json_decode($input);
            $username = $postRequest;
            
            // โชว์creditทั้งหมดที่usernameนี้ไม่มี
            $sql = "SELECT c.credit_name ,e.company_name, c.credit_interest
            FROM credit c
            INNER JOIN account_credit a ON c.credit_id != a.credit_id 
            INNER JOIN account b ON a.username = b.username 
            INNER JOIN credit_company d ON c.credit_id = d.credit_id
            INNER JOIN company e ON  d.company_id = e.company_id
            WHERE a.username='".$username."'";
            $result = mysqli_query($con, $sql);
            while($row = mysqli_fetch_array($result)){
                $arr[$i] = $row;
                $i++;
            }
            if($i > 0) echo json_encode($arr);
            else{
                $sql = "SELECT c.credit_name, cpn.company_name, c.credit_interest
                  FROM credit c
                  INNER JOIN credit_company cc
                  ON c.credit_id = cc.credit_id
                  INNER JOIN company cpn
                  ON cc.company_id = cpn.company_id";
                $result = mysqli_query($con,$sql);
                while($row = mysqli_fetch_array($result)){
                    $arr[$i] = $row;
                    $i++;
                }
                echo json_encode($arr);
            }
        break;



        case 'admin-sum-monthlyfee':
            // $array[] = array();
            // $i = 0;
            // $sql = "SELECT DISTINCT monthly_fee.fee_type FROM monthly_fee";
            // $result = mysqli_query($con, $sql);
            // while( $row = mysqli_fetch_array($result)){
            //     $array[$i] = $row;
            //     $i++;
            // }

            $sql = "SELECT COUNT(*) AS total_monthly_count FROM monthly_fee";
            $result = mysqli_query($con, $sql);
            $row = mysqli_fetch_array($result);
            echo json_encode($row);
        break;

        case 'admin-detail-monthlyfee':
            $arr[] = array();
            $i = 0;
            $input = file_get_contents('php://input');
            $postRequest = json_decode($input);
            $fee_type = $postRequest;
            $sql = "SELECT a.fee_name, b.username
            FROM monthly_fee a
            INNER JOIN account_monthly_fee b ON a.fee_id = b.fee_id
            WHERE a.fee_type='".$fee_type."'";
            $result = mysqli_query($con, $sql);
            while($row = mysqli_fetch_array($result)){
                $arr[$i] = $row;
                $i++;
            }

            echo json_encode($arr);
            // if($i >0)   echo json_encode($arr);
            // else echo json_encode('empty');
        break;

        case 'admin-credit':
            $input = file_get_contents('php://input');
            $postRequest = json_decode($input);
            if($postRequest->mode == 1){
                $arr[] = array();
                $i = 0;
                $sql = "SELECT a.credit_name ,c.company_name, a.credit_interest, a.credit_id
                FROM credit a
                INNER JOIN credit_company b ON a.credit_id = b.credit_id
                INNER JOIN company c ON b.company_id = c.company_id";
                $result = mysqli_query($con, $sql);
                while($row = mysqli_fetch_array($result)){
                    $arr[$i] = $row;
                    $i ++ ;
                }
                echo json_encode($arr);
            }else if($postRequest->mode == 2){

                $data = $postRequest->data;
                for($i = 0; $i < sizeof($data); $i++){

                    $sql = 'SELECT credit_id FROM credit WHERE credit_name = "'.$data[$i]->credit_name.'" ';
                    $result = mysqli_query($con,$sql);
                    $credit_id = mysqli_fetch_array($result)[0];
                    
                    $sql = 'DELETE FROM credit_company WHERE credit_id = "'.$credit_id.'" ';
                    mysqli_query($con, $sql);

                    $sql = 'DELETE FROM credit WHERE credit_name = "'.$data[$i]->credit_name.'" ';
                    mysqli_query($con, $sql);
                }
                

            }

        break;

        case 'admin-credit-check-user':
            $arr[] = array();
            $i = 0;
            $input = file_get_contents('php://input');
            $postRequest = json_decode($input);
            
            $credit_id = $postRequest;
            $sql = "SELECT c.* , cpn.company_name
            FROM credit c
            INNER JOIN credit_company cc
            ON c.credit_id = cc.credit_id
            INNER JOIN company cpn
            ON cc.company_id = cpn.company_id
            WHERE c.credit_id = '".$credit_id."' ";
            $result = mysqli_query($con, $sql);
            $row = mysqli_fetch_array($result);
            $arr[$i] = $row;
            $i++;

            $sql = "SELECT b.username, b.total_payment
            FROM credit a
            INNER JOIN account_credit b ON a.credit_id = b.credit_id
             WHERE a.credit_id= '".$credit_id."'";
            $result = mysqli_query($con, $sql);
            while($row = mysqli_fetch_array($result)){
                $arr[$i] = $row;   
                $i ++;
            }
            echo json_encode($arr);

        break;


       
    }
    mysqli_close($con);
    return;

    



?>