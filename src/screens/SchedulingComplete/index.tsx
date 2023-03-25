import { StatusBar, useWindowDimensions } from 'react-native'
import { ConfirmButton } from '../../components/ConfirmButton';

import LogoSvg from '../../assets/logo_background_gray.svg';
import DoneSvg from '../../assets/done.svg';

import { Container, Content, Title, Message, Footer } from './styles';

export function SchedulingComplete(props) {
    const { width } = useWindowDimensions();

    function handleCompleteRental() {
        props.navigation.navigate('home');    
    }

    return (
    <Container>
         <StatusBar
            barStyle="light-content"
            translucent
            backgroundColor='transparent'
          />
        <LogoSvg
            width={width}            
        />

        <Content>
            <DoneSvg 
                width={80}
                height={80}
            />
            <Title>Carro alugado!</Title>
            <Message>
                Agora você só precisa ir{'\n'}
                até a concessionária da RENTX {'\n'}
                pegar o seu automóvel.
            </Message>
            <Footer>
                <ConfirmButton 
                    title='OK'
                    onPress={handleCompleteRental}
                />
            </Footer>
        </Content>
    </Container>
  );
}