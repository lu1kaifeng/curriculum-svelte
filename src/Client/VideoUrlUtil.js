export function mpdUrlFromVidObj(vid) {
    return '/dash/' + vid.title + '/h264.mpd';
}

export function thumbnailFromVidObj(vid) {
    return '/dash/' + vid.title + '/thumb.jpg'
}
