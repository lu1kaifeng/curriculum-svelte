<script>
    import BootStrap from 'bootstrap'
    import LoginWindow from "./LoginWindow.svelte";
    import RegisterWindow from "./RegisterWindow.svelte";

    let loginOrRegister = true
</script>
<div class="container-fluid">
    <div class="center">
        {#if loginOrRegister}
            <LoginWindow bind:loginOrRegister={loginOrRegister}/>
        {:else}
            <RegisterWindow bind:loginOrRegister={loginOrRegister}/>
        {/if}
    </div>
</div>
<style>
    .center {
        position: absolute;
        top: 50%;
        left:50%;
        width: 100%;
        transform: translate(-50%,-50%);
    }
</style>
