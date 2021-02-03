import React, { useEffect, useState } from 'react';
import { Label, Box, DropZone, DropZoneProps } from '@admin-bro/design-system'
import { BasePropertyProps } from 'admin-bro';

const UploadFiles: React.FC<BasePropertyProps> = (props) => {

  const [file, setFile] = useState<any>()
  console.log(file)

  const { property, onChange } = props

  // const HandleSendPhoto:any = () => {
  //   Firebase
  //     .storage() //Aqui eu tentei criar um input html normal do 0, com um form e um botão de submit
  //       .ref('gs://treino-6249d.appspot.com/') // e ele continuava dando erro na tipagem <BaseProperty>
  //         .put(file)                           // Então descobri que o conflito tava na instancia do firebase :(
  //           .then(()=>{
  //             console.log("Sucesso!")
  //           })
  //           .catch(()=>{
  //             console.log("Não foi possivel!!")
  //   })
  // }


  const HandleDropzoneChange: DropZoneProps['onChange'] = (files) => {
    onChange(property.name, files[0])

    //   Firebase <- Tentativa de usar o firebase, sem o firebase ativado o componente renderiza normal
    //   .storage() //Porem se você descomentar os metodos do firebase, vai perceber que ele dá problema nas props
    //   .ref('gs://treino-6249d.appspot.com/') // Inseridas ali em cima, (são necessarias para o dropzone funcionar)
    //   .put(files[0])
    //     .then(()=>{
    //       console.log("Sucesso!")
    //     })
    //     .catch(()=>{
    //       console.log("Não foi possivel!!")
    //     })

  }

  return (
    <Box>
      <Label>{property.label}</Label>
      <DropZone onChange={HandleDropzoneChange} />
    </Box>
    // <>
    //   <form onSubmit={HandleSendPhoto}>
    //     <input type="file" name="foto" id="foto" onChange={(e) => setFile(e.target.files[0])} />
    //     <button type="submit">Enviar</button>
    //   </form>
    // </>
  )
}

export default UploadFiles