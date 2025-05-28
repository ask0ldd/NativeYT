import { Link } from "expo-router";
import { Image, Pressable, Text, View } from "react-native";

export default function PlaylistVideoItem({ videoId, title, duration } : { videoId : string, title : string, duration : string }){

    function parseISODuration(isoDuration: string): string {
        return isoDuration.replace('PT', '').replace("M", ":").replace("S", "")
    }

    return(
        <View style={{width:'100%', height:100, padding:10, backgroundColor:'#55373722', borderRadius:4, boxShadow:'0 2px 12px 0 #00000088' }}>
            <Link href={{ pathname: "/playvideo", params: { videoId } }} style={{ width:'100%', flexDirection:'row', columnGap:10 }} asChild>
                <Pressable>
                    <View style={{width:'35%', height:80}}>
                        <Image
                            source={{ uri: `https://img.youtube.com/vi/${videoId}/default.jpg` }}
                            style={{ flex: 1, borderRadius:4 }}
                        />
                        <Text style={{position :'absolute', bottom : 4, right : 4, backgroundColor: '#00000099', borderRadius:4, paddingHorizontal:8, paddingVertical : 2, color : '#93AEB5', fontSize:10, lineHeight:20}}>{parseISODuration(duration)}</Text>
                    </View>
                    <Text style={{color:'#93AEB5', fontSize:12, lineHeight:20, flex : 1, flexWrap: 'wrap'}}>{title}</Text>
                </Pressable>
            </Link>
        </View>
    )
}