var yo = require('yo-yo');

module.exports= function pictureCard(pic)
{
  var el;

  function render(picture)
  {
    return yo`<div class="card ${picture.liked ? 'liked' : ''}">
        <div class="card-image waves-effect waves-block waves-light">
          <img class="activator" src="${picture.url}">
        </div>
        <div class="card-content">
          <a href="/user/${picture.user.username}" class="card-title">
          <img src="${picture.user.avatar}" class="avatar"/>
          <span class="username">${picture.user.username}</span>
          </a>
          <small class="right time">Hace un dia</small>
          <p>
            <a class="left" href="#" onclick=${like}><i class="fa fa-heart-o" aria-hidden="true"></i></a>
            <a class="left" href="#" onclick=${dislike}><i class="fa fa-heart" aria-hidden="true"></i></a>
            <span class="left likes">${picture.likes} me gusta></span>
          </p>
        </div>
      </div>`
  }
  function like()
  {
    pic.liked = true;
    pic.likes++;
    var newEl =render(pic);
    yo.update(el, newEl);
    return false;
  }
  function dislike()
  {
    pic.liked = false;
    pic.likes--;
    var newEl =render(pic);
    yo.update(el, newEl);
    return false;
  }
  el=render(pic)
  return el;
}
