// types.ts
import { ReactNode } from "react";

// Інтерфейс для елементів меню
export interface MenuItem {
    name: string; // Назва елемента меню
    icon: ReactNode; // Іконка елемента меню
  }

// Інтерфейс для пропсів компонента Sidebar
export interface SidebarProps {
  children?: React.ReactNode;
}

// Інтерфейс для пропсів компонента SideBarList
export interface SideBarListProps {
    activeItem: string; // Назва активного елемента меню
    toggleDrawerAction: () => void; // Функція для перемикання стану Drawer
  }