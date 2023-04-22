import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../screens/Home';
import { CarDetails } from '../screens/CarDetails';
import { Scheduling } from '../screens/Scheduling';
import { Confirmation } from '../screens/Confirmation';
import { SchedulingDetails } from '../screens/SchedulingDetails';
import { MyCars } from '../screens/MyCars';
import { Splash } from '../screens/Splash';
import { SignIn } from '../screens/SignIn';
import { SignUpFirstStep } from '../screens/SignUp/SignUpFirstStep';
import { SignUpSecondStep } from '../screens/SignUp/SignUpSecondStep';


const { Navigator, Screen } = createNativeStackNavigator();


export function StackRoutes(){
    return(
        <Navigator screenOptions={{ headerShown:false }} initialRouteName='signin'>
            <Screen 
                name="signin"
                component={SignIn}
            />
            <Screen 
                name="signupfirststep"
                component={SignUpFirstStep}
            />
             <Screen 
                name="signupsecondstep"
                component={SignUpSecondStep}
            />
            <Screen 
                name="home"
                component={Home}
                options={{ 
                    gestureEnabled: false,
                 }}
            />
            <Screen 
                name="carDetails"
                component={CarDetails}
            />
            <Screen 
                name="scheduling"
                component={Scheduling}
            />
            <Screen 
                name="confirmation"
                component={Confirmation}
            />
            <Screen 
                name="schedulingDetails"
                component={SchedulingDetails}
            />
            <Screen 
                name="myCars"
                component={MyCars}
            />
        </Navigator>
    )
}