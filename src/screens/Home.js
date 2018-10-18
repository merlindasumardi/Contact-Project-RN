import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { Card, CardSection, AddButton } from '../components/common';
import { connect } from 'react-redux';
import { Button } from '../components/common/Button';
import { getContactList, deleteContactList } from '../actions';
import Swipeout from 'react-native-swipeout'

class Home extends Component {
    constructor(props){
        super(props);

        this.state = {
            contactList: []
        }
    }

    componentWillMount() {
        console.log('here');
        this.props.getContactList();
    }

    componentWillReceiveProps(nextProps){
        // console.log('ini,', nextProps.contacts);

        this.setState({
            contactList: nextProps.contacts.contactList.data,
        });
    }

    onPressButton(item){
        console.log(item);
        this.props.navigation.navigate("Detail", {
            contactDetails: item
        });
    }

    onPressAdd(){
        console.log('pencet add')
        this.props.navigation.navigate("Form", {
            update: false,
            contactDetail: ''
        });
    }

    _onDelete(item) {
        console.log(item);
        this.props.deleteContactList(item);
    }

    render () {
      

        if (this.props.loading) {
            return (
                <View style={styles.activityIndicatorContainer}>
                    <ActivityIndicator animating={true}/>
                </View>
            );
        }
        else {
        return (
            <View>
                <ScrollView>
                    <Card>
                    {this.state.contactList.map((item, key) => {
                        return(
                                <CardSection key={key}>
                                    <Button onPressButton={this.onPressButton.bind(this, item)}>{item.firstName}</Button>
                                </CardSection>
                            
                            )}
                        )}

                        
                    </Card>
                </ScrollView>
                <AddButton onPressAdd={this.onPressAdd.bind(this)}></AddButton>
            </View>
            );
        }
    }
}

const styles = {
    activityIndicatorContainer: { 
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
}

const mapStateToProps = state => ({
    contacts: state.contact
});

const mapDispatchToProps = dispatch => ({
    getContactList: ()=> dispatch(getContactList()),
});

export default connect(mapStateToProps, mapDispatchToProps) (Home);