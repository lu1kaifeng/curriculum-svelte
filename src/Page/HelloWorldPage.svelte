<script>
    import { fade } from 'svelte/transition';
</script>
<main in:fade>
    <h1>你好 世界!</h1>
    <p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>
<style>
    main {
        text-align: center;
        padding: 0;
        margin: 0 auto;
    }
    h1 {
        color: #ff3e00;
        text-transform: uppercase;
        font-size: 4em;
        font-weight: 100;
        font-family: PingFang, serif;
    }

    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }
</style>
