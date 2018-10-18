import React, { Component } from 'react';
import { View, ScrollView} from 'react-native';
import { Card, CardSection, Input, CustomButton} from '../components/common';
import { addContactList, getContactList, updateContactList } from '../actions';
import { connect } from 'react-redux';

class Form extends Component {
    constructor (props) {
        super(props);

        this.state = {
            id: this.props.navigation.state.params.contactDetail.id? this.props.navigation.state.params.contactDetail.id : '',
            firstName: this.props.navigation.state.params.contactDetail.firstName? this.props.navigation.state.params.contactDetail.firstName : '',
            lastName: this.props.navigation.state.params.contactDetail.lastName? this.props.navigation.state.params.contactDetail.lastName : '',
            age: this.props.navigation.state.params.contactDetail.age? this.props.navigation.state.params.contactDetail.age.toString() : '',
            photo: this.props.navigation.state.params.contactDetail.photo? this.props.navigation.state.params.contactDetail.photo : '',
            update: this.props.navigation.state.params.update
        }
    }

    componentWillMount(){
        console.log('ini form');
        console.log(this.props.addContact);
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps.contacts);
        if (nextProps.contacts.addContactStatus) {
            this.props.getContactList();
            this.props.navigation.navigate("Home");
        }
    }

    onPressSave(){
        console.log('save klik');
        if(this.state.update){
            this.props.updateContact({
                id: this.state.id,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                age: this.state.age,
                photo: this.state.photo,
            });
        }
        else {
            this.props.addContact({
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                age: this.state.age,
                photo: this.state.photo,
            });
        }
    }

    render () {
        console.log('form');
        return (
            <View style={{flex: 1}}>
            <ScrollView>
                <Card>
                    <CardSection>
                        <Input 
                        label='First name'
                         placeholder = 'Merlinda'
                         value = {this.state.firstName}
                         onChangeText = {(firstName) => this.setState({firstName})}></Input>
                    </CardSection>
                    <CardSection>
                        <Input label='Last name'
                         placeholder = 'Sumardi'
                         value = {this.state.lastName}
                         onChangeText = {lastName => this.setState({lastName})}></Input>
                    </CardSection>
                    <CardSection>
                        <Input label='Age'
                         placeholder = '21'
                         value = {this.state.age}
                         onChangeText = {age => this.setState({age})}></Input>
                    </CardSection>
                    <CardSection>
                        <Input label='Photo'
                         placeholder = 'http://xyz.com/images'
                         value = {this.state.photo}
                         onChangeText = {photo => this.setState({photo: photo? photo : 'N/A'})}></Input>
                    </CardSection>
                    <CardSection><CustomButton onPressButton={() => this.onPressSave()}>SAVE</CustomButton></CardSection>
                </Card>
                
                </ScrollView>
            </View>
        );    
    }
}

const mapStateToProps = state => ({
    contacts: state.contact
});

const mapDispatchToProps = dispatch => ({
    addContact: (data) => dispatch(addContactList(data)),
    getContactList: () => dispatch(getContactList()),
    updateContact: (data) => dispatch(updateContactList(data))
});

export default connect(mapStateToProps,mapDispatchToProps) (Form);