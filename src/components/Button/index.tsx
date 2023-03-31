import { useTheme } from 'styled-components/native';
import theme from '../../screens/styles/theme';
import { Container, Title } from './styles';
import { ActivityIndicator } from 'react-native';

interface Props{
    title: string;
    color?: string;
    onPress: () => void;
    disabled?: boolean;
    loading?: boolean;
}

export function Button({
  title, 
  color, 
  onPress,
  disabled = false,
  loading = false
}: Props) {

  const theme = useTheme();

  return (
    <Container 
      onPress={onPress} 
      color={color ? color : theme.colors.main}
      disabled={disabled}
      style={{ opacity: (disabled === true || loading === true) ? .5 : 1}}
    >
        { loading 
          ? <ActivityIndicator color={theme.colors.shape}/>
          : <Title>{title}</Title>
        }
    </Container>
  );
}