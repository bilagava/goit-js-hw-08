import throttle from 'lodash.throttle';

const iframeEl = document.querySelector('iframe');

const player = new Vimeo.Player(iframeEl);

const STORAGE_KEY = 'videoplayer-current-time';

const onPlay = function (data) {
  localStorage.setItem(STORAGE_KEY, data.seconds);
  console.log(data);
};

player.on('timeupdate', throttle(onPlay, 1000));
if (localStorage.getItem(STORAGE_KEY)) {
  player.setCurrentTime(localStorage.getItem(STORAGE_KEY));
}
