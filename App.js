import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Display from './src/components/Display'
import NumberProvider from './src/components/NumberProvider'
import ButtonsView from './src/components/ButtonsView'

export default function App() {
	return (
		<NumberProvider>
			<View style={styles.mainContainer}>
				<View style={styles.contDisplay}>
					<Display />
				</View>
				<View style={styles.contButtons}>
					<ButtonsView />
				</View>
			</View>
		</NumberProvider>
	)
}

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
		fontSize: 40,
	},
	contDisplay: {
		flex: 2,
		backgroundColor: 'black',
		width: '100%',
		justifyContent: 'space-around',
		alignItems: 'center',
		borderBottomColor: 'grey',
		borderBottomWidth: 1,
	},

	contButtons: {
		flex: 2,
		width: '100%',

		justifyContent: 'space-around',
		alignItems: 'center',
	},
})
