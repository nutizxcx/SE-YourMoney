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
        case 'summarize-credit':
            $sql = "SELECT a.credit_name,a.credit_interest ,c.company_name
            FROM credit a
            INNER JOIN credit_company b ON a.credit_id = b.credit_id
            INNER JOIN company c ON b.company_id = c.company_id;"
            $result = mysqli_query($con, $sql);
        break;

        case 'add-credit':
            $input = file_get_contents('php://input');
            $postRequest = json_decode($input);
            $credit_name = $postRequest->credit_name;
            $company_name = $postRequest->company_name;
            $time_period = $postRequest->time_period;
            $credit_limit = $postRequest->credit_limit;
            $credit_minimum_income = $postRequest->credit_minimum_income;
            $credit_interest = $postRequest->credit_interest;
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
            $sql = "INSERT INTO credit VALUES (null,'$credit_name','$credit_interest','$time_period','$credit_limit','$credit_minimum_income','$credit_type');"
            
            if($company_name_Check > 0 ){
                //insert to table credit_company
                $sql = "INSERT INTO credit_company VALUES (SELECT credit.credit_id 
                                                            FROM credit c
                                                            WHERE c.credit_name='".$credit_name."'
                                                            AND c.credit_interest='".$credit_interest."'
                                                            AND c.time_period='".$time_period."'
                                                            AND c.credit_limit='".$credit_limit."'
                                                            AND c.credit_minimum_income='".$credit_minimum_income."'
                                                            AND c.credit_type='".$credit_type."','$company_id)"
            }else{
                //insert to table company
                $sql = "INSERT INTO company VALUES (null,'$company_name')"

                //get company_id
                $sql = "SELECT * FROM company WHERE company_name = '".$company_name."' ";
                $result = mysqli_query($con,$sql);
                while($row = mysqli_fetch_array($result)){
                    if($row['company_name'] == $company_name){
                        $company_id = $row['company_id'];
                    }
                }

                //insert to table credit_company
                $sql = "INSERT INTO credit_company VALUES (SELECT credit.credit_id 
                                                            FROM credit c
                                                            WHERE c.credit_name='".$credit_name."'
                                                            AND c.credit_interest='".$credit_interest."'
                                                            AND c.time_period='".$time_period."'
                                                            AND c.credit_limit='".$credit_limit."'
                                                            AND c.credit_minimum_income='".$credit_minimum_income."'
                                                            AND c.credit_type='".$credit_type."','$company_id')"

            }
        break;
    }
    mysqli_close($con);
    return;
?>