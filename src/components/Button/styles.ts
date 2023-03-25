import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';


interface ButtonProps extends TouchableOpacityProps{
  color: string;
}

export const Container = styled(TouchableOpacity)<ButtonProps>`
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 19px;

  background-color: ${({ color }) => color };
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_500};
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(15)}px;
`;