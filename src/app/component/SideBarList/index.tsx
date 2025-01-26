// 'use client';
// import React, { useState } from 'react';
// import { FaWallet, FaCube, FaChartPie, FaBox, FaNetworkWired } from "react-icons/fa";
// import { MenuItem, SideBarListProps } from '@/types/menuTypes'; // Імпортуємо типи
// import ArrowBackIcon from '@mui/icons-material/ArrowBack'; // Імпортуємо іконку

// // Масив елементів меню
// const menuItems: MenuItem[] = [
//   { name: "Summary", icon: <FaChartPie /> },
//   { name: "Wallet", icon: <FaWallet /> },
//   { name: "NFTs", icon: <FaBox /> },
//   { name: "NaaS/DaaS", icon: <FaNetworkWired /> },
//   { name: "Nodes", icon: <FaCube /> },
//   { name: "Lending/Loans", icon: <FaWallet /> },
// ];

// // Компонент для відображення списку бічної панелі
// export const SideBarList = ({ activeItem, toggleDrawerAction }: SideBarListProps) => {
//   const [currentActiveItem, setCurrentActiveItem] = useState<string>(activeItem);

//   const handleItemClick = (itemName: string) => {
//     setCurrentActiveItem(itemName);
//     // toggleDrawerAction(); // Видалено, так як не потрібно закривати Drawer для інших кнопок
//   };

//   return (
//     <div className="h-screen bg-black text-gray-400 w-full">
//       <div className="flex items-center justify-between p-4">
//         <div className="flex items-center gap-6">
//           <img src='/images/logo.png' alt="logo" className="w-25px" />
//           <h2 className='font-inter text-xl font-bold text-white'>DeFi Oracle</h2>
//           <p className="font-inter font-semibold text-gray-600">Your one stop crypto hub</p>
//         </div>
//       </div>

//       {/* Кнопка для закриття бічної панелі */}
//       <div className="flex justify-end px-4 py-2">
//         <ArrowBackIcon
//           onClick={toggleDrawerAction} // При натисканні закриваємо Drawer
//           sx={{ color: 'white', cursor: 'pointer' }}
//         />
//       </div>

//       <ul className="space-y-2">
//         {menuItems.map((item) => (
//           <li
//             key={item.name}
//             onClick={() => handleItemClick(item.name)}
//             className={`flex items-center font-inter font-semibold gap-4 px-4 py-2 rounded-md cursor-pointer 
//               ${currentActiveItem === item.name ? "bg-gray-800 text-white" : "hover:border hover:border-blue-400"}`}
//           >
//             <span className="text-xl">{item.icon}</span>
//             <span>{item.name}</span>
//           </li>
//         ))}
//       </ul>

//       {currentActiveItem === "Wallet" && (
//         <div className="bg-gray-900 mt-6 p-4 rounded-lg">
//           <div className="text-white font-semibold text-lg font-inter">Wallet</div>
//           <div className="text-sm font-semibold mt-2">
//             <p className="font-inter">Total value: <span className="text-green-400">$13,864.11</span></p>
//             <p>Unique coins: <span className="text-white">7</span></p>
//             <p>24h: <span className="text-red-500">▼ 0.8%</span></p>
//             <p>7d: <span className="text-green-400">▲ 4.2%</span></p>
//             <div className="mt-4">
//               <p>Best/Worst 7d:</p>
//               <p>
//                 <span className="text-green-400 font-inter font-semibold">LAVA ▲ 12.21%</span>
//               </p>
//               <p>
//                 <span className="text-red-500 font-inter font-semibold">SHTC ▼ 42.12%</span>
//               </p>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };
'use client';
import React, { useState } from 'react';
import { FaWallet, FaCube, FaChartPie, FaBox, FaNetworkWired } from "react-icons/fa";
import { Box, Card, Typography, Button } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { SideBarListProps } from '@/types/menuTypes';
import { Sections } from '../Sections';

const menuItems = [
  { name: "Summary", icon: <FaChartPie /> },
  { name: "Wallet", icon: <FaWallet /> },
  { name: "NFTs", icon: <FaBox /> },
  { name: "NaaS/DaaS", icon: <FaNetworkWired /> },
  { name: "Nodes", icon: <FaCube /> },
  { name: "Lending/Loans", icon: <FaWallet /> },
];

const SideBarList: React.FC<SideBarListProps> = ({ activeItem, toggleDrawerAction }) => {
  const [currentActiveItem, setCurrentActiveItem] = useState(activeItem);

  const handleItemClick = (itemName: string) => {
    setCurrentActiveItem(itemName);
  };

  return (
    <Box className="flex min-h-screen bg-gray-950 text-gray-200">
      {/* Sidebar */}
      <Box className="w-72 bg-black text-gray-400 flex flex-col">
        {/* Logo Section */}
        <Box className="flex items-center gap-3 p-4 border-b border-gray-800">
          <img src="/images/logo.png" alt="logo" className="w-8 h-8" />
          <div>
            <Typography variant="h6" className="text-white font-bold">
              DeFi Oracle
            </Typography>
            <Typography variant="body2" className="text-gray-600">
              Your one stop crypto hub
            </Typography>
          </div>
        </Box>

        {/* Menu Items */}
        <ul className="space-y-1 mt-4">
          {menuItems.map((item) => (
            <li
              key={item.name}
              onClick={() => handleItemClick(item.name)}
              className={`flex items-center gap-3 p-3 cursor-pointer rounded-md transition-all 
                ${currentActiveItem === item.name ? "bg-gray-800 text-white" : "hover:bg-gray-700"}`}
            >
              <span className="text-xl">{item.icon}</span>
              <Typography>{item.name}</Typography>
            </li>
          ))}
        </ul>

        {/* Wallet Section */}
        <Sections activeItem={currentActiveItem} toggleDrawerAction={toggleDrawerAction} />
      </Box>

      {/* Main Content */}
      <Box className="flex-1 p-8">
        <ArrowBackIcon
          onClick={toggleDrawerAction}
          sx={{ color: "white", cursor: "pointer" }}
        />
      </Box>
    </Box>
  );
};

export default SideBarList;
