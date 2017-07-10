import React, {Component} from 'React';
import {StyleSheet} from 'react-native';
import {Container, Content, InputGroup, Input,
Icon, Item} from 'native-base';

export default class UnderlineTextEntry
extends Component {
    render () {
        return (
            <Container>
                <Content>
                    <Item underline>
                        <Icon active name='search'/>
                        <Input onChangeText={(searchTerm) => this.props.search(searchTerm)} 
                        placeholder='Search by actor...'
                        placeholderTextColor='#FFF' style={StyleSheet.flatten
                        (styles.searchEntry)}/>
                    </Item>
                </Content>
            </Container>
        );
    }
}
const styles = StyleSheet.create({
    searchEntry: {
        color: '#FFF',
        fontSize: 14
    }
});