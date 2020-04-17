<script>
    import Card, {Content, PrimaryAction, Media, MediaContent, Actions, ActionButtons, ActionIcons} from '@smui/card';
    import Fab, {Label, Icon} from '@smui/fab';
    import {createEventDispatcher} from 'svelte';
    import ThumbnailImageList from "./ThumbnailImageList.svelte";
    import MenuSurface, {Anchor} from '@smui/menu-surface';

    const dispatch = createEventDispatcher();
    let formSurface;
    export let course;
</script>
<div>
    <Card style="width: 320px;height: 320px">
        <Media class="card-media-square" aspectRatio="square" on:click={()=>dispatch('click',{course})}>
            <div style="color: #fff; width:280px;height:280px;position: absolute; top: 16px; left: 16px;">
                <ThumbnailImageList vids={course.courseVideo}/>
            </div>
            <div style="color: #0f0f0f; position: absolute; bottom: 16px; left: 16px;"  >
                <h2 class="mdc-typography--headline6" style="margin: 0;">{course.name}</h2>
                <h3 class="mdc-typography--subtitle2" style="margin: 0;">{course.teacher.name}</h3>
            </div>
        </Media>

    </Card>
</div>
<style>

</style>
