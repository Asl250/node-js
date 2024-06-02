import * as fs from "fs"

//Papka yaratish or Folder yaratish
// fs.mkdirSync('c:\\nodejs\\hello', {recursive: true})


//Papka ichidagi fileni oqish
// fs.readdirSync('c:\\nodejs\\hello').forEach(file => {
// 	console.log(file)
// })


//Papka ochirish or Remove Folder
fs.rmdirSync('c:\\nodejs\\hello').forEach((file, err) => {
	if (!err) {
		console.log("nodejs papka ochirildi")
	} else {
		console.log(err)
	}
})
