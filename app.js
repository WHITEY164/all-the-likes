window.onload = function() {
    var likeCount = localStorage.getItem ('like');
    var loveCount = localStorage.getItem ('love');
    var laughCount = localStorage.getItem('laugh');
    var likeImage = document.getElementById('like-image');
    var loveImage = document.getElementById('love-image');
    var laughImage = document.getElementById('laugh-image');
    var likeText = document.getElementById('like-count');
    var loveText = document.getElementById('love-count');
    var laughText = document.getElementById('laugh-count');
    likeImage.addEventListener('click', function(){
       var likeClick = 0;
       likeClick = likeClick + 1;
       localStorage.setItem("likes", + 1);
       likeClick.getElementById('likes').innerHTML = likeClick + 1;
    })
    loveImage.addEventListener('click', function(){
       var loveClick = 0;
       loveClick = loveClick + 1;
           localStorage.setItem('loves', + 1);
    })
    laughImage.addEventListener('click', function(){
       var laughClick = 0;
       laughClick = laughClick + 1;
           localStorage.setItem('laughs', + 1);
    })
};