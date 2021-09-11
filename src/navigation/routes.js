 // Starting Screens
import SplashScreen from "../screens/SplashScreen";
import LoginScreen from "../screens/Authenticate/LoginScreen";
import SignUpScreen from "../screens/Authenticate/SignUpScreen";

// Profile
import ProfileScreen from "../screens/ProfileScreen/ProfileScreen";
import AccountSettings from "../screens/ProfileScreen/AccountSettings";
import RewardScreen from "../screens/RewardScreen";

// Guides
import ExploreScreen from "../screens/Guides/ExploreScreen";
import MeditateScreen from "../screens/Guides/MeditateScreen";
import FocusScreen from "../screens/Guides/FocusScreen";
import SleepScreen from "../screens/Guides/SleepScreen";
import MoveScreen from "../screens/Guides/MoveScreen";


export const GuideRoutes = [
    {
      name: "Explore",
      component: {ExploreScreen},
      icon: "explore"
    },
    {
      name: "Meditate",
      component: {MeditateScreen},
      icon: "radio-button-unchecked"
    },
    {
      name: "Sleep",
      component: {SleepScreen},
      icon: "nightlight-round"
    },
    {
      name: "Move",
      component: {MoveScreen},
      icon: "timeline"
    },
    {
      name: "Focus",
      component: {FocusScreen},
      icon: "adjust"
    },
  
];