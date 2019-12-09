import React from 'react';
import { Text, View } from 'react-native'
class Details extends React.Component {
    state = {  }
    render() { 
        return ( 
            <View style={{flex: 1,  alignItems:"center"}}>
            <View style={{alignItems:"center", justifyContent:"center"}}>
                <Text>Hey</Text>
            </View>
            </View>
         );
    }
}
 
export default Details;