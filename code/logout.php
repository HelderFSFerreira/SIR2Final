<?php
/**
 * Created by PhpStorm.
 * User: helde
 * Date: 26/01/2017
 * Time: 16:49
 */
    session_start();
    session_unset();
    session_destroy();
    session_write_close();
    header("location:index.php");