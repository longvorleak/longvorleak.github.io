<?php
$article = $_POST['article'];

if (!empty($_POST['inputComment'])) {

    include "dbConnect.php";

    // Insert the article using a prepared query
    $inputUsername =  !empty($_POST['inputUsername']) ? $_POST['inputUsername'] : "anonymous";
    $inputComment = $_POST['inputComment'];

    $req = $db->prepare('INSERT INTO comments (article_id, username, comment) VALUES (:article, :inputUsername, :inputComment)');

    $req -> bindParam("article", $article, PDO::PARAM_INT);
    $req -> bindParam("inputUsername", $inputUsername, PDO::PARAM_STR);
    $req -> bindParam("inputComment", $inputComment, PDO::PARAM_STR);

    $req-> execute();

    $res = $req->fetchAll(PDO::FETCH_ASSOC);
}

// Redirecting the vistitor to the comments page
header("Location: comments.php?article={$article}");