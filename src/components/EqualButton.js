import React, { useContext } from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { NumberContext } from './NumberProvider'

const EqualButton = () => {
	const { doMath } = useContext(NumberContext)

	return (
		<TouchableOpacity style={styles.button} onPress={() => doMath()}>
			<Text style={styles.buttonText}>=</Text>
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
export default EqualButton
