<script>
    import {onMount} from "svelte";
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    export let width = 480;
    export let height = 320;
    let video;
    let canvas;
    onMount(async ()=>{
        video.srcObject = (await navigator.mediaDevices.getUserMedia({video: true, audio: false}));
        video.play();
        setInterval(()=>{
            dispatch('snap',snap())
        },5000)
    })

    let snap = ()=> {
        let context = canvas.getContext('2d');
        if (width && height) {
            canvas.width = width;
            canvas.height = height;
            context.drawImage(video, 0, 0, width, height);
            return canvas.toDataURL('image/jpeg').split(',')[1];
        }
    }
</script>
<div class="cam_video_section">
    <video {width} {height} bind:this={video}></video>
    <canvas bind:this={canvas}  {width} {height} style="display: none">
    </canvas>
</div>
<style lang="scss" global>
    $width:480px;
    $height:320px;
    .cam_video_section{
        width: $width;
        height:$height;
    }

</style>
