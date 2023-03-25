import { useTheme } from 'styled-components/native';
import { BackButton } from '../../components/BackButton';
import { StatusBar } from 'react-native';
import { Button } from '../../components/Button';
import { Calendar } from '../../components/Calendar';

import ArrowSvg from '../../assets/arrow.svg';

import { 
  Container, 
  Header, 
  Title, 
  RentalPeriod,
  DateInfo,
  DateTitle,
  DateValue,
  Content,
  Footer
} from './styles';

export function Scheduling(props) {
  const theme = useTheme();

  function handleConfirmRental() {
    props.navigation.navigate('schedulingDetails');    
  }

  return (
    <Container>
        <Header>
          <StatusBar
            barStyle="light-content"
            translucent
            backgroundColor='transparent'
          />
          <BackButton 
            onPress={()=>{}}
            color={theme.colors.shape}
          />
          <Title>
            Escolha uma {'\n'}
            data de início e {'\n'}
            fim do aluguel
          </Title>
          <RentalPeriod>
            <DateInfo>
              <DateTitle>DE</DateTitle>
              <DateValue selected={false}></DateValue>
            </DateInfo>

            <ArrowSvg />

            <DateInfo>
              <DateTitle>DE</DateTitle>
              <DateValue selected={false}></DateValue>
            </DateInfo>
          </RentalPeriod>
        </Header>
        
        <Content>
          <Calendar />
        </Content>

        <Footer>
          <Button title='Confirmar' onPress={handleConfirmRental}/>
        </Footer>

    </Container>
  );
}