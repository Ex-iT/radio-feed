(function () {
    const playlist = [{
        label: 'SkyRadio - Lounge',
        src: 'https://19013.live.streamtheworld.com/SRGSTR07AAC.aac'
    },
    {
        label: 'SLAM! - Non-stop',
        src: 'https://20103.live.streamtheworld.com/WEB10_MP3.mp3'
    }];

    const audioEl = document.getElementById('audio');
    const playlistEl = document.getElementById('playlist');
    const titleEl = document.getElementById('title');
    const btnPlay = document.getElementById('btnPlay');

    console.log(this);

    setPlaylist();
    handleAudioEvents();

    function handleAudioEvents() {
        // audioEl.addEventListener('playing', event => {
        // 	console.log(event);
        // 	btnPlay.innerText = 'Pause';
        // 	btnPlay.disabled = false;
        // });

        audioEl.addEventListener('pause', () => {
            // Actually stop the stream from downloading
            const currentSrc = audioEl.src;
            audioEl.src = '';
            audioEl.src = currentSrc;
        });
    }

    function setPlaylist() {
        if (playlist) {
            const docFragment = document.createDocumentFragment();
            const items = playlist.forEach(item => {
                const listItem = document.createElement('li');
                const listBtn = document.createElement('button');
                listBtn.type = 'button';
                listBtn.innerText = item.label;
                listBtn.dataset.label = item.label;
                listBtn.dataset.src = item.src;

                listBtn.addEventListener('click', event => {
                    const btn = event.target;
                    audioEl.src = btn.dataset.src;
                    titleEl.innerText = btn.dataset.label;
                    audioEl.play();
                }, false);

                listItem.appendChild(listBtn);
                docFragment.appendChild(listItem);
            });

            playlistEl.innerHTML = '';
            playlistEl.appendChild(docFragment);
        }
    }
})();
