import {StyleSheet, Text, View} from 'react-native';
import {Card, Title, Paragraph} from 'react-native-paper';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const FoodCard = ({imgs, title, price, rating, ...rest}) => {
  return (
    <Card style={styles.foodCard} {...rest}>
      <Card.Cover source={imgs} style={styles.img} />
      <Card.Content>
        <Title style={styles.title}>{title}</Title>
        <View style={styles.star}>
          <Icon
            name="star-outline"
            size={14}
            color="orange"
            style={{paddingRight: 5}}
          />
          <Text>{rating}</Text>
        </View>

        <Paragraph style={styles.paragraph}>{price}</Paragraph>
      </Card.Content>
    </Card>
  );
};

export default FoodCard;

const styles = StyleSheet.create({
  foodCard: {
    width: 165,
    height: 220,
    paddingHorizontal: 10,
    paddingVertical: 7,
    margin: 17,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 15,
  },
  star: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 137,
    height: 117,
    borderRadius: 7,
    resizeMode: 'cover',
    paddingLeft: 6,
  },
  title: {
    fontFamily: 'Inter',
    fontSize: 15,
    fontWeight: '700',
    lineHeight: 21,
    letterSpacing: -0.3199999928474426,
    width: '100%',
    paddingTop: 10,
  },
  paragraph: {
    fontFamily: 'Inter',
    fontSize: 15,
    fontWeight: '700',
    lineHeight: 21,
    textAlign: 'center',
  },
});
