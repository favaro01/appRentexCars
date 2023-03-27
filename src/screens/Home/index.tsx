//import native and installations 
import { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

//import types
import { CarDTO } from '../../dtos/CarDTO';

//api import
import { api } from '../../services/api';

//styled component import
import { 
  Container, 
  Header, 
  TotalCars, 
  HeaderContent, 
  CarList, 
  MyCarsButton
} from './styles';
//Component import
import { Car } from '../../components/Car';
import { Load } from '../../components/Load';
// images import
import Logo from "../../assets/logo.svg";

export function Home(props) {
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [loading, setLoading] = useState(true);
  const theme = useTheme();

  function handleCarDetails(car: CarDTO) {
    props.navigation.navigate('carDetails', { car });    
  }

  function handleOpenMyCars() {
    props.navigation.navigate('myCars');    
  }

  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await api.get('/cars');          
        setCars(response.data);
      } catch (error) {
        console.log(error);
      }finally{
        setLoading(false);
      }
    }

    fetchCars();
  }, []);

  return (
    <Container>
        <StatusBar
          barStyle='light-content'
          backgroundColor='transparent'
          translucent
        />
        <Header>
          <HeaderContent>
            <Logo 
              width={RFValue(108)} 
              height={RFValue(12)} 
            />
            <TotalCars>
              Total de 12 Carros
            </TotalCars>
          </HeaderContent>
        </Header>
        { loading ? <Load /> : 
          <CarList
            data={cars} 
            keyExtractor={item => item.id}             
            renderItem={({item}) => 
              <Car data={item} onPress={() => handleCarDetails(item)}/>   
            }
          />
        }

        <MyCarsButton onPress={handleOpenMyCars}>
          <Ionicons 
            name="ios-car-sport"  
            size={32}
            color={theme.colors.shape}          
          />
        </MyCarsButton>
    </Container>
  );
}