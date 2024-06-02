import * as fs from "fs"

// fs.mkdir('c:\\nodejs',(err)=>{
// 	if(err) throw err
// 	console.log("nodejs papka yaratildi")
// })


//Papka ichidagi fileni oqish
// fs.readdir('c:\\nodejs', (err, files) => {
// 	for (const file of files) {
// 		console.log(file)
//      }
// 	if (err) {
// 		console.log(err)
// 	}
// })


//Papka ochirish or Remove Folder
// fs.rmdir('c:\\nodejs\\home', (err) => {
// 	if (!err) {
// 		console.log("nodejs papka ochirildi")
// 	}else {
// 		console.log(err)
//
// 	}
// })


//File yaratish va ichiga yozish
// fs.writeFile('c:\\nodejs\\hello.txt', 'Hello NodeJS', (err) => {
// 	if (!err) {
// 		console.log("File yaratildi")
// 	} else {
// 		console.log(err)
// 	}
// })


//File ichidagi datani oqish

// fs.readFile('c:\\nodejs\\hello.txt', (err, data) => {
// 	if (!err) {
// 		console.log(data.toString())
// 	} else {
// 		console.log(err)
// 	}
// })


//File ichiga data qoshish

// fs.appendFile('c:\\nodejs\\hello.txt', 'ASK250 and boburello', (err) => {
// 	if (!err) {
// 		console.log("File ichiga data qoshildi")
// 	} else {
// 		console.log(err)
// 	}
// })


//Nusxa olish or Copy file
// fs.copyFile('c:\\nodejs\\hello.txt', 'c:\\nodejs\\copiedHello.txt', (err) => {
// 	if (!err) {
// 		console.log("Nusxa olingan file")
// 	} else {
// 		console.log(err)
// 	}
// })


//Malumot olish or Get information about file
// fs.stat('c:\\nodejs\\hello.txt', (err, stats) => {
// 	if (!err) {
// 		console.log(stats.isFile())
// 		console.log(stats.isDirectory())
// 	} else {
// 		console.log(err)
// 	}
// })
