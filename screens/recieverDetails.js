import * as React from 'react';
import { View, StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';
import { Card, Icon, Header } from 'react-native-elements'
import firebase from 'firebase';
import db from '../config'
export default class RecieverDetails extends React.Component() {
    constructor() {
        super();
        this.state = {
            emailId: firebase.auth().currentUser.email,
            recieverName: '',
            recieverAddress: '',
            recieverContact: '',
            recieverRequestId: '',
            recieverId: this.props.navigation.getParam('details')['user_id'],
            requestId: this.props.navigation.getParam('details')['request_id'],
            bookName: this.props.navigation.getParam('details')['book_name'],
            reason: this.props.navigation.getParam('details')['reason_to_request'],
        }
    }
    getDetails = () => {
        db.collection('users').where('email', '==', this.state.recieverId).get()
            .then(s => {
                s.forEach(d => {
                    this.setState({
                        recieverName: d.data().first_name,
                        recieverContact: d.data().contact,
                        recieverAddress: d.data().address
                    }
                    )
                })
            })
        db.collection('requested_books').where('request_id', '==', this.state.requestId).get()
            .then(s => {
                s.forEach(d => {
                    this.setState({
                        recieverRequestId: d.id
                    })
                })
            })
    }
    componentDidMount() {
        this.getDetails();
    }
    render() {
        return (
            <View>
                <Card title={'Book Information'} titleStyle={{ fontSize: 20 }}>
                    <Card>
                        <Text>Book's Name: {this.state.bookName}</Text>
                    </Card>
                    <Card>
                        <Text>Reason: {this.state.reason}</Text>
                    </Card>       
                    <Card>
                        <Text>Reciever's Name: {this.state.recieverName}</Text>
                    </Card>  
                    <Card>
                        <Text>Contact: {this.state.recieverContact}</Text>
                    </Card>
                    <Card>
                        <Text>Address: {this.state.recieverAddress}</Text>
                    </Card>                                                                       
                </Card>
            </View>
        )
    }

}