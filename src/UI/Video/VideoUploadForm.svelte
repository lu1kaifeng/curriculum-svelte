<script>
    import {fade} from 'svelte/transition';
    import {MainActivityStore} from '../../Store/MainActivityStore'
    import Fab, {Icon} from '@smui/fab';
    import CourseApiClient from "../../Client/CourseApiClient";
    import Select, {Option} from '@smui/select';
    import MenuSurface, {Anchor} from '@smui/menu-surface';
    import {SubjectStore} from "../../Store/SubjectStore";
    import CourseCard from "../Main/CourseCard.svelte";
    import {CourseVideoParam} from "../../Activity/CourseVideoParam";
    import {startActivity as startVideoActivity} from "../../Activity/CourseVideoParam"
    import Textfield,{Input} from '@smui/textfield'
    import LinearProgress from '@smui/linear-progress';
    import { Sveltik } from 'sveltik'
    import Button, {Group, GroupItem, Label} from '@smui/button';
    import {uploadVid} from "../../Client/VideoApiClient";
    let courseId;
    let fileInput
    let title="";
    let disabled = false;
    let loading;
    async function loadCourse() {
        loading = true;
        disabled = true;
        let courses = (await CourseApiClient.getAllCourse()).data;
        loading = false;
        disabled = false;
        return courses;
    }
</script>
{#await loadCourse()}

{:then courses}
    {#if loading}
    <LinearProgress indeterminate/>
    {/if}
<div class="container-fluid padded">
    <div class="row">
        <div class="col">
            <Select enhanced {disabled} bind:value={courseId}>
                {#each courses as course}
                    <Option data-value={course.id}>
                        {course.name}
                    </Option>
                {/each}
            </Select>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <input type="file" {disabled} variant="outlined" bind:this={fileInput}/>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <Textfield  {disabled}  bind:value={title}/>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <Button   {disabled}  class="padded" variant="outlined"  on:click={()=>uploadVid(courseId,title,fileInput.files[0])}><Label>Upload</Label></Button>
        </div>
    </div>
</div>
{/await}
