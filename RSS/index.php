<?php
include('./lastRSS.php');
$RSS = new lastRSS();
$RSS-> Get('http://bookmark.hexun.com/rss/hot.xml');
echo($RSS);