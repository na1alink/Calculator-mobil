import React, { useContext } from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { NumberContext } from './NumberProvider'

const FunctionButton = ({ buttonValue }) => {
	const { handleSetCalcFunction } = useContext(NumberContext)

	return (
		<TouchableOpacity
			style={styles.button}
			onPress={() => handleSetCalcFunction(buttonValue)}
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
		fontSize: 25,
		fontWeight: 'bold',
		color: 'orange', // Set your desired text color
	},
})

export default FunctionButton
