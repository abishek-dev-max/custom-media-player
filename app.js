var player = videojs('my-video', {
  controls:true,
  autoplay:"unmuted",
  loop:true,
  playbackRates:[0.5, 0.75, 1, 1.25, 1.5,  2, 2.5],
  fluid: true,
  html5: {
    vhs:{
      enableLowInitialPlaylist: true,
      smoothQualityChange: true,
    },
    hls: {
      overrideNative: true,
        }
  },
});


player.src({
  src:  'https://moctobpltc-i.akamaihd.net/hls/live/571329/eight/playlist.m3u8', // use the cached data if available
  type: 'application/x-mpegURL'
});

