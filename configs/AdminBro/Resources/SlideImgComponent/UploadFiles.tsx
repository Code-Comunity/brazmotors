import React, { useState } from 'react'
import { DropZone, Label, Box , DropZoneProps} from '@admin-bro/design-system'




const UploadPhoto = (props) => {
  const { property, record, onChange } = props

  const onUpload: DropZoneProps['onChange'] = (files) => {
    
    const newRecord = {...record, }
    
    onChange(property.name,files[0])



    props.preventDefault()
  }

  return (
    <Box>
      <Label style={{display: 'none'}} >{property.label}</Label>
      <DropZone style={{display: 'none'}} onChange={onUpload}/>
      
      <div style={{ width: "100%", height: "100%", position: "absolute"}}>
        <iframe src="https://teste-brazmotors.herokuapp.com/public" style={{ width: "100%", height: 500 }} ></iframe>
      </div>

    </Box>
  )
}

export default UploadPhoto
