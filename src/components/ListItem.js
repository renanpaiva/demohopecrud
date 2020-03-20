import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ListItem = (props) =>{
    return(
        <TouchableOpacity onPress={()=>props.onItemPress(props.item.id)} >
            <View style={styles.itemStyle}>
                <View style={styles.viewTop}></View>     
                <Text style={styles.itemText} > {props.item.title} </Text>
            </View>
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    itemStyle:{
       
       
        height: 200,
        margin: 25,
        
        borderWidth: 0,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset:  {width:0,height:15},
        shadowOpacity: 0.9,
        shadowRadius: 16,
        elevation : 10,
        backgroundColor: '#fff'
    },
    itemText:{
        flex: 1 ,
        marginTop: 50,
        textAlign: 'center',
        fontWeight:'bold',
    },
    viewTop:{
        textAlign:'center',
        borderWidth: 0,
        borderTopLeftRadius : 5,
        borderTopRightRadius : 5,
        marginHorizontal:0,
        backgroundColor:"#a0f",
        height: 50
    }
})
export default ListItem;