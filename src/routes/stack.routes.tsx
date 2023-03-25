import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../screens/Home';
import { CarDetails } from '../screens/CarDetails';
import { Scheduling } from '../screens/Scheduling';
import { SchedulingComplete } from '../screens/SchedulingComplete';
import { SchedulingDetails } from '../screens/SchedulingDetails';


const { Navigator, Screen } = createNativeStackNavigator();


export function StackRoutes(){
    return(
        <Navigator screenOptions={{ headerShown:false }}>
            <Screen 
                name="home"
                component={Home}
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
                name="schedulingComplete"
                component={SchedulingComplete}
            />
            <Screen 
                name="schedulingDetails"
                component={SchedulingDetails}
            />
        </Navigator>
    )
}