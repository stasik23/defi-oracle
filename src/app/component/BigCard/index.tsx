'use client'
import { HiArrowUpRight } from "react-icons/hi2";
import { HiArrowDownRight } from "react-icons/hi2";
import { BsArrowLeftRight } from "react-icons/bs";
import { BsFillLightningFill } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa";
import { RiRobot2Fill } from "react-icons/ri";
import LineChartComponent from "@/app/component/LineChart";
import { Card, CardContent, CardActions, Typography, IconButton, Box } from "@mui/material";

export const BigCard = () => {
    return (
        <Card className={`flex flex-row justify-between`} sx={{ width: 700, height: 260,borderRadius:4, backgroundColor: '#1D1D1E', padding: 1 }}>
            <CardContent className={`text-white`}>
                <Box display="flex" flexDirection="column" gap={2}>
                    <Box display="flex" flexDirection="row" alignItems="center" gap={2}>
                        <img
                            className="w-[20px] h-[20px]"
                            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F008%2F505%2F801%2Foriginal%2Fbitcoin-logo-color-illustration-png.png&f=1&nofb=1&ipt=166a4f6eaffebf938b4f912db22c1becbe421c7ee288d83ca9ba73191a6571f3&ipo=images"
                            alt="CoinName"
                        />
                        <Typography className={`font-bold`} variant="body1" fontWeight="bold" sx={{ textDecoration: 'underline' }}>
                            CoinName (COI)
                        </Typography>
                    </Box>
                    <Box display="flex" flexDirection="row" alignItems="center" gap={2}>
                        <Typography sx={{fontSize: '20px', fontWeight:"bold",}} variant="body1">$ 14.88</Typography>
                        <Box display="flex" flexDirection="row" alignItems="center" gap={1} color="#2CDD9D">
                            <HiArrowUpRight />
                            <Typography variant="body2">5.2%</Typography>
                        </Box>
                    </Box>
                </Box>

                <Box display="flex" flexDirection="row" alignItems="center" gap={2}>
                    <Box display="flex" flexDirection="column" gap={1}>
                        <IconButton sx={{ border: '1px solid', borderRadius: '8px', padding: 1,color:'#838487',  fontSize: '12px' }}>
                            <BsArrowLeftRight />
                        </IconButton>
                        <IconButton sx={{ border: '1px solid', borderRadius: '8px', padding: 1, color: '#2CDD9D', fontSize: '12px' }}>
                            <BsFillLightningFill />
                        </IconButton>
                        <IconButton sx={{ border: '1px solid', borderRadius: '8px', padding: 1, color: '#2CDD9D', fontSize: '12px' }}>
                            <FaRegBell />
                        </IconButton>
                        <IconButton sx={{ border: '1px solid', borderRadius: '8px', padding: 1, color: '#FF4D8D', fontSize: '12px' }}>
                            <RiRobot2Fill />
                        </IconButton>
                    </Box>

                    <Box display="flex" flexDirection="column"  gap={2}>
                        <Box className={`flex items-center`} sx={{ width: 250, height: 110,}}>
                            <LineChartComponent />
                        </Box>
                    </Box>

                </Box>
            </CardContent>

            <CardContent sx={{ color: 'white' }}>
                <Box display="flex" flexDirection="column" mb={2}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                        Balance: COI 10.00
                    </Typography>
                    <Typography variant="body1">
                        $ 278.20 / BTC 0.0087 / ETH 0.15
                    </Typography>
                </Box>

                <Box display="flex" flexDirection="column" gap={1}>
                    <Box display="flex" flexDirection="row" gap={`3px`} sx={{ fontSize: '10px' }}>
                        <Typography>Chain info:</Typography>
                        <Typography color={`#838487`}>Assets</Typography>
                        <Typography>$13,864.11</Typography>
                        <Typography color={`#838487`}>Unique coins</Typography>
                        <Typography>7</Typography>
                    </Box>
                    <Typography sx={{ color: '#838487', fontSize: '14px' }}>
                        Best/Worst 7d
                    </Typography>
                    <Box display="flex" flexDirection="row" gap={2}>
                        <img
                            className="w-[20px] h-[20px]"
                            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F008%2F505%2F801%2Foriginal%2Fbitcoin-logo-color-illustration-png.png&f=1&nofb=1&ipt=166a4f6eaffebf938b4f912db22c1becbe421c7ee288d83ca9ba73191a6571f3&ipo=images"
                            alt="CoinName"
                        />
                        <Box display="flex" flexDirection="row" alignItems="center" gap={1} color="#2CDD9D">
                            <HiArrowUpRight style={{ fontSize: '24px' }} />
                            <Typography variant="body2">5.2%</Typography>
                        </Box>
                    </Box>
                    <Box display="flex" flexDirection="row" gap={2}>
                        <img
                            className="w-[20px] h-[20px]"
                            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F008%2F505%2F801%2Foriginal%2Fbitcoin-logo-color-illustration-png.png&f=1&nofb=1&ipt=166a4f6eaffebf938b4f912db22c1becbe421c7ee288d83ca9ba73191a6571f3&ipo=images"
                            alt="CoinName"
                        />
                        <Box display="flex" flexDirection="row" alignItems="center" gap={1} color="#FF4D8D">
                            <HiArrowDownRight style={{ fontSize: '24px' }} />
                            <Typography variant="body2">5.2%</Typography>
                        </Box>
                    </Box>
                </Box>
            </CardContent>

        </Card>
    );
}
