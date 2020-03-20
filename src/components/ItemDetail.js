import React, {Component} from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableHighlight } from 'react-native';
import {connect} from 'react-redux';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {fetchElement} from '../actions'
class ItemDetail extends Component{

    componentDidMount(){
        this.props.fetchElement(this.props.elementId);
    }

    render(){
       
        if(!this.props.selected){
            return(
                <Text>Loading</Text>
            );
        }
        return(
            <View style={styles.itemStyle}> 
                
                

                <Text style={styles.viewTop}> {this.props.selected.title}</Text>
                
                <ScrollView>
                <Text style={styles.itemText} >
                    {this.props.selected.body}
                </Text>
                </ScrollView>
                <ActionButton buttonColor="rgba(231,76,60,1)">
               <ActionButton.Item buttonColor='#3498db' title="Edit" onPress={() => {}}>
                  <Icon name="edit" style={styles.actionButtonIcon} />
                 </ActionButton.Item>
                 <ActionButton.Item buttonColor='#3498db' title="Delete" onPress={() => {}}>
                 <Icon name="delete" style={styles.actionButtonIcon} />
                 </ActionButton.Item>
                </ActionButton>
            </View>
        );
    }

    
}

const styles = StyleSheet.create({
    itemStyle:{
       
        marginTop: 30,
        height:'90%',
        marginHorizontal: 25,
        
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
        fontSize:15,
        flex: 1 ,
        marginTop: 50,
        textAlign: 'center',
        marginHorizontal:10
    },
    viewTop:{
        justifyContent:'center',
        
        color:"white",
        
        textAlignVertical:'center',
        fontWeight:'bold',
        
        textAlign:'center',
        borderWidth: 0,
        borderTopLeftRadius : 5,
        borderTopRightRadius : 5,
        marginHorizontal:0,
        backgroundColor:"#a0f",
       
        height: 50
    },
    titulo:{
       
       
    },
    botao:{
        flex:1,
        flexDirection: "row",
        shadowColor: '#000',
        shadowOffset:  {width:0,height:15},
        shadowOpacity: 0.9,
        shadowRadius: 16,
        elevation : 10,
        height:50,
        width:50,
        backgroundColor:"#a0f",
        borderRadius:8
    },
    textobotao:{
        textAlign:'center',
        textAlignVertical:'center',
        justifyContent:'center'
    },
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
      },
})



const mapStateToProps = (state)=>{
    return{
        selected: state.elements.selected 
    };
};
export default connect(mapStateToProps, {fetchElement})(ItemDetail);