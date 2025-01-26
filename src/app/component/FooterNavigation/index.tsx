import { Box, Button, Typography } from '@mui/material'
import React from 'react'

export const FooterNavigation = () => {
    return (
        <Box className="mt-8 flex justify-between items-center">
            <Typography variant="body1" className="text-gray-400">
                4/16 Farm Pools
            </Typography>
            <Button variant="contained" className="bg-blue-500 hover:bg-blue-400 text-white rounded-lg">
                + Add Pool
            </Button>
        </Box>
    )
}
