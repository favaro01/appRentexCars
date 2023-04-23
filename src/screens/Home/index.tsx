import { useEffect, useState } from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

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
} from './styles';
//Component import
import { Car } from '../../components/Car';
import { LoadAnimation } from '../../components/LoadAnimation';
// images import
import Logo from "../../assets/logo.svg";

export function Home(props) {
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [loading, setLoading] = useState(true);

  function handleCarDetails(car: CarDTO) {
    props.navigation.navigate('carDetails', { car });    
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
            {
              !loading &&
              <TotalCars>
                Total de {cars.length} Carros
              </TotalCars>
            }
          </HeaderContent>
        </Header>
        { loading ? <LoadAnimation /> : 
          <CarList
            data={cars} 
            keyExtractor={item => item.id}             
            renderItem={({item}) => 
              <Car data={item} onPress={() => handleCarDetails(item)}/>   
            }
          />
        }
       
    </Container>
  );
}