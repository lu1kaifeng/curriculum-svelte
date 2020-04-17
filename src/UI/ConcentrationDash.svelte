<script>
    import Button, {Group, GroupItem, Label, Icon} from '@smui/button';
</script>
<Button variant="outlined" class="dash_button">
    <Icon class="material-icons">favorite</Icon>
    <Label>Icon</Label>
</Button>
<style lang="scss" global>
    @import "@material/button/mixins";
    @mixin dash_button($color){
        @include mdc-button-ink-color($color);
        @include mdc-button-outline-color($color);
        @include mdc-button-shape-radius(100%);
    }
    .dash_button{
        @include dash_button(#b7feb7);
    }
</style>
