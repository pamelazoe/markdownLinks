const flagsFromJson = require("./flags.json")

const getFlags = () => Object.values(flagsFromJson)

/**
 * [someFunction description]
 * @param  {String} inputPath -
 * @return {Object}      [description]
 */

const setFlagsToFalse = () => {
	const flags = getFlags()
	return flags.reduce((acc, flag) => {
		// eslint-disable-next-line no-unused-vars
		const { alias, process } = flag
		return { ...acc, [process]: false }
	}, {})
}

const getValidFlags = async () => {
	const flags = await getFlags()
	return flags.map((items) => items.alias).flat()
}
const filterFlags = async (inputArgs) => {
	const validFlags = await getValidFlags()
	return inputArgs.filter((arg) => !validFlags.includes(arg))
}
exports.filterFlags = filterFlags
exports.getValidFlags = getValidFlags
exports.getFlags = getFlags
exports.setFlagsToFalse = setFlagsToFalse

// setFlagsToFalse()
// 	.then((data) => console.log(data))
// 	.catch((err) => console.log(err))
