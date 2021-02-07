import React, { useState } from 'react'
import { Box } from '@admin-bro/design-system'


const UploadPhoto = (props) => {
  const { record } = props
  const img = record.params['nome']
  console.log(img);


  return (
    <Box>
      {
        img ? (<img src={`../../../../tmp/${img}`} width="100px" />): 'Nenhuma Imagem'
      }
    </Box>
  )
}

export default UploadPhoto