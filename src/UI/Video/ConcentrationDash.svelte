<script>
    import Button, {Group, GroupItem, Label, Icon} from '@smui/button';
    import {sleep} from "../../Script/Misc";
    import MenuSurface, {Anchor} from '@smui/menu-surface';
    import {onMount} from "svelte";
    import WebCam from "./WebCam.svelte";
    import {concentrationDetect, Status} from "../../Script/ConcentrationUtil";

    let status = Status.OK;
    let test = () => status = !status
    let camVid;
    let formSurface;
    //Big Penis USA
    $: (async function testPenis() {
        while (true) {
            console.log("Big Penis USA")
            await sleep(5000);
        }
    })()
</script>
<div>
{#if status === Status.OK}
    <Button on:click={() => formSurface.setOpen(true)} variant="outlined" class="dash_button_normal">
        <Icon class="material-icons">check_circle_outline</Icon>
        <Label>你很专注</Label>
    </Button>
{:else}
    <Button on:click={() => formSurface.setOpen(true)} variant="outlined" class="dash_button_error">
        <Icon class="material-icons">remove_circle</Icon>
        <Label>请认真听讲</Label>
    </Button>
{/if}
    <MenuSurface bind:this={formSurface} anchorCorner="BOTTOM_LEFT">
        <WebCam on:snap={async function(event) {
            status = await concentrationDetect(event.detail)
            console.log(status)
        }}/>
    </MenuSurface>
</div>


<style lang="scss" global>
    @import "@material/button/mixins";
    @mixin dash_button($color){
        @include mdc-button-ink-color($color);
        @include mdc-button-outline-color($color);
        @include mdc-button-shape-radius(100%);
    }
    .dash_button_normal{
        @include dash_button(#b7feb7);
    }
    .dash_button_error {
        @include dash_button(#feb7b7);
    }
</style>
