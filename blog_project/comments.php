<?php include ("head.php"); ?>
    <title>Article</title>
</head>
<body>

<a href="./index.php"> <button type='button'>Back</button></a>
    
<?php 

include "dbConnect.php"; 
$id = htmlspecialchars($_GET['article']);

// Query to select
$response = $db->query("SELECT id, topic, title,content, author, created_at FROM articles WHERE id=$id");

//fetching the article
$data = $response->fetch(PDO::FETCH_ASSOC);
include('viewArticle.php');

// where you retrieve the comments
$page = isset($_GET['page']) ? (int)$_GET['page'] : 1;
$cpp = 5;

$offset = $cpp * ($page -1);

// Query to select
$response = $db->query("SELECT username, comment, created_at FROM comments WHERE article_id=$id ORDER BY created_at DESC LIMIT $offset,$cpp ");

?>

<div class='commentBox'>
    <form action="postComment.php" method="POST" >
        <input type="hidden" name="article" value="<?= $id ?>">
        <input type="text" name="inputUsername" placeholder="Type your username" class="input">
        <input type="text" name="inputComment" placeholder="Type your comment..." class="input">
        <input type="submit" value="Send" class="submit">	
    </form>

    <div class='pageBox'>Page: 
        <div class='pages'> 
        <?php
            // to display the buttons
            $res = $db->query("SELECT COUNT(*) AS num_comments FROM comments WHERE article_id = $id");

            $total = $res->fetch(PDO::FETCH_OBJ);
            $num_comments = $total->num_comments;
            $comments_per_page = 5;

            $num_pages = ceil($num_comments / $comments_per_page);

            for ($i=1; $i <= $num_pages; $i++) {
            echo "<a href='comments.php?article=$id&page=$i' class='page'>$i </a>";
            }
        ?>
        </div>
    </div>

    <!-- Loop, fetching the message one at the time -->
    <?php
    while ($data = $response->fetch(PDO::FETCH_ASSOC))
        { include('viewComments.php'); }
    ?>
</div>

<?php include "footer.php" ?>