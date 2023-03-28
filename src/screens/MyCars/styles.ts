import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${({theme}) => theme.colors.background_primary});
`;

interface HeightProps{
  Dimensions: number;
}

export const Header = styled.View<HeightProps>`
  width: 100%;
  height: ${({ Dimensions }) => Dimensions*0.46}px;
  background-color: ${({theme}) => theme.colors.header};
  justify-content: center;
  padding: ${RFValue(25)}px;
  padding-top: ${getStatusBarHeight() + RFValue(30)}px;
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.shape};
  font-family: ${({theme}) => theme.fonts.secondary_600};
  font-size: ${RFValue(30)}px;
  margin-top: ${RFValue(24)}px;
`;

export const SubTitle = styled.Text`
  color: ${({theme}) => theme.colors.shape};
  font-family: ${({theme}) => theme.fonts.secondary_600};
  font-size: ${RFValue(15)}px;
  margin-top: ${RFValue(24)}px;
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;
  padding: 0 16px;
`;

export const Appointments = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 24px 0;
`;

export const AppointmentsTitle = styled.Text`
  color: ${({theme}) => theme.colors.text};
  font-family: ${({theme}) => theme.fonts.primary_400};
  font-size: ${RFValue(15)}px;
`;

export const AppointmentsQuantity = styled.Text`
  color: ${({theme}) => theme.colors.title};
  ont-family: ${({theme}) => theme.fonts.primary_500};
  font-size: ${RFValue(15)}px;
`;



export const CarWapper = styled.View`
  margin-bottom: 16px;
`;

export const CarFooter = styled.View`
  width: 100%;
  padding: 12px;

  margin-top: -10px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const CarFooterTitle = styled.Text`

`;

export const CarFooterPeriod = styled.Text`

`;

export const CarFooterDate = styled.Text`

`;
