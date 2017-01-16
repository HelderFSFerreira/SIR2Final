<?php

if(isset($_POST['user'])) {
    $user = $_POST['user'];

    include_once 'connection.php';

    $query = "SELECT * FROM users WHERE username='$user'";
    $res = $conn->query($query);

    $rowcont=mysqli_num_rows($res);

    if ($rowcont==0) {
        $rows = array('status'=>'1');
    } else {
        $rows = array('status'=>'-1');
    }
    header('Content-type: application/json');
<<<<<<< HEAD
    var_dump($rows);
}

?>
=======
    echo json_encode($rows);
}
>>>>>>> 4b1155b23438624c0d59eacf169bbb2bfc62639b
