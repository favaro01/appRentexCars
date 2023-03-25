import { Accessory } from '../../components/Accessory';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';

import SpeedSvg from "../../assets/speed.svg";
import AccelerationSvg from "../../assets/acceleration.svg";
import ForceSvg from "../../assets/force.svg";
import GasolineSvg from "../../assets/gasoline.svg";
import ExchangeSvg from "../../assets/exchange.svg";
import PeopleSvg from "../../assets/people.svg";

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
import { Button } from '../../components/Button';

export function CarDetails(props) {

  function handleConfirmRental() {
    props.navigation.navigate('scheduling');    
  }
  return (
    <Container>
        <Header>
          <BackButton onPress={()=>{}} />
            
        </Header>

      <CarImages>
        <ImageSlider 
          imagesUrl={['https://freepngimg.com/thumb/audi/35227-5-audi-rs5-red.png']} 
        />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>AUDI</Brand>
            <Name>RS 5 Coupé</Name>
          </Description>
          <Rent>
            <Period>Ao Dia</Period>
            <Price>R$ 120</Price>
          </Rent>
        </Details>
        
        <Acessories>
          <Accessory name="380Km/h" icon={SpeedSvg}/>
          <Accessory name="3.2s" icon={AccelerationSvg}/>
          <Accessory name="800 HP" icon={ForceSvg}/>
          <Accessory name="Gasolina" icon={GasolineSvg}/>
          <Accessory name="Auto" icon={ExchangeSvg}/>
          <Accessory name="2 pessoas" icon={PeopleSvg}/>
        </Acessories>

        <About>
          Este é automóvel desportivo. Surgiu do lendário touro de lide indultado na praça Real Maestranza de Sevilla. É um belíssimo carro para quem gosta de acelerar.
        </About>

      </Content>
      <Footer>
        <Button title='Escolher periodo do aluguel' onPress={handleConfirmRental}/>
      </Footer>
    </Container>
  );
}