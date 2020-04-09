<script>
    import BootStrap from 'bootstrap'
    import LoginWindow from "./LoginWindow.svelte";
    import RegisterWindow from "./RegisterWindow.svelte";
    import { fade } from 'svelte/transition';

    let loginOrRegister = true
</script>
<div class="container-fluid" transition:fade>
    <div class="center">
        {#if loginOrRegister}
            <LoginWindow bind:loginOrRegister={loginOrRegister}/>
        {:else}
            <RegisterWindow bind:loginOrRegister={loginOrRegister}/>
        {/if}
    </div>
</div>
<style>

</style>
