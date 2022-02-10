import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from '../styles.js';

export default function Exames_Pendentes_Oftalmologista({ navigation }) {
    var exames_pendentes_oftalmologista = [['Santa Casa', 'Carolina'],
    ['Moinhos de Vento', 'Carlos'],
    ['Mãe de Deus', 'José']];

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Exames pendentes</Text>
            {exames_pendentes_oftalmologista.map((item) => {
                return (
                    <Pressable style={styles.list_button} onPress={() => navigation.navigate('Visualizar_Exame')}>
                        <View style={styles.list_button_local}>
                            <Icon name="hospital" size={25} />
                            <Text style={styles.list_subtitle}>{item[0]}</Text>
                        </View>
                        <Text style={styles.list_title}>Paciente: {item[1]}</Text>
                    </Pressable>
                );
            })}
            <StatusBar style="auto" />
        </View>
    );
}