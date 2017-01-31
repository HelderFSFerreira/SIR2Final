<?php
    if (isset($_POST['user']) && $_POST['name'] && $_POST['email']){
        $email = $_POST['email'];
        $user = $_POST['user'];
        $name = $_POST['name'];
        $pass = $_POST['pass'];
        session_start();

        include_once 'connection.php';

        $query = "SELECT * FROM users WHERE email='$email'";
        $res = $conn->query($query);

        $rowcount=mysqli_num_rows($res);

        if ($rowcount==1) {
            while ($r = mysqli_fetch_assoc($res)) {
                $_SESSION['userID'] = $r['id'];
                $rows[] = $r;
            }
        } else {
            $rows[] = array('id'=>'-1');
        }
        session_write_close();
        header('Content-type: application/json');
        echo json_encode($rows);
    }