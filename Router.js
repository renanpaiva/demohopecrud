import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';
import List from './src/components/List';
import ItemDetail from './src/components/ItemDetail';
import NewCard from './src/components/NewCard';
const RouterComponent = () => {
    return(
        <Router navigationBarStyle={{backgroundColor:"#80e", color:'white'}}>
            <Stack key="root">
                    <Scene key="list" component={List} title="Cards" />
                    <Scene key="card" component={ItemDetail} title="Card Detail"/>
                    <Scene key="newcard" component={NewCard} title="Add Card"/>
            </Stack>
        </Router>
    );
}

export default RouterComponent;