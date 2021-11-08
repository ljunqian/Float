import React, {useState} from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, TextInput, FlatList, ScrollView } from 'react-native';
import layout from '../../styles/componentLayout';
import typo from '../../styles/typography';
import back from '../../assets/icons/backbutton.png';
import forward from '../../assets/icons/forwardarrow.png';
import xBtn from '../../assets/icons/xbutton.png';
import { Guides } from '../Guides/constants';

const TopSixComponent = ({ isPopular, navigation }) => {
    let data = [Guides[25], Guides[14], Guides[15], Guides[9], Guides[4], Guides[21]];
    let heading = "Ideas for you";
    if(isPopular){
        data = [Guides[2], Guides[9], Guides[17], Guides[20], Guides[12], Guides[19]];
        heading = "Popular on FLOAT";
    }
    
    return (
        <View style={styles.suggestContainer}>
            <Text style={[typo.T1, {color: 'white'}]}>{heading}</Text>
            <View style={{flexDirection: 'row', marginTop: 5}}>
                <View>
                    <GuideCardComponent item={data[0]} navigation={navigation}/>
                    <GuideCardComponent item={data[1]} navigation={navigation}/>
                    <GuideCardComponent item={data[2]} navigation={navigation}/>
                </View>
                <View>
                    <GuideCardComponent item={data[3]} navigation={navigation}/>
                    <GuideCardComponent item={data[4]} navigation={navigation}/>
                    <GuideCardComponent item={data[5]} navigation={navigation}/>
                </View>
            </View>
        </View>
    )
}

const GuideCardComponent = ({ item, navigation }) => {
    return (
        <TouchableOpacity style={styles.big_guideComponent} onPress={()=>navigation.navigate('GuideDetail', item)}>
            <Image source={item.thumbnail} style={styles.big_image}/>
            <View style={{margin: 10}}>
                <Text style={[typo.T1, {color: 'white'}]}>{item.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const Search = ({ navigation }) => {
    const [userInput, setUserInput] = useState('');
    const [isSearching, setIsSearching] = useState(false);

    const SuggestComponent = () => {
        return (
            <ScrollView>
                <ScrollView contentContainerStyle={{marginLeft:12}} fadingEdgeLength={10} horizontal={true}>
                {filters.map((item, index) => {
                    return(
                        <TouchableOpacity style={styles.filterBox} key={index} 
                            onPress={() => {
                                setUserInput(item.toLowerCase())
                                if(isSearching == false)
                                    setIsSearching(true)}}>
                            <Text style={[typo.T4, {color:'white'}]}>{item}</Text>
                        </TouchableOpacity>
                    )
                })}
                </ScrollView>

                <TopSixComponent isPopular={false} navigation={navigation}/>
                <TopSixComponent isPopular={true} navigation={navigation}/>
            </ScrollView>
        )
    }

    const searchComponent = () => {
        return (
            <View style={styles.searchContainer}>
                <TouchableOpacity onPress={()=>navigation.pop()}>
                    <Image source={back} style={{marginLeft: 10}}/>  
                </TouchableOpacity>
                <TextInput 
                    style={[typo.H2, styles.searchBox]}
                    placeholder="Search"
                    onChangeText={text => {
                        if(text == '')
                            setIsSearching(false)
                        else{
                            setIsSearching(true)
                            setUserInput(text.toLowerCase())
                        }}
                    }
                    value={isSearching?userInput:""}
                />
                {isSearching && 
                    <TouchableOpacity onPress={()=>setIsSearching(false)}>                           
                        <Image source={xBtn} style={{marginLeft: 10}}/>  
                    </TouchableOpacity>   
                } 
            </View>
        ) 
    }

    const ListComponent = () => {
        let data = Guides.filter(item => 
        item.type.toLowerCase().includes(userInput) || 
        item.title.toLowerCase().includes(userInput) || 
        item.description.toLowerCase().includes(userInput)); 
        return (
            <FlatList 
                data={data}
                renderItem={({ item })=>(
                    <View style={{alignItems: 'center'}}>
                        <TouchableOpacity style={styles.list} onPress={()=>navigation.navigate('GuideDetail', item)}>
                            <View style={styles.small_guideComponent}>
                                <Image source={item.thumbnail} style={styles.small_image}/>
                            </View>
                            <View style={styles.textBox}>
                                <Text style={[typo.T1, {color: 'white'}]}>{item.title}</Text>
                                <Text style={[typo.T3, {color: 'grey'}]}>{item.type} - {item.duration} mins</Text>
                            </View>
                            <Image source={forward} style={{marginLeft: 10, marginRight: 40}}/>
                        </TouchableOpacity>
                        <View style={styles.whiteline}></View>
                    </View>
                )}
            />
        )
    }

    const ToggleView = () => {
        if(isSearching)
            return <ListComponent />
        
        return <SuggestComponent />
    }

    return (
        <View style={styles.container}>
            {searchComponent()}
            <ToggleView />
        </View>
    )
}

const types = {
    meditate: 'Meditate',
    sleep: 'Sleep',
    move: 'Move',
    focus: 'Focus'
}

const filters = [
    "focus",     
    "meditation",
    "sleep",
    "mobility",
    "better",
    "anywhere"
]

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
        width: 280,
        marginHorizontal: 10,
        color: 'white',
    },
    list: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 15,
        display: 'flex',
        width: '100%',
    },
    small_guideComponent: {
        flex: 1.5,
        height: 70,
        borderRadius: 20,
        marginHorizontal: 20,
        backgroundColor: 'orange',
        overflow: 'hidden',
    },
    small_image: {
        width: 120,
        height: 80,
        left: -2,
        top: -2,
    },
    textBox: {
        flex: 3,
        height: 70, 
        justifyContent: 'center',
    },
    whiteline: {
        width: '100%',
        height: 2,
        backgroundColor: 'white',
        borderRadius: 1,
    },
    filterBox: {
        height: 40,
        backgroundColor:'#FF9F00',
        alignSelf: 'flex-start',
        justifyContent: 'center',
        marginHorizontal: 6,
        paddingHorizontal: 16,
        borderRadius: 48
    },
    big_guideComponent: {
        width: 160,
        height: 90,
        borderRadius: 20,
        margin: 6,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        overflow: 'hidden',        
    },
    big_image: {
        width: 190,
        height: 100,
        left: -3,
        top: -2,
        position: 'absolute',
        opacity: 0.5
    },
    suggestContainer: {
        display: 'flex', 
        alignItems: 'center', 
        marginTop: 27,
        padding: 10,
    },
})

export default Search;