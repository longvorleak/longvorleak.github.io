<?php
// Connection to the database
try {
    $db = new PDO('mysql:host=localhost;dbname=blog_project;charset=utf8', 'root','');
} catch (Exception $e){
    die('Error: ' . $e->getMessage());
}
?>