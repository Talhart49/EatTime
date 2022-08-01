import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    ScrollView,
    ImageBackground
  } from 'react-native';
  import React, {useState,useEffect} from 'react';
  import {NavigationContainer} from '@react-navigation/native';
  import {createNativeStackNavigator} from '@react-navigation/native-stack';
  
  
  const Records = () => {
  
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
  
   useEffect(()=>{
    fetch('https://mada03-f5180-default-rtdb.firebaseio.com/orders.json',{method: 'GET'}).then((response)=>{response.json}).then((json)=>{setData(json)})
   },[])
  
   

    useEffect(() => {
      fetch('https://mada03-f5180-default-rtdb.firebaseio.com/orders.json', { method: 'GET' })
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          setData(json);
          setLoading(false);
        });
    }, []);
    return loading ? (
      <Text>Loading...</Text>
    ) : 
    (
      <ScrollView>
      <View style={styles.containerR}>
                <Text style={styles.text}>id:</Text>
                <Text style={styles.text}>Price:</Text>
                <Text style={styles.text}>Address</Text>
                <Text style={styles.text}>Items</Text>
                </View>
        {Object.entries(data).map(item => {
          console.log(item)
          return (
            <View style={styles.container1}>
                <Text style={styles.text}>{item[1].id}</Text>
                <Text style={styles.text}>{item[1].price}</Text>
                <Text style={styles.text}>{item[1].address}</Text>
                <Text style={styles.text}>{item[1].items}</Text>
                <TouchableOpacity>
              <Text style={styles.cross}>x</Text>
               </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    );
  };
  
  const HomeScreen = ({navigation}) => {
     const [id, setId] = useState('');
    const [price, setPrice] = useState('');
    const [address, setAddress] = useState('');
    const [items, setItems] = useState('');

    const postData=()=>{
      fetch('https://mada03-f5180-default-rtdb.firebaseio.com/orders.json', {method:"POST", 
      body:JSON.stringify({
        id:id,
      }),
    }).then(()=>{
      console.log("Order Placed")
    })
    }
  
    const postData = () => {
      fetch('https://mada03-f5180-default-rtdb.firebaseio.com/orders.json', {
        method: 'POST',
        body: JSON.stringify({
          id: id,
          price: price,
          address: address,
          items: items,
        }),
      })
        .then(() => {
          alert('Order Placed');
        })
        .catch((err) => {
          alert(err);
        });
    };
    return (
      <ImageBackground style={{width: '100%', height: '100%'}}
      imageStyle= {{opacity:1}}
      >
      <View style={styles.container}>
        <View style={styles.topGrid}>
          <View style={styles.topGridItem}>
            <Text style={styles.text}>Item id:</Text>
  
            <TextInput
            placeholderTextColor="#000" 
            value={id}
            onChangeText={setId}
             style={styles.textInput} placeholder=" Item Id " />
          </View>
          <View style={styles.topGridItem}>
            <Text style={styles.text}>Order Price:</Text>
  
            <TextInput
            placeholderTextColor="#000" 
              onChangeText={setPrice}
              value={price}
             style={styles.textInput} placeholder="Enter Price" />
          </View>
        </View>
        <View style={styles.bottomGrid}>
          <Text style={styles.text}>Address:</Text>
          <TextInput
          placeholderTextColor="#000" 
            style={[styles.textInput, {width: '70%'}]}
            placeholder=" Enter Address "
            onChangeText={setAddress}
              value={address}
          />
          <Text style={styles.text}>Food Items:</Text>
          <TextInput
          placeholderTextColor="#000" 
            style={[styles.textInput, {width: '70%'}]}
            placeholder="Enter Food Items"
             onChangeText={setItems}
              value={items}
          />
        </View>
        <TouchableOpacity style={styles.touchableOpacity}
            onPress={()=>{postData()
            navigation.navigate('Receipt', {
              id,
              address,
              items,
              price
            })}}>
          <Text style={styles.button}>Order Now</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.touchableOpacity}
          onPress={() => navigation.navigate('Records')}>
          <Text style={styles.button}>View Records</Text>
        </TouchableOpacity>
      </View>
        </ImageBackground>
  
    );
  };
  
  
  /**
   * Sample React Native App
   * https://github.com/facebook/react-native
   *
   * @format
   * @flow strict-local
   */
  
  const Receipt = ({ route }) => {
    const { id, price, items, address } = route.params;
    return (
      <View style={styles.container}>
       <View >
            <Text style={[styles.heading, {textAlign: 'center'}]}>ID: {id}</Text>
        </View>
         <View >
            <Text style={[styles.heading, {textAlign: 'center'}]}>Price: {price}</Text>
        </View>
         <View >
            <Text style={[styles.heading, {textAlign: 'center'}]}>Address: {address}</Text>
        </View>
        <View >
            <Text style={[styles.heading, {textAlign: 'center'}]}>Items: {items}</Text>
        </View>
      </View>
    );
  };
  
  
  
  const Stack = createNativeStackNavigator();
  
  const App = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Food Delivery App" component={HomeScreen} />
          <Stack.Screen name="Records" component={Records} />
          <Stack.Screen name="Receipt" component={Receipt} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };
  
  const styles = StyleSheet.create({
     container: {
      justifyContent: 'center',
    },
    topGrid: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      marginTop: 20,
      padding: 10,
      width: '100%',
    },
    topGridItem: {
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      width: '52%',
    },
  
    textInput: {
      width: '50%',
      borderWidth: 1,
      borderColor: '#000',
      borderRadius: 5,
      padding: 5,
      marginHorizontal: 19,
    },
    bottomGrid: {
      marginTop: 50,
      marginHorizontal: 20,
      padding: 10,
    },
    text: {
      fontSize: 15,
      fontWeight: 'bold',
      marginVertical: 10,
      marginHorizontal: 10,
    },
    touchableOpacity: {
      width: 150,
      marginTop: 20,
      marginHorizontal: 20,
      padding: 10,
      backgroundColor: '#000',
      borderRadius: 50,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
    },
    button: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#fff',
    },
  
  
  
    containerR: {
      flexDirection:"row",
      backgroundColor: '#fff',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      padding: 50,
      marginTop: 20,
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    container1: {
      flexDirection:"row",
      backgroundColor: '#fff',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 50,
      marginTop: 20,
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
  
    
    cross:{
      padding:7,
      backgroundColor:"lightgrey",
      borderRadius:50,
      color:'red'
    }
  })
    
  
  export default App;