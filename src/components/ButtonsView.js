import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import ClearButton from './ClearButton'
import BackButton from './BackButton'
import FunctionButton from './FunctionButton'
import NumberButton from './NumberButton'
import EqualButton from './EqualButton'

const Buttons = () => {
	return (
		<View style={styles.contButtons}>
			<View style={styles.row}>
				<ClearButton />
				<BackButton />
				<FunctionButton buttonValue='%' />
				<FunctionButton buttonValue='÷' />
			</View>
			<View style={styles.row}>
				<NumberButton buttonValue={7} />
				<NumberButton buttonValue={8} />
				<NumberButton buttonValue={9} />
				<FunctionButton buttonValue='×' />
			</View>
			<View style={styles.row}>
				<NumberButton buttonValue={4} />
				<NumberButton buttonValue={5} />
				<NumberButton buttonValue={6} />
				<FunctionButton buttonValue='-' />
			</View>
			<View style={styles.row}>
				<NumberButton buttonValue={1} />
				<NumberButton buttonValue={2} />
				<NumberButton buttonValue={3} />
				<FunctionButton buttonValue='+' />
			</View>
			<View style={styles.row}>
				<FunctionButton buttonValue='⟳' />
				<NumberButton buttonValue={0} />
				<NumberButton buttonValue='.' />
				<EqualButton />
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	contButtons: {
		display: 'flex',
		flex: 2,
		width: '100%',
		backgroundColor: 'black',
		justifyContent: 'space-around',
		alignItems: 'center',
	},

	row: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		width: '100%',
	},
	cell: {
		flex: 1,
		width: '100%',
		height: '100%',
		justifyContent: 'space-around',
		alignItems: 'center',
	},
})

export default Buttons
