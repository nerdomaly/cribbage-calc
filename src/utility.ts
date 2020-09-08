/**
 * @param {*[]} comboOptions
 * @param {number} comboLength
 * @return {*[]}
 */
export function combineWithoutRepetitions(
	comboOptions: any[],
	comboLength: number
) {
	// If the length of the combination is 1 then each element of the original array
	// is a combination itself.
	if (comboLength === 1) {
		return comboOptions.map((comboOption: any) => [comboOption]);
	}

	// Init combinations array.
	const combos: any[][] = [];

	// Extract characters one by one and concatenate them to combinations of smaller lengths.
	// We need to extract them because we don't want to have repetitions after concatenation.
	comboOptions.forEach((currentOption: any, optionIndex: number) => {
		// Generate combinations of smaller size.
		const smallerCombos = combineWithoutRepetitions(
			comboOptions.slice(optionIndex + 1),
			comboLength - 1
		);

		// Concatenate currentOption with all combinations of smaller size.
		smallerCombos.forEach((smallerCombo: any) => {
			combos.push([currentOption].concat(smallerCombo));
		});
	});

	return combos;
}
