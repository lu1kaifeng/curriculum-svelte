<script>
    import ImageList, {Item, ImageAspectContainer, Image, Supporting, Label} from '@smui/image-list';
    import {thumbnailFromVidObj} from '../../Script/VideoUrlUtil'
    export let vids;
</script>
<ImageList class="my-image-list-masonry" masonry>
    {#each vids as vid}
        <Item>
            <Image src={thumbnailFromVidObj(vid)} style="width: 5em;height: 5em"/>
            <!--<Image src="https://via.placeholder.com/190x{getUnevenImageSize(i, 107, 200, Math.abs)}.png?text=190x{getUnevenImageSize(i, 107, 200, Math.abs)}" alt="Image {i + 1}" />-->
        </Item>
    {/each}
</ImageList>
