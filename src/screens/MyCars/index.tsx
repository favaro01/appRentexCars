import { useEffect, useState } from 'react';
import { StatusBar, Dimensions, FlatList } from 'react-native';
import { useTheme } from 'styled-components';
import { BackButton } from '../../components/BackButton';
import { Car } from '../../components/Car';
import { CarDTO } from '../../dtos/CarDTO';
import { api } from '../../services/api';
import { AntDesign } from '@expo/vector-icons';
import { 
  Container,
  Header, 
  Title, 
  SubTitle,
  Content,
  Appointments,
  AppointmentsTitle,
  AppointmentsQuantity,
  CarWapper,
  CarFooter,
  CarFooterTitle,
  CarFooterPeriod,
  CarFooterDate,
} from './styles';

interface CarProps{
  id: string;
  user_id: string;
  car: CarDTO;
}

export function MyCars(props) {
  const [cars, setCars] = useState<CarProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await api.get('schedules_byuser?user_id=1');
        setCars(response.data);
      } catch (error) {
        console.log(error);
      }finally{
        setLoading(false);
      }
    }

    fetchCars();
  });

  //Theme
  const theme = useTheme();
  //Get height window
  const { height } = Dimensions.get('window');

  //function navigation back screen
  function handleBack() {
    props.navigation.goBack();
  }
  return (
    
    <Container>
        <Header Dimensions={height}>
          <StatusBar
            barStyle="light-content"
            translucent
            backgroundColor='transparent'
          />
          <BackButton 
            onPress={handleBack}
            color={theme.colors.shape}
          />
          <Title>
            Seus agendamentos, {'\n'}
            estão aqui.
          </Title>
          <SubTitle>
            Conforto, segurança e praticidade.
          </SubTitle>
          
        </Header>

        <Content>
          <Appointments>
            <AppointmentsTitle>Agendamentos Feitos</AppointmentsTitle>
            <AppointmentsQuantity>05</AppointmentsQuantity>
          </Appointments>

          <FlatList 
            data={cars}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
              <CarWapper>
                <Car
                  data={item.car}
                />
                <CarFooter>
                  <CarFooterTitle>Periodo</CarFooterTitle>
                  <CarFooterPeriod>
                    <CarFooterDate>18/06/2021</CarFooterDate>
                    <AntDesign 
                      name="arrowright"
                      size={20}
                      color={theme.colors.title} 
                      style={{marginHorizontal: 10}}
                    />
                    <CarFooterDate>18/06/2021</CarFooterDate>
                  </CarFooterPeriod>
                </CarFooter>
              </CarWapper>
            )}
          />

        </Content>

    </Container>
  );
}