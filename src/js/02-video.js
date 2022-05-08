import Player from '@vimeo/player';

// const player = new Player('handstick', {
//     id: 19231868,
//     width: 640
// });

// player.on('play', function() {
//     console.log('played the video!');
// });

const iframeEl = document.querySelector("#vimeo-player");
console.log(iframeEl);

const player = new Player(iframeEl);

// const onPlay = function(data) {
//     duration: 09.32
//     percent: 0.049
//     seconds: 1.000
// };

// player.on('play', onPlay);

// currentTime

// player.setCurrentTime(30.456).then(function(seconds) {
//     // seconds = the actual time that the player seeked to
// }).catch(function(error) {
//     switch (error.name) {
//         case 'RangeError':
//             // the time was less than 0 or greater than the video’s duration
//             break;

//         default:
//             // some other error occurred
//             break;
//     }
// });

