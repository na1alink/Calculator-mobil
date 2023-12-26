import React, { useContext } from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { NumberContext } from './NumberProvider'

const BackButton = () => {
	const { handleBackButton } = useContext(NumberContext)

	return (
		<TouchableOpacity style={styles.button} onPress={() => handleBackButton()}>
			<Text style={styles.buttonText}>&#8592;</Text>
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

export default BackButton
