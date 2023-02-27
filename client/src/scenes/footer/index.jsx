import { Box, Typography,  useTheme } from '@mui/material'
import FlexBetween from 'components/FlexBetween'
import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
    

    const theme = useTheme();
    const alt = theme.palette.background.alt;
    const shadow = '0 0 2px 4px #eee';
  return (
    <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        backgroundColor={alt}
        width="100%"
        height="12vh"
        padding="2em"
        boxShadow={shadow}
        >
        
        <FlexBetween>
            <Typography
                color={"alt"}>
                <Link 
                    style={{textDecoration: 'none', color: '#00cdcd'}}
                    >Aghiles AHMED ZAID</Link> © 2023
            </Typography>
        </FlexBetween>
    </Box>
  )
}

export default Footer