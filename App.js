import React, { Fragment } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

const App = () => {
	return (
		<>
			<ScrollView>
				<View style={{ flexDirection: 'row' }}>
					<Image style={styles.banner} source={require('./assets/img/bg.jpg')} />
				</View>
				<View style={styles.contenedor}>
					<Text style={styles.titulo}>Que hacer en Paris</Text>
					<ScrollView horizontal>
						<View>
							<Image style={styles.ciudad} source={require('./assets/img/actividad1.jpg')} />
						</View>
						<View>
							<Image style={styles.ciudad} source={require('./assets/img/actividad2.jpg')} />
						</View>
						<View>
							<Image style={styles.ciudad} source={require('./assets/img/actividad3.jpg')} />
						</View>
						<View>
							<Image style={styles.ciudad} source={require('./assets/img/actividad4.jpg')} />
						</View>
						<View>
							<Image style={styles.ciudad} source={require('./assets/img/actividad5.jpg')} />
						</View>
					</ScrollView>
					<Text style={styles.titulo}>Los Mejores alojamientos</Text>
					<View>
						<View style={{flexDirection:'row'}}>
							<Image style={styles.mejores} source={require('./assets/img/mejores1.jpg')} />
						</View>
						<View style={{flexDirection:'row'}}>
							<Image style={styles.mejores} source={require('./assets/img/mejores2.jpg')} />
						</View>
						<View style={{flexDirection:'row'}}>
							<Image style={styles.mejores} source={require('./assets/img/mejores3.jpg')} />
						</View>
					</View>
          <Text style={styles.titulo}>Hospedajes en LA</Text>
          <View style={styles.listado}>
            <View style={styles.listadoItem}> 
              <Image style={styles.hospeImage} source={require('./assets/img/hospedaje1.jpg')} />
              <Text style={{textAlign:'center'}}>Casa 3 Recamaras</Text>
            </View>
            <View style={styles.listadoItem}>
              <Image style={styles.hospeImage} source={require('./assets/img/hospedaje2.jpg')} />
              <Text style={{textAlign:'center'}}>Casa 2 Recamaras</Text>
            </View>
            <View style={styles.listadoItem}>
              <Image style={styles.hospeImage} source={require('./assets/img/hospedaje3.jpg')} />
              <Text style={{textAlign:'center'}}>Casa 5 Recamaras</Text>
            </View>
            <View style={styles.listadoItem}>
              <Image style={styles.hospeImage} source={require('./assets/img/hospedaje4.jpg')} />
              <Text style={{textAlign:'center'}}>Casa 4 Recamaras</Text>
            </View>
          </View>
				</View>
			</ScrollView>
		</>
	);
};

export default App;

const styles = StyleSheet.create({
	banner: {
		height: 250,
		flex: 1
	},
	titulo: {
		fontWeight: 'bold',
		fontSize: 24,
		marginVertical: 20
	},
	contenedor: {
		marginHorizontal: 10,
	},
	ciudad: {
		width: 250,
		height: 300,
		marginRight: 10
  },
  mejores:{
    flex:1,
    height:200,
    marginVertical:5
  },
  hospeImage :{
    height :200,
    width  :'100%',
    marginVertical : 10,
  },
  listado:{
    flexDirection:'row',
    flexWrap : 'wrap',
    justifyContent : 'space-between',
  },
  listadoItem : {
    flexBasis : '49%',
    marginBottom :10,
  }
});
