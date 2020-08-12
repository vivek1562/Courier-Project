import React from 'react';
import {TextInput,View,Text} from 'react-native';
import {globalStyles} from '../styles/global.js';
import {Formik} from 'formik';
import CustomButton from '../components/button.js';
import Header from '../components/header.js';

export default function AddRestaurant() {
    
    return(
        <View style={globalStyles.container}>
                <Header text='Add Restaurant'/> 
                <View style={globalStyles.form}>
                    <Formik
                        initialValues={{ hotelName: '',contactName: '',add: '',coordinates: '',phNum: '',uid: '',pass: ''}}
                        onSubmit={(value,actions)=>{
                            actions.resetForm();
                            console.log(values);
                        }}
                    >
                        {(props)=>(
                            <View>
                                <TextInput
                                    style={globalStyles.input}
                                    placeholder='enter hotel name'
                                    onChangeText={props.handleChange('hotelName')}
                                    value={props.values.hotelName}
                                />
                                <TextInput
                                    style={globalStyles.input}
                                    placeholder='enter Contact name'
                                    onChangeText={props.handleChange('contactName')}
                                    value={props.values.contactName}
                                />
                                <TextInput
                                    multiline
                                    style={globalStyles.input}
                                    placeholder='enter hotel address'
                                    onChangeText={props.handleChange('add')}
                                    value={props.values.add}
                                />
                                <TextInput
                                    style={globalStyles.input}
                                    placeholder='enter hotel coordinates'
                                    onChangeText={props.handleChange('coordinates')}
                                    value={props.values.coordinates}
                                />
                                <TextInput
                                    style={globalStyles.input}
                                    placeholder='enter Phone number'
                                    onChangeText={props.handleChange('phNum')}
                                    value={props.values.phNum}
                                    keyboardType='numeric'
                                />
                                <TextInput
                                    style={globalStyles.input}
                                    placeholder='enter user name'
                                    onChangeText={props.handleChange('uid')}
                                    value={props.values.uid}
                                />
                                <TextInput
                                    style={globalStyles.input}
                                    placeholder='enter password'
                                    onChangeText={props.handleChange('pass')}
                                    value={props.values.pass}
                                />
                                <View>
                                    <CustomButton text='Save' btnColor='#32CD32' onPress={props.handleSubmit}  />
                                    <CustomButton text='Cancel' btnColor='#CC0000' onPress={props.resetForm} />
                                </View>
                        </View>

                    )}
                    </Formik>
                </View>
        </View>
    )
}

