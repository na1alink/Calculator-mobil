import React, { useContext } from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { NumberContext } from './NumberProvider'

const ClearButton = () => {
	const { handleClearValue } = useContext(NumberContext)

	return (
		<TouchableOpacity style={styles.button} onPress={() => handleClearValue()}>
			<Text style={styles.buttonText}>C</Text>
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
		color: 'orange',
	},
})
export default ClearButton
