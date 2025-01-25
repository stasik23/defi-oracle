'use client';
import LineChartComponent from "@/app/component/LineChart";
import { HiArrowUpRight } from "react-icons/hi2";
import { Card, CardContent, IconButton, Typography, Box } from "@mui/material";
import { BsArrowLeftRight, BsFillLightningFill } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa";
import { RiRobot2Fill } from "react-icons/ri";

export const SmallCard = () => {
    return (
        <Card
            className="flex flex-row"
            sx={{
                width: 350,
                height: 200,
                borderRadius: 4,
                backgroundColor: "#1D1D1E",
                color: "white",
                padding: 2,

                boxSizing: "border-box",
                overflow: "hidden",
            }}
        >
            <CardContent
                sx={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: 1,
                    gap: 1,
                }}
            >
                <Box display="flex" flexDirection={`column`}  gap={1}>
                    <Box display="flex" flexDirection={`row`} gap="8px">
                        <img
                            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F008%2F505%2F801%2Foriginal%2Fbitcoin-logo-color-illustration-png.png&f=1&nofb=1&ipt=166a4f6eaffebf938b4f912db22c1becbe421c7ee288d83ca9ba73191a6571f3&ipo=images"
                            alt="CoinName"
                            style={{
                                width: "16px",
                                height: "16px",
                                objectFit: "contain",
                            }}
                        />
                        <Typography
                            variant="body1"
                            fontWeight="bold"
                            sx={{
                                textDecoration: "underline",
                                fontSize: "12px",
                            }}
                        >
                            COI
                        </Typography>
                    </Box>
                    <Box display="flex" alignItems="center" gap='2px'>
                        <Typography sx={{ fontSize: "16px", fontWeight:'bold'}}>$ 1.5861</Typography>
                        <Box display="flex" alignItems="center" sx={{ color: "#2CDD9D" }}>
                            <HiArrowUpRight size={14} />
                            <Typography sx={{ fontSize: "14px" }}>20%</Typography>
                        </Box>
                    </Box>
                </Box>



                <Box>
                    <Typography sx={{ fontSize: "12px", color: "#B3B3B3" }}>
                        Balance
                    </Typography>
                    <Typography sx={{ fontSize: "12px" }}>COI 10.00</Typography>
                    <Typography sx={{ fontSize: "12px", color: "#838487" }}>
                        $ 278.20 BTC 0.0087 / ETH 0.15
                    </Typography>
                </Box>
            </CardContent>

            <CardContent
                sx={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: 1,
                }}
            >
                <Box display="flex" justifyContent="center" gap={'7px'}>
                    <IconButton
                        sx={{
                            border: "1px solid #838487",
                            borderRadius: "6px",
                            padding: "4px",
                            color: "#838487",
                            width: "30px",
                            height: "30px",
                        }}
                    >
                        <BsArrowLeftRight size={10} />
                    </IconButton>
                    <IconButton
                        sx={{
                            border: "1px solid #2CDD9D ",
                            borderRadius: "8px",
                            padding: "6px",
                            color: "#2CDD9D",
                            width: "30px",
                            height: "30px",
                        }}
                    >
                        <BsFillLightningFill size={10} />
                    </IconButton>
                    <IconButton
                        sx={{
                            border: "1px solid #2CDD9D",
                            borderRadius: "6px",
                            padding: "4px",
                            color: "#2CDD9D",
                            width: "30px",
                            height: "30px",
                        }}
                    >
                        <FaRegBell size={10} />
                    </IconButton>
                    <IconButton
                        sx={{
                            border: "1px solid #FF4D8D",
                            borderRadius: "6px",
                            padding: "4px",
                            color: "#FF4D8D",
                            width: "30px",
                            height: "30px",
                        }}
                    >
                        <RiRobot2Fill size={10} />
                    </IconButton>
                </Box>
                <Box display="flex" flexDirection="column" gap="2px">
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "140px",
                            marginTop: "8px",
                        }}
                    >
                        <LineChartComponent />
                    </Box>
                </Box>



            </CardContent>
        </Card>
    );
};
