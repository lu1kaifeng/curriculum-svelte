<script>
    import Drawer, {AppContent, Content, Header, Title, Subtitle, Scrim} from '@smui/drawer';
    import List, {Item, Text, Separator, Subheader} from '@smui/list';
    import TopBar from "./TopBar.svelte";
    import HelloWorldPage from "../Page/HelloWorldPage.svelte"
    import {FrameStore} from "../Store/FrameStore.js"
    import DrawerHeader from "./Drawer/DrawerHeader.svelte";
    import DrawerList from "./Drawer/DrawerList.svelte";
    import IconButton from '@smui/icon-button';
    import {SubjectStore} from "../Store/SubjectStore";
    import { fade } from 'svelte/transition';

    let current = 'main';
    let drawer;
    let openDrawer = false;
    let drawerObj;
    let currentPage;
    const unsubscribe = FrameStore.subscribe(value => {
        currentPage = value.itemList[0];
        drawerObj = value;
    });
</script>
<div transition:fade>
<Drawer variant="modal" bind:this={drawer} bind:open={openDrawer}>
    <DrawerHeader header={drawerObj.header}/>
    <Content>
        <DrawerList bind:currentPage={currentPage} itemList={drawerObj.itemList}/>
    </Content>
</Drawer>
<Scrim />
<AppContent>
    <TopBar bind:openDrawer={openDrawer} text={currentPage.text}>
    <span slot="toolbar">
            <IconButton class="material-icons" aria-label="Download">file_download</IconButton>
            <IconButton class="material-icons" aria-label="Print this page">print</IconButton>
            <IconButton class="material-icons" aria-label="Bookmark this page" on:click={()=>(SubjectStore.clear())}>bookmark</IconButton>
    </span>
    </TopBar>
    <svelte:component this={currentPage.component}/>
</AppContent>
</div>
