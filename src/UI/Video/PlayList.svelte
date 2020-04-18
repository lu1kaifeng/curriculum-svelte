<List class="demo-list" twoLine avatarList singleSelection>
    {#each courseList as course}
        <Item on:SMUI:action={() => selected = course} selected={selected === course}>
            <Graphic>
                <img src={thumbnailFromVidObj(course)}>
            </Graphic>
            <Text>
                <PrimaryText>{course.title}</PrimaryText>
                <SecondaryText>{course.webId}</SecondaryText>
            </Text>
            <Meta class="material-icons">info</Meta>
        </Item>
    {/each}
</List>
<script>
    import List, {Group, Item, Graphic, Meta, Label, Separator, Subheader, Text, PrimaryText, SecondaryText} from '@smui/list';
    import {thumbnailFromVidObj} from "../../Script/VideoUrlUtil";
    export let courseList;
    export let selected;
</script>
<style>
    img{
        border-radius: 100%;
        height: 3em;
        width: 3em;
    }
</style>
