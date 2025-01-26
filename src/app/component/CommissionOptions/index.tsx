import { Box, Button, Card, Typography } from '@mui/material'
import React from 'react'

export const CommissionOptions = () => {
    return (
        <Card className="bg-gray-800 p-6 rounded-2xl shadow-lg col-span-2">
            <Typography variant="h6" className="text-gray-400 mb-4">
                Commission
            </Typography>
            <Box className="grid grid-cols-4 gap-4">
                {[0.01, 0.05, 0.3, 1].map((val, index) => (
                    <Button
                        key={index}
                        variant="contained"
                        className={
                            val === 0.05
                                ? "bg-emerald-500 hover:bg-emerald-400 text-gray-100 rounded-lg"
                                : "bg-gray-700 hover:bg-gray-600 text-gray-100 rounded-lg"
                        }
                    >
                        {val}%
                    </Button>
                ))}
            </Box>
        </Card>
    )
}
