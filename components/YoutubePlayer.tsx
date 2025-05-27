import { WebView } from 'react-native-webview';

export default function YouTubePlayer ({ videoId } : { videoId : string }) {
    return(
        <WebView
            source={{ uri: `https://www.youtube.com/embed/${videoId}` }}
            style={{ width: '100%' }}
            allowsFullscreenVideo
        />
    )
}