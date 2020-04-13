<script>
    import Drawer, {AppContent, Content, Header, Title, Subtitle, Scrim} from '@smui/drawer';
    import List, {Item, Text, Separator, Subheader} from '@smui/list';
    import TopBar from "./TopBar.svelte";
    import HelloWorldPage from "../Page/HelloWorldPage.svelte"
    import {MainActivityStore} from "../Store/MainActivityStore.js"
    import DrawerHeader from "./Drawer/DrawerHeader.svelte";
    import DrawerList from "./Drawer/DrawerList.svelte";
    import IconButton from '@smui/icon-button';
    import {SubjectStore} from "../Store/SubjectStore";
    import {fade} from 'svelte/transition';
    import CircularAvatar from "../UI/CircularAvatar.svelte";
    import LinearProgress from '@smui/linear-progress';

    let current = 'main';
    let drawer;
    let openDrawer = false;
    let currentPage = $MainActivityStore.itemList[0];
</script>
<div in:fade>
<Drawer variant="modal" bind:this={drawer} bind:open={openDrawer}>
    <DrawerHeader header={$MainActivityStore.header}/>
    <Content>
        <DrawerList bind:currentPage={currentPage} itemList={$MainActivityStore.itemList}/>
    </Content>
</Drawer>
<Scrim />
<AppContent>
    <TopBar bind:openDrawer={openDrawer} text={currentPage.text}>
    <div class="float-right" slot="toolbar">
        <CircularAvatar/>
    </div>
    </TopBar>
    {#if $MainActivityStore.loading}
        <LinearProgress indeterminate/>
    {/if}
    <svelte:component this={currentPage.component}/>
</AppContent>
</div>
