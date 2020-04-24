import {createWorker} from '@ffmpeg/ffmpeg'
const transcode360 = " -c:a copy -vf \"scale=-2:360\" -c:v libx264 -profile:v baseline -level:v 3.0 -x264-params scenecut=0:open_gop=0:min-keyint=72:keyint=72 -minrate 600k -maxrate 600k -bufsize 600k -b:v 600k -y ";
const transcode480=" -c:a copy -vf \"scale=-2:480\" -c:v libx264 -profile:v main -level:v 3.1 -x264-params scenecut=0:open_gop=0:min-keyint=72:keyint=72 -minrate 1000k -maxrate 1000k -bufsize 1000k -b:v 1000k -y ";
const transcode720=" -c:a copy -vf \"scale=-2:720\" -c:v libx264 -profile:v main -level:v 4.0 -x264-params scenecut=0:open_gop=0:min-keyint=72:keyint=72 -minrate 3000k -maxrate 3000k -bufsize 3000k -b:v 3000k -y ";
const transcode1080=" -c:a copy -vf \"scale=-2:1080\" -c:v libx264 -profile:v high -level:v 4.2 -x264-params scenecut=0:open_gop=0:min-keyint=72:keyint=72 -minrate 6000k -maxrate 6000k -bufsize 6000k -b:v 6000k -y ";
export let transcode = async (fileBytes,setPercentage)=>{
    let worker = createWorker();
    await worker.load();
    setPercentage(0.05);
    await worker.write('raw.mp4',fileBytes);
    setPercentage(0.1);
    await worker.run('raw.mp4'+transcode360+'360p.mp4')
    setPercentage(0.15);
    await worker.run('raw.mp4'+transcode480+'480p.mp4')
    setPercentage(0.40);
    await worker.run('raw.mp4'+transcode720+'720p.mp4')
    setPercentage(0.65);
    await worker.run('raw.mp4'+transcode1080+'1080p.mp4')
    setPercentage(0.90);
}