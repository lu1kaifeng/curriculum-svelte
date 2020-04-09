<script>
    import Textfield from '@smui/textfield'
    import Paper, {Title, Subtitle, Content} from '@smui/paper';
    import Button, {Group, GroupItem, Label, Icon} from '@smui/button';
    import { fade } from 'svelte/transition';
    export let loginOrRegister = true;
    let userName = "";
    let password = "";
    let userNameInvalid = false;
    let passwordInvalid = false;
    $: enableLogin = userName!==''&&password!=='';
</script>
<div class="container-fluid" in:fade>
    <div class="row">
        <div class="col align-self-start"></div>
        <div class="align-self-center col-3">
            <Paper  elevation="5">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col">
                            <Title>Login</Title>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <Textfield
                                    fullwidth
                                    type="text"
                                    invalid={userNameInvalid}
                                    bind:value={userName}
                                    label={userNameInvalid?'Wrong User Name':'User Name'}/>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <Textfield
                                    fullwidth
                                    type="password"
                                    invalid={passwordInvalid}
                                    bind:value={password}
                                    label={passwordInvalid?"Wrong Password":"Password"}/>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <div  class="float-right">
                                <Button variant="outlined" on:click={()=>loginOrRegister = false}><Label>Register</Label></Button>
                                <Button variant="raised" disabled={passwordInvalid || userNameInvalid || !enableLogin}><Label>Login</Label></Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Paper>
        </div>
        <div class="col align-self-end"></div>
    </div>
</div>
<style>
    .float-right{
        float: right;
    }
</style>
