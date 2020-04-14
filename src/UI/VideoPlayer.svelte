<video bind:this={video} class="video-js vjs-default-skin" controls ></video>
<script>
    import videojs from 'video.js'
    import {onMount,afterUpdate} from "svelte";
    let video;
    export let src;
    let loadPlayer=async ()=> {
        let player = videojs(video);
        player.ready(function() {
            player.src({
                src,
                type: 'application/dash+xml'
            });

            player.play();
        })};
    onMount(loadPlayer);
    afterUpdate(loadPlayer);
</script>

<style lang="scss" global>
    @import 'video.js/src/css/vjs';
</style>
