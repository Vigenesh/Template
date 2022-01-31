import { Button } from '@mui/material'
import React from 'react'

const DemoButton = (props:any) => {
    const {color, variant} = props
    return (
        <div>
            <Button color={color} variant={variant}> Button </Button>
            
        </div>
    )
}

export default DemoButton
