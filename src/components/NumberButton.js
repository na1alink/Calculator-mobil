import React, { useContext } from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { NumberContext } from './NumberProvider'

const NumberButton = ({ buttonValue }) => {
	const { handleSetDisplayValue } = useContext(NumberContext)

	return (
		<TouchableOpacity
			style={styles.button}
			onPress={() => handleSetDisplayValue(buttonValue)}
		>
			<Text style={styles.buttonText}>{buttonValue}</Text>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	button: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',

		margin: 5,
	},
	buttonText: {
		fontSize: 20,
		fontWeight: 'bold',
		color: 'white', // Set your desired text color
	},
})

export default NumberButton
