import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Data from './Data';
import ListItem from './ListItem';

export default class List extends React.Component{

    constructor(props){
        super(props);
        this.initData = Data;

        this.state = {
            data: this.initData
        }
    };

    handleDeleteTask = (itemId) => {
        const newData = this.state.data.filter(item => itemId !== item.id);
        this.setState({
            data: newData
        });
    };

    render() {
        const header = () => {
            return <View style={styles.header}>
                <Text style={styles.headerText}>List Header</Text>
            </View>
        };
        return (
            <View style={styles.contentContainer}>
                <FlatList
                    ListHeaderComponent={header}
                    data={this.state.data}
                    keyExtractor={(item)=>(item.id).toString()}
                    ItemSeparatorComponent={() => <View style={styles.itemSeparator}></View>}
                    contentContainerStyle={{borderBottomColor: 'grey', borderBottomWidth: 1}}
                    renderItem={({item, index})=> <ListItem handleDeleteTask={this.handleDeleteTask} item={item} index={index} />}
                />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    contentContainer: {
        backgroundColor: 'white',
    },
    header: {
        height: 60,
        backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    },
    itemSeparator: {
        borderBottomWidth: 1,
        borderBottomColor: 'grey'
    }
})