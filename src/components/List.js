import React, {Component} from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import ListItem from './ListItem';
import {fetchElements} from '../actions/index'
import { Actions } from 'react-native-router-flux';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ActionButton from 'react-native-action-button';


class List extends Component{

    onItemPress(id){
        Actions.card({elementId:id});
    }

    componentDidMount(){
        this.props.fetchElements()
    }
   
    render(){
       
        if(!this.props.elements){
            return( <View style={{flex:1, justifyContent:'center', alignItems: 'center' }}>
                <Text>Loading...</Text>
            </View>);
        }
        const elementos = this.props.elements.map(elements =>{
           
                return (
                    <ListItem key={elements.id} item={elements} onItemPress={this.onItemPress}/>
                );
        });
        return(
            <View style={{flex:1, justifyContent:'center', alignItems: 'stretch' }}>
            <ScrollView style={{marginTop:30}}>
            
            {elementos}
            
            </ScrollView>
            <ActionButton onPress={()=>Actions.newcard()} buttonColor="rgba(255,200,0,1)"/>
            </View>
        );
    }


}
const styles = StyleSheet.create({
    TouchableOpacityStyle: {
        //Here is the trick
        position: 'absolute',
        width: 50,
        height: 50,
        
        right: 0,
        bottom: 0,
     },
     FloatingButtonStyle: {
        resizeMode: 'contain',
        width: 50,
        height: 50,
        //backgroundColor:'black'
      },
}); 

const mapStateDispachToProps = (dispatch) =>{
    return bindActionCreators({fetchElements}, dispatch)
};

const mapStateToProps = (state) => {
    
    return {elements : state.elements.all};
};

export default connect(mapStateToProps,mapStateDispachToProps)(List);