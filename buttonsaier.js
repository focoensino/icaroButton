import React from 'react';
import { TouchableOpacity,StyleSheet,Text } from 'react-native';
import { withNavigation } from 'react-navigation';


const VoltarInicioButton = ({ navigation }) => (
<TouchableOpacity
    style={[styles.button, { backgroundColor: '#A77AFF' }]}
    onPress={() => navigation.navigate('InicioScreen')}
  >
    <Text style={styles.buttonText}>Sair</Text>
  </TouchableOpacity>
  
);




const styles = StyleSheet.create({
  button: {
    justfyContent: 'center',
    alignSelf: 'center',
    borderWhidth: 2,
    borderRadius: 15,
    marginTop: 50,
    width: 200,
    height: 50,
  },
  buttonText: {
    textAlign: 'center',
    color: 'black',
    fontSize: 30,
  },
});

export default withNavigation(VoltarInicioButton);

