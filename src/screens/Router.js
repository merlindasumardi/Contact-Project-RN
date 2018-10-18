import { StackNavigator } from 'react-navigation';
import Home from './Home';
import Detail from './Detail';
import Form from './Form'

export default StackNavigator({
    Home: {
        screen: Home,
        navigationOptions: () => ({
            headerTitle: 'CONTACTS'
        })
    },
    Detail: {
        screen: Detail,
        navigationOptions: () => ({
            headerTitle: 'DETAILS'
        })
    },
    Form: {
        screen: Form,
        navigationOptions: () => ({
            headerTitle: 'Form'
        })
    },
})