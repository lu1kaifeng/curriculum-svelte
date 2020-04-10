<div class="row no-gutters float-right">
    <div class="col">
        <img on:click={() => formSurface.setOpen(true)} src={$SubjectStore.photo !== null?'data:image/jpg;base64,'+$SubjectStore.photo:"https://via.placeholder.com/468x60"}/>
        <MenuSurface bind:this={formSurface} anchorCorner="BOTTOM_LEFT">
            <List class="demo-list" dense>
                {#each $AvatarStore.itemList as item,index }
                    {#if item instanceof CustomActionListItem}
                        <Item on:SMUI:action={item.onClickListener}>
                            <Graphic class="material-icons">{item.icon}</Graphic>
                            <Text>{item.text}</Text>
                        </Item>
                    {:else}
                        <Separator/>
                    {/if}
                {/each}
            </List>
        </MenuSurface>
    </div>
</div>
<script>
    import Fab, {Icon} from '@smui/fab';
    import MenuSurface, {Anchor} from '@smui/menu-surface';
    import List, {Group, Item, Graphic, Meta, Label, Separator, Subheader, Text, PrimaryText, SecondaryText} from '@smui/list';
    import {SubjectStore} from '../Store/SubjectStore'
    import {AvatarStore} from '../Store/AvatarStore'
    import {CustomActionListItem} from '../Store/model'
    let formSurface;
</script>
<style>
    img{
        border-radius: 100%;
        height: 3em;
        width: 3em;
    }
</style>
