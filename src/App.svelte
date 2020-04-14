<script>
	import TopBar from "./Nav/TopBar.svelte";
	import Frame from "./Nav/MainActivity.svelte";
	import Login from "./Login/Login.svelte";
	import {SubjectStore} from "./Store/SubjectStore";
	import {ActivityStore} from './Store/ActivityStore'
</script>
{#if $SubjectStore === null}
	<Login />
{:else}
	{#if $ActivityStore.activity === null}
		<Frame/>
	{:else}
		<svelte:component this={$ActivityStore.activity} bind:param={$ActivityStore.param}/>
	{/if}
{/if}
<style global>
	body {
		/* this will apply to <body> */
		padding: 0;
	}
	*{
		font-family: PingFang, serif
	}
</style>
