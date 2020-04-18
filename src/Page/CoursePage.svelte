<script>
    import {fade} from 'svelte/transition';
    import {MainActivityStore} from '../Store/MainActivityStore'
    import Fab, {Icon} from '@smui/fab';
    import CourseApiClient from "../Client/CourseApiClient";
    import Select, {Option} from '@smui/select';
    import MenuSurface, {Anchor} from '@smui/menu-surface';
    import LinearProgress from '@smui/linear-progress';
    import {SubjectStore} from "../Store/SubjectStore";
    import CourseCard from "../UI/Main/CourseCard.svelte";
    import {CourseVideoParam} from "../Activity/CourseVideoParam";
    import Dialog, {Title, Content, Actions} from '@smui/dialog';
    import {startActivity as startVideoActivity} from "../Activity/CourseVideoParam"
    import VideoUploadForm from "../UI/Video/VideoUploadForm.svelte";

    let formSurface;
    let dialog;

    async function loadCourse() {
        $MainActivityStore.loading = true;
        let courses = (await CourseApiClient.getAllCourse()).data;
        $MainActivityStore.loading = false;
        return courses;
    }

    function courseClick(event) {
        startVideoActivity(new CourseVideoParam(event.detail.course));
    }
</script>
        <div in:fade class="container-fluid padded">
            <div class="row  flex-grow-1">
                {#await loadCourse() then courses}
                    {#each courses as course}
                    <div class="col">
                        <CourseCard on:click={courseClick} {course}/>
                    </div>
                    {/each}
                {/await}
            </div>
        </div>
<div style="position: fixed;right: 2em;bottom: 2em">

    <Dialog
            bind:this={dialog}
            aria-labelledby="dialog-title"
            aria-describedby="dialog-content"
    >
        <VideoUploadForm/>
    </Dialog>
    <Fab on:click={()=>dialog.open()}><Icon class="material-icons">add</Icon></Fab>
</div>

