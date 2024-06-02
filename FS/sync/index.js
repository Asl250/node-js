import * as fs from "fs"

//Papka yaratish or Folder yaratish
// fs.mkdirSync('c:\\nodejs\\hello', {recursive: true})


//Papka ichidagi fileni oqish
// try {
//     const files = await fs.readdirSync('c:\\nodejs')
//     for (const file of files) {
//         console.log(file)
//     }
// }
// catch (error) {
//     console.log(error)
// }


//Papka ochirish or Remove Folder
// try {
//     await fs.rmdirSync('c:\\nodejs\\home');
//     console.log("nodejs papka ochirildi")
// }
// catch (error) {
//     console.log(error)
// }


//File yaratish va ichiga yozish
// try {
//     await fs.writeFileSync('c:\\nodejs\\hello.txt', 'Hello World')
//     console.log("File yaratildi")
// }
// catch (error) {
//     console.log(error)
// }


//File ichidagi datani oqish
// try {
//     const data = await fs.readFileSync('c:\\nodejs\\hello.txt', 'utf8')
//     console.log(data)
// }
// catch (error) {
//     console.log(error)
// }


//File ichiga data qoshish
// try {
//     await fs.appendFileSync('c:\\nodejs\\hello.txt', 'Hello Shuxa.de Baburello ASK250 va Blaze')
//     console.log("File ichiga data qoshildi")
// }
// catch (error) {
//     console.log(error)
// }


//Nusxa olish or Copy file
// try {
//     await fs.copyFileSync('c:\\nodejs\\hello.txt', 'c:\\nodejs\\copiedHello.txt')
//     console.log("File nusxa olindi")
// }
// catch (error) {
//     console.log(error)
// }


//Malumot olish or Get information about file
// try {
// 	const stats = await fs.stat('c:\\nodejs\\hello.txt')
// 	// console.log(stats)
// 	console.log(stats.isFile())
// 	console.log(stats.isDirectory())
// }
//
// catch (error) {
// 	console.log(error)
// }
