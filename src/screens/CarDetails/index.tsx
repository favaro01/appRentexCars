import { Accessory } from '../../components/Accessory';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Button } from '../../components/Button';

import { useRoute } from "@react-navigation/native";
import { CarDTO } from '../../dtos/CarDTO';

import { getAccessoryIcon } from "../../Utils/getAccessoryIcon";


import { 
  Container, 
  Header, 
  CarImages, 
  Content, 
  Details, 
  Description, 
  Brand, 
  Name,
  Rent,
  Period,
  Price,
  About,
  Acessories,
  Footer
} from './styles';

interface Params{
  car: CarDTO;
}

export function CarDetails(props) {
  const route = useRoute();
  const { car } = route.params as Params;

  function handleConfirmRental() {
    props.navigation.navigate('scheduling', {
      car
    });    
  }

  function handleBack() {
    props.navigation.goBack();
  }

  return (
    <Container>
        <Header>
          <BackButton onPress={handleBack} />            
        </Header>

      <CarImages>
        <ImageSlider 
          imagesUrl={car.photos} 
        />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>{car.brand}</Brand>
            <Name>{car.name}</Name>
          </Description>
          <Rent>
            <Period>{car.rent.period}</Period>
            <Price>R$ {car.rent.price}</Price>
          </Rent>
        </Details>
        
        <Acessories>
          {
            car.accessories.map(accessory => (
              <Accessory 
                key={accessory.type}
                name={accessory.name} 
                icon={getAccessoryIcon(accessory.type)} 
              />
            ))
          }        
        </Acessories>

        <About>{car.about}</About>

      </Content>
      <Footer>
        <Button title='Escolher periodo do aluguel' onPress={handleConfirmRental}/>
      </Footer>
    </Container>
  );
}