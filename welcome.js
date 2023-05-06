import React, { Component } from "react";
import { Text,View } from "react-native";
import PropTypes from 'prop-types';

export default class Welcome extends React.Component{
    render(){
        
        return(
            <View>
                <Text>{this.props.name}</Text>
                <Text>{this.props.surname}</Text>
            </View>
        )
    }
}

Welcome.PropTypes = {
   name:PropTypes.string.isRequired,
    
}

Welcome.defaultProps = {
    name: 'Tolunays Salak',
    surname: 'Aptal Gerizakalı',
}