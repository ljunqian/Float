import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, TextInput, FlatList } from 'react-native';
import layout from '../../../styles/componentLayout';
import typo from '../../../styles/typography';
import back from '../../../assets/icons/backbutton.png';
import forward from '../../../assets/icons/forwardarrow.png';
import { Guides } from '../constants';

const SearchComponent = ({ navigation }) => {
    return (
        <View style={styles.searchContainer}>
            <TouchableOpacity onPress={()=>navigation.pop()}>
                <Image source={back} style={{marginLeft: 10}}/>  
            </TouchableOpacity>
            <TextInput 
                style={[typo.H2, styles.searchBox]}
                placeholder="Search"
                onChangeText={()=>{}}
            />
        </View>
    )
}

const ListComponent = ({ navigation }) => {
    let data = Guides.filter(item => 
    item.type.includes('meditation') || 
    item.title.includes('meditation') ||
    item.description.includes('meditation'));
    return (
        <FlatList 
            data={data}
            renderItem={({ item })=>(
                <View style={{alignItems: 'center'}}>
                    <TouchableOpacity style={styles.list} onPress={()=>navigation.navigate('GuideDetail', item)}>
                        <View style={styles.imageContainer}>
                            <Image source={item.thumbnail} style={styles.image}/>
                        </View>
                        <View style={styles.textBox}>
                            <Text style={[typo.T1, {color: 'white'}]}>{item.title}</Text>
                            <Text style={[typo.T3, {color: 'grey'}]}>{item.type} - {item.duration} min</Text>
                        </View>
                        <Image source={forward} style={{marginLeft: 10, marginRight: 40}}/>
                    </TouchableOpacity>
                    <View style={styles.whiteline}></View>
                </View>
            )}
        />
    )
}

const Favourites = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={{marginTop: 25, marginLeft: 23}}>
                <Text style={[typo.H4, {color: 'white'}]}>Favourites</Text>
            </View>
            <SearchComponent navigation={navigation}/>
            <ListComponent navigation={navigation}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        height: '100%',
        backgroundColor: '#272727',
    },
    searchContainer: {
        backgroundColor: 'grey',
        height: 50,
        marginTop: 25,
        marginBottom: 15,
        marginHorizontal: 15,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    searchBox: {
        width: 300,
        marginHorizontal: 10
    },
    list: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 15,
        marginLeft: 10
    },
    imageContainer: {
        width: 110,
        height: 70,
        borderRadius: 20,
        marginHorizontal: 20,
        backgroundColor: 'orange',
        overflow: 'hidden',
    },
    image: {
        width: 120,
        height: 80,
        left: -2,
        top: -2,
    },
    textBox: {
        width: 200, 
        height: 70, 
        justifyContent: 'center',
    },
    whiteline: {
        width: 390,
        height: 2,
        backgroundColor: 'white',
        borderRadius: 1,
    }
    
})

export default Favourites;