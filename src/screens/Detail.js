import React, {Component} from 'react';
import { View, Text , Image, ScrollView} from 'react-native';
import { Card, CardSection, CustomButton} from '../components/common';
import { deleteContactList } from '../actions';
import { connect } from 'react-redux';

class Detail extends Component {
    constructor(props){
        super(props);

        this.state = {
            contactDetails: this.props.navigation.state.params.contactDetails
        }
    }

    componentWillMount(){
        console.log(this.state.contactDetails);
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps.contacts);
        if (nextProps.contacts.addContactStatus) {
            this.props.getContactList();
            this.props.navigation.navigate("Home");
        }
    }

    _onDelete(item) {
        console.log(item);
        this.props.deleteContactList(item);
    }

    onUpdate(item){
        console.log(item);
        this.props.navigation.navigate('Form', {
            contactDetail: item,
            update: true
        });
    }


    render () {
        console.log('ini state', this.state)
        return (
            <View >
                <ScrollView>
                <Card>
                    <CardSection>
                        <Image source={{uri: this.state.contactDetails.photo}} style={{width: 100, height: 100}}/>
                        <Text>{"First Name: "} 
                        {this.state.contactDetails.firstName}</Text>
                        <Text>{"Last Name: "}
                        {this.state.contactDetails.lastName}</Text>
                        <Text>{"Age: "}
                        {this.state.contactDetails.age}</Text>
                    </CardSection>
                    <CardSection>
                        <CustomButton onPressButton={() => {this.onUpdate(this.state.contactDetails)}}>Edit</CustomButton>
                    </CardSection>
                    <CardSection>
                        <CustomButton onPressButton={() => {this._onDelete(this.state.contactDetails)}}>Delete</CustomButton>
                    </CardSection>
                </Card>
                </ScrollView>
                
                
                    
                    
                    
            </View>
        );
    }
}

const styles = {
    activityIndicatorContainer: { 
        backgroundColor: "#fff",
        flex: 1,
    },
}

const mapStateToProps = state => ({
    contacts: state.contact
});

const mapDispatchToProps = dispatch => ({
    deleteContactList: (data) => dispatch(deleteContactList(data))
});

export default connect(mapStateToProps, mapDispatchToProps) (Detail);
