import { View, Text, Image, StatusBar } from 'react-native';

import {  assets } from '../constants';
import { CircleButton, RectButton, SubInfo, DetailsDesc, DetailsBid, FocusedStatusBar } from '../components';

const DetailHeader = ({ data, navigation }) => {
  return (
    <View style={{ width: '100%', height: 373 }}>
      <Image
        source={data.image}
        resizeMode="cover"
        style={{ width: "100%", height: "100%" }}
      />

      <CircleButton
        imgUrl={assets.left}
        handlePress={() => navigation.goBack()}
        left={15}
        top={StatusBar.currentHeight + 10}
      />
      <CircleButton
        imgUrl={assets.heart}
        handlePress={() => navigation.goBack()}
        right={15}
        top={StatusBar.currentHeight + 10}
      />
    </View>
  )
}

export default DetailHeader;