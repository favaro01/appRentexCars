import { useState } from 'react';
import { 
  Container,
  Header,
  HeaderTop,
  HeaderTitle,
  LogoutButton,
  PhotoContainer,
  Photo,
  PhotoButton,
  Content,
  ContentHeader,
  Option,
  OptionTitle
} from './styles';
import { StatusBar } from 'react-native';
import { BackButton } from '../../components/BackButton';
import { useTheme } from 'styled-components';
import { Feather } from '@expo/vector-icons';

export function Profile(props:any) {
  const [loading, setLoading] = useState(true);
  const [option, setOption] = useState<'dataEdit' | 'passwordEdit'>('dataEdit');
  const theme = useTheme();

  //function navigation back screen
  function handleBack() {
    props.navigation.goBack();
  }

  function handleSignOut() {
    
  }
  function handleOptionChange() {
    
  }

  return (    
    <Container>
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor='transparent'
        />
        <Header>
          <HeaderTop>
            <BackButton 
              color={theme.colors.shape} 
              onPress={handleBack}
            />
            <HeaderTitle>
              Editar Perfil
            </HeaderTitle>
            <LogoutButton onPress={handleSignOut}>
              <Feather name='power' size={24} color={theme.colors.shape}  />
            </LogoutButton>
          </HeaderTop>

          <PhotoContainer>
            <Photo source={{uri: 'https://github.com/favaro01.png'}}/>
            <PhotoButton onPress={() => {}}>
              <Feather name='camera' size={24} color={theme.colors.shape} />
            </PhotoButton>
          </PhotoContainer>
        </Header>
        <Content>
          <ContentHeader>
            <Option 
              active={option === 'dataEdit'}
              onPress={() => handleOptionChange()}
            >
              <OptionTitle active={option === 'dataEdit'}>
                Dados
              </OptionTitle>
            </Option>              
            <Option active={option === 'passwordEdit'}>
              <OptionTitle active={option === 'passwordEdit'}>
                Trocar Senha
              </OptionTitle>
            </Option>              
          </ContentHeader>
        </Content>
    </Container>
  );
}