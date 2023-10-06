import React, { useState } from "react";
import { View,Text,Image, StyleSheet, useWindowDimensions} from "react-native";
import  Logo  from "D:/dev/Project_404/assets/images/Logo.png";
import CustomInput from "../componant/CustomInput";
import CustomBotton from "D:/dev/Project_404/scr/componant/CustomBotton/CustomBotton.js"


const SignInScreen = () => {
    const [Username,setUsername] = useState('');
    const [Password,setPassword] = useState('');


    const {height} = useWindowDimensions();
    const onSignInPress = () => {
        console.warn('Sign in')
    }
const onForgotpPasswordPress = () => {
    console.warn('onForgotPasswordPress')
}
    
    return(
        <View style={styles.root}>
            <Image source={Logo} 
            style={[styles.Logo, {height:height * 0.3}]} 
            resizeMode='contain' 
            />
            <CustomInput 
                placeholder="Username" 
                value={Username} 
                setValue={setUsername}
                
            />
            <CustomInput 
                placeholder="Password" 
                value={Password} 
                setValue={setPassword}
                secureTextEntry
            />
            <CustomBotton 
                text="Sign In" 
                onPress={onSignInPress}
            />
            <CustomBotton 
                text="Forgot password" 
                onPress={onForgotpPasswordPress}
                type = "TERIARY"
            />
               
        </View>
    )
}

const styles=StyleSheet.create({
    root :{
        alignItems: 'center',
        padding:10,
        
    },
    Logo: {
        width:'60%',
        maxWidth:150,
        maxHeight:200,
    },
})



export default SignInScreen;
