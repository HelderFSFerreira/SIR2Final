<?php
    if (isset($_POST['user']) && $_POST['pass']){
        $user = $_POST['user'];
        $pass = $_POST['pass'];

        include_once 'connection.php';

        $query = "SELECT * FROM users WHERE username='$user' AND password='$pass'";
        $res = $conn->query($query);

        $rowcount=mysqli_num_rows($res);

        header('Content-type: application/json');

        if ($rowcount==1) {
            while ($r = mysqli_fetch_assoc($res)) {
                $rows[] = $r;
            }

            echo json_encode($rows);
        } else {
            $rows[] = array('id'=>'-1');
            echo json_encode($rows);
        }
    }