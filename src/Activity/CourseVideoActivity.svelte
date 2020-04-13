<script>
    import TopAppBar, {Row, Section, Title} from '@smui/top-app-bar';
    import IconButton from '@smui/icon-button';
    import {startActivity as startMainActivity} from "../Nav/MainActivityParam";
    import {fade} from 'svelte/transition';
    import {CourseVideoParam} from "./CourseVideoParam";
    export let param = new CourseVideoParam()
</script>

<div in:fade>
    <TopAppBar variant="static">
        <Row>
            <Section>
                <IconButton class="material-icons" on:click={startMainActivity}>menu</IconButton>
                <Title>{param.course.name}</Title>
            </Section>
            <Section align="end" toolbar>
            </Section>
        </Row>
    </TopAppBar>
</div>
