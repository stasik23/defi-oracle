'use client';
import { useEffect, useState } from "react";
import LineChartComponent from "@/app/component/LineChart";
import { HiArrowUpRight } from "react-icons/hi2";
import { Card, CardContent, IconButton, Typography, Box, Button } from "@mui/material";
import { BsArrowLeftRight, BsFillLightningFill } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa";
import { RiRobot2Fill } from "react-icons/ri";

export const SmallCard = () => {
    const [cryptos, setCryptos] = useState([]);
    const [page, setPage] = useState(1);
    const itemsPerPage = 16;

    useEffect(() => {
        fetch("http://localhost:3001/crypto-api/get-crypto")
            .then(response => response.json())
            .then(data => setCryptos(data))
            .catch(error => console.error("Error fetching crypto data:", error));
    }, []);

    if (cryptos.length === 0) {
        return <Typography>Loading...</Typography>;
    }

    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedCryptos = cryptos.slice(startIndex, endIndex);

    return (
        <div>
        <div className={`grid grid-cols-4 gap-6`}>
            {paginatedCryptos.map((crypto) => (
                <Card
                    key={crypto.id}
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
                        marginBottom: 2,
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
                        <Box display="flex" flexDirection="column" gap={1}>
                            <Box display="flex" flexDirection="row" gap="8px">
                                <img
                                    src={crypto.image}
                                    alt={crypto.name}
                                    style={{ width: "16px", height: "16px", objectFit: "contain" }}
                                />
                                <Typography
                                    variant="body1"
                                    fontWeight="bold"
                                    sx={{ textDecoration: "underline", fontSize: "12px" }}
                                >
                                    {crypto.name.toUpperCase()}
                                </Typography>
                            </Box>
                            <Box display="flex" alignItems="center" gap="2px">
                                <Typography sx={{ fontSize: "16px", fontWeight: "bold" }}>
                                    $ {crypto.usd}
                                </Typography>
                                <Box display="flex" alignItems="center" sx={{ color: "#2CDD9D" }}>
                                    <HiArrowUpRight size={14} />
                                    <Typography sx={{ fontSize: "14px" }}>N/A%</Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box>
                            <Typography sx={{ fontSize: "12px", color: "#B3B3B3" }}>Balance</Typography>
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
                            <IconButton sx={{ border: "1px solid #838487", borderRadius: "6px", padding: "4px", color: "#838487", width: "30px", height: "30px" }}>
                                <BsArrowLeftRight size={10} />
                            </IconButton>
                            <IconButton sx={{ border: "1px solid #2CDD9D", borderRadius: "8px", padding: "6px", color: "#2CDD9D", width: "30px", height: "30px" }}>
                                <BsFillLightningFill size={10} />
                            </IconButton>
                            <IconButton sx={{ border: "1px solid #2CDD9D", borderRadius: "6px", padding: "4px", color: "#2CDD9D", width: "30px", height: "30px" }}>
                                <FaRegBell size={10} />
                            </IconButton>
                            <IconButton sx={{ border: "1px solid #FF4D8D", borderRadius: "6px", padding: "4px", color: "#FF4D8D", width: "30px", height: "30px" }}>
                                <RiRobot2Fill size={10} />
                            </IconButton>
                        </Box>
                        <Box display="flex" flexDirection="column" gap="2px">
                            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", width: "140px", marginTop: "8px" }}>
                                <LineChartComponent />
                            </Box>
                        </Box>
                    </CardContent>
                </Card>
            ))}
        </div>
        <div>
            <Box display="flex" justifyContent="center" gap={2} mt={2}>
                <Button
                    variant="contained"
                    sx={{ backgroundColor: "#1D1D1E" }}
                    disabled={page === 1}
                    onClick={() => setPage(page - 1)}
                >
                    Назад
                </Button>
                <Button
                    variant="contained"
                    sx={{ backgroundColor: "#1D1D1E" }}
                    disabled={endIndex >= cryptos.length}
                    onClick={() => setPage(page + 1)}
                >
                    Вперед
                </Button>
            </Box>
        </div>
    </div>
    );
};
