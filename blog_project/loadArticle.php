<?php

include('dbConnect.php');

// Query to select
$response = $db->query("SELECT id, topic, title, content, author, created_at FROM articles");

// Loop, fetching the message one at the time
while ($data = $response->fetch(PDO::FETCH_ASSOC))
{ 
    include('viewArticle.php'); 
}

$response->closeCursor();
