<script>
    import {fade} from 'svelte/transition';
    import {MainActivityStore} from '../Store/MainActivityStore'
    import CourseApiClient from "../Client/CourseApiClient";
    import {SubjectStore} from "../Store/SubjectStore";
    import CourseCard from "../UI/CourseCard.svelte";
    import {CourseVideoParam} from "../Activity/CourseVideoParam";
    import {startActivity as startVideoActivity} from "../Activity/CourseVideoParam"

    async function loadCourse() {
        $MainActivityStore.loading = true;
        let courses = (await CourseApiClient.getAllCourse($SubjectStore.token)).data;
        $MainActivityStore.loading = false;
        return courses;
    }

    function courseClick(event){
        startVideoActivity(new CourseVideoParam(event.detail.course));
    }
</script>
    <main in:fade>
        <div class="container-fluid padded">
            <div class="row">
                {#await loadCourse() then courses}
                    {#each courses as course}
                    <div class="col">
                        <CourseCard on:click={courseClick} {course}/>
                    </div>
                    {/each}
                {/await}
            </div>
        </div>
    </main>
<style>

</style>


