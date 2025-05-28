import { Link } from "expo-router";
import { Image, Pressable, Text, View } from "react-native";

export default function PlaylistVideoItem({ videoId, title, duration } : { videoId : string, title : string, duration : string }){

    function parseISODuration(isoDuration: string): string {
        return isoDuration.replace('PT', '').replace("M", ":").replace("S", "")
    }

    return(
        <View style={{flexGrow:1, flexShrink:1, width:'40%', padding:10, backgroundColor:'#55373722', borderRadius:4, boxShadow:'0 2px 12px 0 #00000088' }}>
            <Link href={{ pathname: "/playvideo", params: { videoId } }} style={{ width:'100%', flexDirection:'column', rowGap:10}} asChild>
                <Pressable>
                    <Text style={{color:'#93AEB5', fontSize:12, lineHeight:20}}>{title}</Text>
                    <Image
                        source={{ uri: `https://img.youtube.com/vi/${videoId}/default.jpg` }}
                        style={{ width:'100%', height:undefined, aspectRatio:120/90, borderRadius:4 }}
                    />
                    <Text style={{color:'#93AEB5', fontSize:10, lineHeight:20}}>{parseISODuration(duration)}</Text>
                </Pressable>
            </Link>
        </View>
    )
}