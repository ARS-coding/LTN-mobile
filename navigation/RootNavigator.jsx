import React, { useState } from 'react';

import { connect } from 'react-redux'; 

import { NavigationContainer } from '@react-navigation/native';

import AuthStack from './AuthStack';
import HomeStack from './HomeStack';

function RootNavigator({ isSignedIn }) {
    return (
        <NavigationContainer>
            {isSignedIn ? <HomeStack /> : <AuthStack />}
        </NavigationContainer>
    )
}

const mapStateToProps = state => ({ isSignedIn: state.isSignedIn });

export default connect(mapStateToProps)(RootNavigator);