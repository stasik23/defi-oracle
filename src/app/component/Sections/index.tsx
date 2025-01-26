import { SideBarListProps } from '@/types/menuTypes';
import { Box, Typography } from '@mui/material'
import React, { useState } from 'react'

export const Sections: React.FC<SideBarListProps> = ({ activeItem, toggleDrawerAction }) => {
    const [currentActiveItem, setCurrentActiveItem] = useState(activeItem);
    return (
        <div>
            {currentActiveItem === "Wallet" && (
                <Box className="p-4 bg-gray-900 rounded-lg mt-6 mx-4">
                    <Typography variant="h6" className="text-white font-semibold">
                        Wallet
                    </Typography>
                    <Typography className="mt-2 text-sm">
                        Total value: <span className="text-green-400 font-bold">$13,864.11</span>
                    </Typography>
                    <Typography className="text-sm">
                        Unique coins: <span className="text-white">7</span>
                    </Typography>
                    <Typography className="text-sm">
                        24h: <span className="text-red-500">▼ 0.8%</span>
                    </Typography>
                    <Typography className="text-sm">
                        7d: <span className="text-green-400">▲ 4.2%</span>
                    </Typography>
                    <Box className="mt-4">
                        <Typography className="text-sm">Best/Worst 7d:</Typography>
                        <Typography className="text-sm text-green-400 font-bold">LAVA ▲ 12.21%</Typography>
                        <Typography className="text-sm text-red-500 font-bold">SHTC ▼ 42.12%</Typography>
                    </Box>
                </Box>
            )}
        </div>

    )
}
