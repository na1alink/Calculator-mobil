import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const labels = [
	['C', '←', '%', '÷'],
	['7', '8', '9', '×'],
	['4', '5', '6', '-'],
	['1', '2', '3', '+'],
	['⟳', '0', '.', '='],
]

export default function App() {
	const [operation, setOperation] = useState(null)
	const [firstOperand, setFirstOperand] = useState('')
	const [secondOperand, setSecondOperand] = useState('')
	const [display, setDisplay] = useState('')

	let functionMapping = {
		'+': () => performOperation((a, b) => a + b),
		'-': () => performOperation((a, b) => a - b),
		'×': () => performOperation((a, b) => a * b),
		'÷': () => performOperation((a, b) => a / b),
		'%': () => handlePercentage(),
		C: clearDisplay,
		'+/-': () => setDisplay(prev => (+prev * -1).toString()),
		'.': () =>
			setDisplay(prev => (prev.indexOf('.') === -1 ? prev + '.' : prev)),
		'=': calculateResult,
	}

	for (let i = 0; i < 10; i++) {
		functionMapping[i + ''] = () => setDisplay(prev => prev + i)
	}

	function performOperation(op) {
		setOperation(() => op)
		setFirstOperand(display)
		setDisplay('')
	}

	function clearDisplay() {
		setFirstOperand('')
		setSecondOperand('')
		setOperation(null)
		setDisplay('')
	}

	function handlePercentage() {
		if (display && display !== '0') {
			const result = (+display / 100).toString()
			setDisplay(result)
		}
	}

	function calculateResult() {
		if (operation && firstOperand && display) {
			let result = operation(+firstOperand, +display)
			setSecondOperand(display)
			setDisplay(result.toString())
			setOperation(null)
		}
	}

	function handleBackspace() {
		setDisplay(prev => prev.slice(0, -1))
	}

	return (
		<View style={styles.root}>
			<View style={styles.display}>
				<Text style={styles.txtDisplay}>{display}</Text>
			</View>
			<View style={styles.keyboard}>
				{labels.map((value, index) => (
					<View key={index} style={styles.row}>
						{value.map(item => (
							<TouchableOpacity
								key={item}
								style={styles.cell}
								onPress={() => {
									if (item === '←') {
										handleBackspace()
									} else {
										functionMapping[item]()
									}
								}}
							>
								<Text style={{ fontSize: 35 }}>{item}</Text>
							</TouchableOpacity>
						))}
					</View>
				))}
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	root: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
		fontSize: 40,
	},
	display: {
		flex: 2,
		backgroundColor: 'black',
		width: '100%',
		justifyContent: 'space-around',
		alignItems: 'center',
	},
	txtDisplay: {
		fontSize: 40,
		color: 'white',
		justifyContent: 'flex-end',
	},

	keyboard: {
		flex: 2,
		width: '100%',
		backgroundColor: 'lightgrey',
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
