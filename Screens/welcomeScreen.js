import React from "react";
import {
    TouchableOpacity,
    View,
    StyleSheet,
    Text,
} from "react-native";
import db from "../config";

export default class WelcomeScreen extends React.Component{
    render(){
        return(
            <View>
                <Text>
                    WelcomeScreen
                </Text>
                <TouchableOpacity
                onPress = {()=>{
                    this.props.navigation.navigate("Home")
                }}
                >
                    <Text>
                        Go
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}