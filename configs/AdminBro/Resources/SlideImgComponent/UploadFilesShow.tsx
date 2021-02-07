import React, { useState } from 'react'
import { Box } from '@admin-bro/design-system'




const UploadPhoto = (props) => {
  const { record } = props
  const img = record.params['nome']
  console.log(img);
  
  
    // create buffer object from base64 encoded string, it is important to tell the constructor that the string is base64 encoded
  
   // write buffer to file
  
   
    

  return (
    <Box>
      {
        img ? (<img src={`../../../../tmp/${img}`} height="300px" width="400px"/>): 'Nenhuma Imagem'
      }
    </Box>
  )
}

export default UploadPhoto