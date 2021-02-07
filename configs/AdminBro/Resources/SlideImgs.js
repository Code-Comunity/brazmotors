const AdminBro = require("admin-bro");
var fs = require('fs');
const flat = require('flat');


const uploadImageHandler = async (request) => {	
  
  function base64_encode(file) {
    // read binary data
    console.log(file.path)
    var bitmap = fs.readFileSync(file.path);
    // convert binary data to base64 encoded string
    return new Buffer(bitmap).toString('base64');
  }

  const { payload } = request;
  const recordData = flat.unflatten(payload);
 console.log(recordData);
  var base64str = base64_encode(recordData.imagem);

	
	request.payload.nome = recordData.imagem.name
  request.payload.imagem = await base64str

  return request
};

function testeShow(request) {
  console.log(request);
  return request
}

function ListAfter(request){
  
  function base64_decode(base64str, file) {
  
    var bitmap = Buffer.from(base64str, 'base64');
    
    fs.writeFileSync(file, bitmap);
   
  }

  const recordData = flat.unflatten(request.records);
 
  recordData.map((file64)=>{
    base64_decode(file64.params.imagem,`tmp/${file64.params.nome}`)
  })


  
  return request
}


module.exports = {
  options: {
    actions:{
      new:{
        before: uploadImageHandler,
      },
      
      list:{
        after: ListAfter
      },
      edit:{
        before: uploadImageHandler
      }
    },
    properties: {
      nome:{
        isVisible: false
      },
      imagem:{
        components: {
          edit: AdminBro.bundle('./SlideImgComponent/UploadFiles.tsx'),
          show: AdminBro.bundle('./SlideImgComponent/UploadFilesShow.tsx'),
          new: AdminBro.bundle('./SlideImgComponent/UploadFiles.tsx'),
          list: AdminBro.bundle('./SlideImgComponent/UploadFilesList.tsx'),
        }
      } 
      
      },
    },
  }
