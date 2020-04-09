<script>
	import TopBar from "./Nav/TopBar.svelte";
	import Frame from "./Nav/Frame.svelte";
	import Login from "./Login/Login.svelte";
	import {SubjectStore} from "./Store/SubjectStore";

</script>
{#if $SubjectStore === null}
	<Login />
{:else}
	<Frame/>
{/if}
<style>
	:global(body) {
		/* this will apply to <body> */
		padding: 0;
	}
</style>
