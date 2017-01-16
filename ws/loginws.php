<?php
    if (isset($_POST['user']) && $_POST['pass']){
        $user = $_POST['user'];
        $pass = $_POST['pass'];

        include_once 'connection.php';

        $query = "SELECT * FROM users WHERE username='$user' AND password='$pass'";
        $res = $conn->query($query);

        $rowcount=mysqli_num_rows($res);

        if ($rowcount==1) {
            while ($r = mysqli_fetch_assoc($res)) {
                $rows[] = $r;
            }
        } else {
            $rows[] = array('id'=>'-1');
        }

        header('Content-type: application/json');
        echo json_encode($rows);
    }