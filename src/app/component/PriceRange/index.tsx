import { Box, Button, Card, Typography } from '@mui/material'
import React from 'react'

export const PriceRange = () => {
    return (
        <Card className="bg-gray-800 p-6 rounded-2xl shadow-lg">
            <Typography variant="h6" className="text-gray-400 mb-4">
                Price Range
            </Typography>
            <Box className="flex flex-col gap-4">
                <Typography variant="body1" className="text-gray-200">
                    Low price: 1644.2381
                </Typography>
                <Typography variant="body1" className="text-gray-200">
                    High price: 1654.1327
                </Typography>
                <Button
                    variant="contained"
                    className="bg-blue-500 hover:bg-blue-400 text-gray-100 rounded-xl"
                >
                    Add Liquidity
                </Button>
            </Box>
        </Card>
    )
}
