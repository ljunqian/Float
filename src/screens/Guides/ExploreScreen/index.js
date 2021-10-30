
import React, {useState, useEffect} from 'react';
import {Image, Text, View, StyleSheet, ScrollView, TouchableOpacity, ImageBackground} from 'react-native';
import typo from '../../../styles/typography';
import theme, { color } from '../../../styles/theme';
import { Icon } from 'react-native-elements';
import LoveRed from '../../../assets/icons/lovered.png';
import LoveYellow from '../../../assets/icons/loveyellow.png';
import Time from '../../../assets/icons/time.png';
import Video from '../../../assets/icons/video.png';
import Tick from '../../../assets/icons/tick.png';
import Explore1 from '../../../assets/images/explore1.png';
import Explore2 from '../../../assets/images/explore2.png';
import Explore3 from '../../../assets/images/explore3.png';
import Explore4 from '../../../assets/images/explore4.png';
import Line32 from '../../../assets/images/Line32.png';
import Meditate1 from '../../../assets/images/med-1.png';
import Meditate2 from '../../../assets/images/med-2.png';
import Sleep1 from '../../../assets/images/sleep1.png';
import Move1 from '../../../assets/images/move-2.png';
import Focus1 from '../../../assets/images/focus-1.png';
import { Guides, types } from '../constants';
import { getGuidesInfo } from '../Redux/GuidesAction';
import { useSelector, useDispatch } from 'react-redux';
import { Auth } from 'aws-amplify';

const ExploreScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const {guides} = useSelector((state) => state.guide);

  const [isTimeline, setIsTimeline] = useState(false);
  const [name, setName] = useState();
  const [info, setInfo] = useState({
    name: '',
    username: '',
    email: '',
    coins: '',
    meditateD: '',
    sleepD: '',
    moveD: '',
    friends: []
  });

  const getUserInfo = async () => {
    try {
      const { username } = await Auth.currentAuthenticatedUser();
      setName(username)
    } catch (error) {
      console.log("Error saving post", error);
    }
  }

  useEffect(() => {
    getUserInfo();
    dispatch(getGuidesInfo({guides: Guides}))
  }, []);

  const MyRadioButton = ({isDone}) =>{

    return(isDone?
    <View style={style.MyRadioButton}>
      <Image source={Tick} />
    </View>
    :
    <Icon name="radio-button-unchecked" size={30} color="white"/>)
  }

  const CardComponent = ({img, type, duration, guide}) => {
    const isDone = guides[guide.key].done;

    return (
      <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginHorizontal: 20, right: 10}}>
        <MyRadioButton isDone={isDone}/>
        <TouchableOpacity onPress={()=>navigation.navigate('GuideDetail', guide)}>
          <View style={[style.card, {opacity: isDone? 0.8:1}]}>
            <View style={{width: 235, justifyContent: 'center', bottom: 5, paddingRight: 40}}>
              <Text style={typo.H3}>{guide.title}</Text>
              <View style={{flexDirection: 'row', left: 15, top: 5}}>
                <Image source={Video} right={5}/>
                <Text style={[typo.T6, {color: colours[type]}]}>{type} Activity</Text>
              </View>
              <View style={{flexDirection: 'row', left: 16, top: 12}}>
                <Image source={Time} right={5}/>
                <Text style={typo.T6}>{guide.duration} mins</Text>
              </View>
            </View>
            <Image source={img} style={{width: 75, height: 75, borderRadius: 13, right: 35}}/>
          </View>
        </TouchableOpacity>
      </View>
    )
  }

  const Timeline = () => {

    const LineBG = ({ src, top, left }) => {
      return <Image source={src} style={{position: 'absolute', top: top, left: left}}/>
    }

    return(
      <View style={{marginHorizontal: 15, marginBottom: 100}}>
        <Text style={[style.header, typo.T1]}>
          Start your day
        </Text>
        <CardComponent img={Explore1} type={"Meditate"} duration={'3-5 mins'} guide={Guides[3]}/>
          <LineBG src={Line32} top={'11.5%'} left={'6.5%'}/>
        <CardComponent img={Explore3} type={"Move"} duration={'40-45 mins'} guide={Guides[14]}/>
          <LineBG src={Line32} top={'24.5%'} left={'6.5%'}/>
        <CardComponent img={Explore2} type={"Focus"} duration={'15-20 mins'} guide={Guides[18]}/>

        <Text style={[style.header, typo.T1]}>
          Afternoon lift
        </Text>
        <CardComponent img={Explore1} type={"Meditate"} duration={'10-15 mins'} guide={Guides[1]}/>
          <LineBG src={Line32} top={'53.5%'} left={'6.5%'}/>
        <CardComponent img={Explore2} type={"Focus"} duration={'35-40 mins'} guide={Guides[14]}/>

        <Text style={[style.header, typo.T1]}>
          At night
        </Text>
        <CardComponent img={Explore4} type={"Sleep"} duration={'3-7 mins'} guide={Guides[7]}/>
          <LineBG src={Line32} top={'82.5%'} left={'6.5%'}/>
        <CardComponent img={Explore4} type={"Sleep"} duration={'1-3 mins'} guide={Guides[8]}/>
      </View>
    )
  }

  const GetStarted = () => {
    
    const MyComponent = ({image, title}) => {
      return(
        <View style={{height: 155, width: 175, display: 'flex', 
              flexDirection: 'row',
              borderRadius: 20,
              margin: 10, backgroundColor: 'white', overflow: 'hidden'}}>
          <ImageBackground source={image} style={{width:'100%', height: '110%', top: -5}}>
            <View style={{flex: 3, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={[typo.H4, {color: 'white',  textShadowColor: 'rgba(0, 0, 0, 0.75)',
                textShadowOffset: {width: -1, height: 1},
                textShadowRadius: 10}]}>
                {title}
              </Text> 
            </View>
          </ImageBackground>
        </View>
      ) 
    }

    return(
      <>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={() => navigation.navigate('GuidesLesson', types.meditate)}>
          <MyComponent image={Meditate2} title={"Meditation"}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('GuidesLesson', types.sleep)}>
          <MyComponent image={Sleep1} title={"Sleep"}/>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={() => navigation.navigate('GuidesLesson', types.move)}>
          <MyComponent image={Move1} title={"Move"}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('GuidesLesson', types.focus)}>
          <MyComponent image={Focus1} title={"Focus"}/>
        </TouchableOpacity>
      </View>
      </>
    )
  }

  const PageSplit = () => {
    return(isTimeline?<Timeline/>:<GetStarted/>)
  }

  return (

    <ScrollView style={theme.container}>
      <View style={{marginHorizontal: 20}}> 
        <Text style={[typo.H1, {color: 'white'}]}>
          Good afternoon, {name}
        </Text>
      </View>
      <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>

        <TouchableOpacity style={style.button} onPress={() => navigation.navigate('Favourites')}>
          <Image source={LoveRed} style={{ marginRight: 10 }} />
          <Text>
            Favourites
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.button} onPress={() => navigation.navigate('Recents')}>
          <Image source={LoveYellow} style={{ marginRight: 10 }} />
          <Text>
            Recents
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center', marginHorizontal: 15, marginVertical: 10}}>
        <TouchableOpacity onPress={()=>setIsTimeline(false)}>
          <Text style={[typo.T5, {color: 'white'}]}>Get Started</Text>
          {!isTimeline && <View style={style.whiteline} />}
        </TouchableOpacity>
        <Text style={[style.pageSplit, {color: 'white'}]}>  |  </Text>
        <TouchableOpacity onPress={()=>setIsTimeline(true)}>
          <Text style={[typo.T5, {color: 'white'}]}>Timeline</Text>
          {isTimeline && <View style={style.whiteline} />}
        </TouchableOpacity>
      </View>
      <PageSplit />

    </ScrollView>
  )
}

const colours = {
  "Meditate": color.Med1,
  "Move": color.Move1,
  "Focus": color.Focus3,
  "Sleep": color.Sleep2,
}

const style = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: 'white',
    paddingBottom: 40
  },
  button: {
    borderRadius: 12,
    borderWidth: 0.5,
    borderColor: 'rgba(0, 0, 0, 0.5)',
    backgroundColor: 'white',
    color: 'black',
    width: 180,
    height: 45,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,

  },
  card: {
    borderWidth: 0.5,
    borderColor: 'rgba(0, 0, 0, 0.5)',
    backgroundColor: 'white',
    height: 100,
    width: 300,
    borderRadius: 20,
    margin: 10,
    padding: 10,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },
  header: {
    marginTop: 10,
    color: 'white'
  },
  whiteline: {
    height: 2,
    backgroundColor: 'white',
    borderRadius: 1,
  },
  pageSplit: {
    fontFamily: 'Arial',
    fontSize: 16,
  },
  MyRadioButton: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: 'white',
    left: -2,
    marginLeft: 4
  }   
  
})

export default ExploreScreen;