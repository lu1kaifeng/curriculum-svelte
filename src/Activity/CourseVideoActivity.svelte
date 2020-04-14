<script>
    import TopAppBar, {Row, Section, Title} from '@smui/top-app-bar';
    import IconButton from '@smui/icon-button';
    import {startActivity as startMainActivity} from "../Nav/MainActivityParam";
    import {fade} from 'svelte/transition';
    import {CourseVideoParam} from "./CourseVideoParam";
    import RxPlayer from "rx-player";
    import videojs from 'video.js'
    import {onMount} from 'svelte';
    import VideoPlayer from "../UI/VideoPlayer.svelte";
    import PlayList from "../UI/PlayList.svelte";
    import {mpdUrlFromVidObj} from '../Client/VideoUrlUtil'

    export let param = new CourseVideoParam();
    let video;
    let player;
    let courseList = param.course.courseVideo;
    let selected = courseList[0];
    $: src = mpdUrlFromVidObj(selected);
</script>

<div in:fade>
    <TopAppBar variant="static">
        <Row>
            <Section>
                <IconButton class="material-icons" on:click={startMainActivity}>navigate_before</IconButton>
                <Title class="ping-fang">{param.course.name}</Title>
            </Section>
            <Section align="end" toolbar>
            </Section>
        </Row>
    </TopAppBar>
    <div class="container-fluid">
        <div class="row">
            <div class="col"><div class="d-flex justify-content-center padded">
                <VideoPlayer {src}/>
            </div></div>
            <div class="col"><PlayList {courseList} bind:selected={selected}/></div>

        </div>
    </div>
</div>

