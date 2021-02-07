import React, { useState } from 'react'
import { DropZone, Label, Box , DropZoneProps} from '@admin-bro/design-system'




const UploadPhoto = (props) => {
  const { property, record, onChange } = props

  const onUpload: DropZoneProps['onChange'] = (files) => {
    
    const newRecord = {...record, }
    
    onChange(property.name,files[0])

    event.preventDefault()
  }

  return (
    <Box>
      <Label>{property.label}</Label>
      <DropZone onChange={onUpload}/>
      
    </Box>
  )
}

export default UploadPhoto