import React, {Component} from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableHighlight } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import ActionButton from 'react-native-action-button';
import { connect } from 'react-redux';
import {changeTitle, changeBody,saveElement} from '../actions'
import { bindActionCreators } from 'redux';
import { Actions } from 'react-native-router-flux';

class NewCard extends Component {
    onTitleChange(title){
        this.props.changeTitle(title);
    }

    onBodyChange(body){
        this.props.changeBody(body);
    }

    Save(){
        const {title,body} = this.props;
        this.props.saveElement({title,body });
        console.log(this.props.id);
        Actions.card(this.props.id);
    }

    render(){
        
        return(
            <View>
             
            <View style={styles.itemStyle}>
                
                <View style={styles.viewTop}>
                    
                <TextInput onChangeText={this.onTitleChange.bind(this)}  value={this.props.title} placeholder={"Escreva Título"}/>
               
                </View>
                <View style={styles.itemText}>
                <TextInput multiline={true} onChangeText={this.onBodyChange.bind(this)}  value={this.props.body} style={styles.texto}  placeholder={"Escreva corpo do Card"}/>
                <ActionButton buttonColor="#e52" onPress={this.Save.bind(this)}></ActionButton>
                </View>
                


            
            </View>
            
            </View>
        );
    }
}


const styles = StyleSheet.create({
    itemStyle:{
       
        marginTop: 30,
        height:'88%',
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
        backgroundColor:"#ddf",
       
        height: 50
    },
    texto:{
      width:'99%',
      height:'99%',
      backgroundColor:'#eee',
      color : "#000",
      textAlign:'center'
       
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
});

const mapStateToProps = (state) =>{
    const {title, body, id} = state.novo;
    return {title, body, id};
};
const mapDispatchToProps =(dispatch) =>{return bindActionCreators({saveElement,changeTitle, changeBody},dispatch);};
export default connect(mapStateToProps, mapDispatchToProps) (NewCard);