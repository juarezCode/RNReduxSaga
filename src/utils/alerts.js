import { Alert } from 'react-native';

export const AlertError = error => {
  return Alert.alert(
    'Atención',
    error,
    [
      {
        text: 'Cancelar',
        onPress: () => {},
        style: 'cancel',
      },
      {
        text: 'Ok',
      },
    ],
    { cancelable: false },
  );
};
