import * as React from 'react';
import { Pressable, View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  HeaderBackButton,
} from '@react-navigation/stack';

function Nome({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image source={require('./assets/download.jpeg')}/>
      <Text>Robério José silva de Oliveira</Text>
      <Pressable
        onPress={() => navigation.navigate('Formação ')}
        style={{
          backgroundColor: 'grey',
          padding: 10,
          marginBottom: 10,
          marginTop: 10,
        }}>
        <Text>Formação</Text>
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate('Experiencia ')}
        style={{ backgroundColor: 'grey', padding: 10 }}>
        <Text>Experiencia</Text>
      </Pressable>
    </View>
  );
}

function Formação () {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Ánalise e Desenvolvimento de Sistemas - 2024 - Faculdade SENAC PE</Text>
    </View>
  );
}

function Experiencia () {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>A procura da primeira Experiencia na area de desenvolvimento.</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({ navigation, route }) => ({
          headerLeft: (props) => {
            return (
              <>
                <Text>Nome</Text>
                {props.canGoBack && <HeaderBackButton {...props} />}
              </>
            );
          },
        })}>
        <Stack.Screen name="Nome" component={Nome} />
        <Stack.Screen name="Formação " component={Formação } />
        <Stack.Screen name="Experiencia " component={Experiencia } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
