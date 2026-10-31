import { View, StyleSheet, Image } from 'react-native';

export default function Bird({ birdLeft, birdBottom }) {
    const birdWidth = 40;
    const birdHeight = 40;

    return(
        <Image
          style={{
            position: 'absolute',
            left: birdLeft - (birdWidth/2),
            bottom: birdBottom - (birdHeight/2),
            width: 40,
            height: 40
          }}
          source={require('../../assets/bird1.png')}
        ></Image>
    )
}

const styles = StyleSheet.create({
  bird: {
    position: "absolute",
    width: birdWidth,
    height: birdHeight,
    backgroundColor: 'blue',
    left: birdLeft - birdWidth / 2,
    bottom: birdBottom - birdHeight / 2
  }
})