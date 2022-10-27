<div class="article">
    <img src ="https://source.unsplash.com/600x400/?<?= $data['topic']; ?>" alt="food" title="food" class="img" />
    <div class="text">
        <h2><?= $data['title']; ?></h2>
        <p class="topic">#<?= $data['topic']; ?></p>
        <p class="content"><?= $data['content']; ?></p>
    </div>
    <div class="writerContainer">
        <img src ="https://i.pravatar.cc/50?img=<?= rand(1,70) ?>"class="profile" />
        <div class="writer">
            <p class="author"><?= $data['author']; ?></p>
            <p class="created"><?= $data['created_at']; ?></p>
            <?php
            if ( !isset($_GET['article']) ) {
                ?>
                <a href="./comments.php?article=<?= $data['id'] ?>" class="comment">Read comments</a>
                <?php
            }
            ?>
    </div>
    </div>
</div>