import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import BookDonateScreen from '../screens/BookDonateScreen';
import RecieverDetails from '../screens/recieverDetails';
export const STACK = createStackNavigator({
    BookDonate: {
        screen: BookDonateScreen,
        navigationOptions: { headerShown: false }
    },
    RecieverDetails: {
        screen: RecieverDetails,
        navigationOptions: { headerShown: false }
    },
},
    { initialRouteName: 'BookDonate' }
)