#!/usr/bin/env node
const {
	checkPathExists,
	validateOptions,
	extractLinks,
	checkValidate,
} = require("./solvers")

const mdLinks = async (path, args) => {
	const validatePath = await checkPathExists(__dirname, path)
	const validateFlags = await validateOptions(validatePath, args)
	const returnLinks = await extractLinks(validateFlags)
	const checkingValidation = await checkValidate(returnLinks)
	return checkingValidation
}

mdLinks(process.argv[2], process.argv.slice(3))
	.then((data) => {
		// console.log(data)
		const [a, b] = data
		// const [c, d] = b
		// console.log(a)
		console.dir(b, { depth: null })
		// console.log(d)
	})
	.catch((err) => console.log(err))

// mdLinks(process.argv[2], process.argv.slice(3))
// 	.then((data) => {
// 		console.log(data)
// 	})
// 	.catch((err) => console.log(err))
