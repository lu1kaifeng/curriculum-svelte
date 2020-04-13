<script>
    import Card, {Content, PrimaryAction, Media, MediaContent, Actions, ActionButtons, ActionIcons} from '@smui/card';
    import Button, {Label} from '@smui/button';
    import IconButton, {Icon} from '@smui/icon-button';
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    export let course;
</script>
<div>
    <Card style="width: 320px">
        <Media class="card-media-square" aspectRatio="square" on:click={()=>dispatch('click',{course})}>
            <div style="color: #fff; position: absolute; bottom: 16px; left: 16px;">
                <h2 class="mdc-typography--headline6" style="margin: 0;">{course.name}</h2>
                <h3 class="mdc-typography--subtitle2" style="margin: 0;">{course.teacher.name}</h3>
            </div>
        </Media>
    </Card>
</div>
<style>

</style>
