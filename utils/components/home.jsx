import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Box,theme } from '@admin-bro/design-system'


const Dashboard = (props) => {
  return (
    <ThemeProvider theme={theme}>
    <Box>
        <div style={{display: 'flex',marginTop: '70px',justifyContent: 'center'}}>
            <div style={{display: 'flex'}}>
                <img src="../../images/Union1.png" alt=""/>
            </div>  
        </div>
    </Box>
    </ThemeProvider>

  )
}

export default Dashboard