import { IYouTubeVideo, videos } from "@/constants/Videos";

export default class mockVideosService{
    static getAll() : IYouTubeVideo[]{
        return videos
    }
}