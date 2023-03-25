import { Container, Header, TotalCars, HeaderContent, CarList } from './styles';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import Logo from "../../assets/logo.svg";

import { Car } from '../../components/Car';

export function Home(props) {

  const carData = {
    brand: 'AUDI',
    name: 'RS 5 Coupé',
    rent: {
        period: 'Ao dia',
        price: 120,
    },
    thumbnail: 'https://freepngimg.com/thumb/audi/35227-5-audi-rs5-red.png',    
  }

  function handleCarDetails() {
    props.navigation.navigate('carDetails');    
  }

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
        <CarList
          data={[1,2,3,4,5,6,7]}
          keyExtractor={item => String(item)}             
          renderItem={({item}) => 
            <Car data={carData} onPress={handleCarDetails}/>   
          }
        />
    </Container>
  );
}