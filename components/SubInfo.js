import { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { COLORS, SIZES, SHADOWS, FONTS, assets } from '../constants';


// The title of each NFT
export const NftTitle = ({ title, subTitle, titleSize, subTitleSize }) => {
  return (
    <View>
      <Text style={{ fontSize: titleSize, fontFamily: FONTS.semiBold, color: COLORS.primary }}>{title}</Text>
      <Text style={{ fontSize: subTitleSize, fontFamily: FONTS.regular, color: COLORS.primary }}>{subTitle}</Text>
    </View>
  )
};

// The price 
export const EthPrice = ({ price }) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Image source={assets.eth} resizeMode="contain" style={{ width: 20, height: 20, marginRight: 2 }} />
      <Text style={{
        fontFamily: FONTS.medium,
        color: COLORS.primary,
        fontSize: SIZES.font,
      }}>{price}</Text>
    </View>
  )
};

// The NFT image
export const ImageCmp = ({ imageUrl, index }) => {
  return (
    <Image
      source={imageUrl}
      resizeMode="contain"
      style={{ width: 48, height: 48, marginLeft: index === 0 ? 0 : -SIZES.font }}
    />
  )
};

// The people who are interested in the NFT
export const People = () => {
  return (
    <View style={{ flexDirection: 'row' }}>
      {[assets.person02, assets.person03, assets.person04].map((imageUrl, index) => (
        <ImageCmp imageUrl={imageUrl} index={index} key={`People-${index}`} />
      ))}
    </View>
  )
};

// The end of the offer
export const EndDate = () => {

  const [timer, setTimer] = useState({
    timerDays: 0,
    timerHours: 0,
    timerMinutes: 0
  });
  let interval;

  useEffect(() => {
    startTimer();
  });

  const startTimer = () => {
    const countDownDate = new Date("May 23,2022").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = countDownDate - now;

      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);

      } else {
        setTimer({
          timerDays: days,
          timerHours: hours,
          timerMinutes: minutes
        })
      }
    });
  };


  return (
    <View style={{
      paddingHorizontal: SIZES.font,
      paddingVertical: SIZES.font,
      backgroundColor: COLORS.white,
      justifyContent: "center",
      alignItems: "center",
      ...SHADOWS.light,
      maxWidth: "50%",
      elevation: 1
    }}>

      <Text style={{ fontFamily: FONTS.regular, fontSize: SIZES.small, color: COLORS.primary }}>Enfing in</Text>

      <Text style={{ fontFamily: FONTS.semiBold, fontSize: SIZES.medium, color: COLORS.primary }}>
        {timer.timerDays}d {timer.timerHours}h {timer.timerMinutes}m
      </Text>
    </View>
  )
};

// The info part of each NFT
export const SubInfo = () => {
  return (
    <View style={{
      width: '100%',
      paddingHorizontal: SIZES.font,
      marginTop: -SIZES.extraLarge,
      flexDirection: 'row',
      justifyContent: 'space-between'
    }}>
      <People />
      <EndDate />
    </View>
  )
};

