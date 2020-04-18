<List class="demo-list" twoLine avatarList singleSelection>
    {#each courseList as course}
        <Item on:SMUI:action={() => selected = course} selected={selected === course}>
            <Graphic style="background-image: url(https://via.placeholder.com/40x40.png?text={course.title.split(' ').map(val => val.substring(0, 1)).join('')});" />
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
    export let courseList;
    export let selected;
</script>
