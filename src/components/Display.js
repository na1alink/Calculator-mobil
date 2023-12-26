import React, { useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { NumberContext } from './NumberProvider'

const Display = () => {
	const { number, storedNumber, functionType, history } =
		useContext(NumberContext)

	return (
		<View style={styles.display}>
			<Text style={styles.storedDisplay}>
				{!storedNumber ? ' ' : `${storedNumber} ${functionType} ${number}`}
			</Text>
			<Text style={styles.mainDisplay}>
				{!number.length && !storedNumber ? '0' : number || storedNumber}
			</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	display: {
		flex: 2,
		backgroundColor: 'black',
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-end',
		justifyContent: 'flex-end',
		padding: 20,
		gap: 20,
	},
	mainDisplay: {
		color: 'white',
		fontSize: 35,
	},
	storedDisplay: {
		color: 'white',
		fontSize: 20,
	},
})

export default Display
