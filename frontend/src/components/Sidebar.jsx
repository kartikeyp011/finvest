import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, Package2, Package, Activity, Settings, PanelLeft, Maximize2, Minimize2, CircleChevronRight, CircleChevronLeft } from 'lucide-react';
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from './ui/button';
import { motion } from "framer-motion";
import Tooltip from './Tooltip';

const Sidebar = () => {
  const [hovered, setHovered] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  

  return (
    <>
      {/* Mobile Sidebar using Sheet */}
      <Sheet className="sm:hidden">
        <SheetTrigger asChild>
          <Button size="icon" variant="outline" className="sm:hidden border-0 ">
            <PanelLeft className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="sm:max-w-xs w-[300px]">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              to="/"
              className="group flex items-center gap-2 rounded-full bg-[#05140D] text-lg font-semibold text-primary-foreground py-2 px-4 md:py-3 md:px-6 max-w-[150px]"
            >
              <img
                className="md:h-8 md:w-8 h-7 w-7 rounded-full"
                src="https://res.cloudinary.com/djoebsejh/image/upload/v1721187808/srktgdcijec0zqmlgvbh.png"
                alt="Logo"
              />
              <span className="text-white">Finvest</span>
            </Link>

            <Link
              to="/"
              className="flex items-center gap-2 rounded-lg text-muted-foreground transition-colors hover:text-foreground py-2 px-4 md:py-3 md:px-6"
            >
              <Home className="h-5 w-5" />
              <span>Home</span>
            </Link>

            <Link
              to="/dashboard"
              className="flex items-center gap-2 rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground py-2 px-4 md:py-3 md:px-6"
            >
              <Package2 className="h-5 w-5" />
              <span>Dashboard</span>
            </Link>

            <Link
              to="/services"
              className="flex items-center gap-2 rounded-lg text-muted-foreground transition-colors hover:text-foreground py-2 px-4 md:py-3 md:px-6"
            >
              <Package className="h-5 w-5" />
              <span>Services</span>
            </Link>

            <Link
              to="#"
              className="flex items-center gap-2 rounded-lg text-muted-foreground transition-colors hover:text-foreground py-2 px-4 md:py-3 md:px-6"
            >
              <Activity className="h-5 w-5" />
              <span>Features</span>
            </Link>

            <Link
              to="#"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground py-2 px-4 md:py-3 md:px-6"
            >
              <Settings className="h-5 w-5" />
              <span>Settings</span>
            </Link>
          </nav>
        </SheetContent>
      </Sheet>

      {/* Desktop Sidebar */}
      <aside className={`fixed hidden sm:flex inset-y-0 left-0 z-[999] flex-col bg-background border-r ${isExpanded ? 'w-[200px]' : 'w-14'} transition-all duration-700 ease-out`}>
      <div className="flex items-center justify-start px-2 min-h-[100px] z-[999] bg-white">
        <Link
          to="/"
          className={`group flex items-center justify-center py-1 rounded-full bg-[#05140D] text-lg font-semibold text-primary-foreground md:text-base ${isExpanded ? 'md:p-2 p-1 ' : 'h-9 w-9 md:h-10 md:w-10 '}`}
        >
          <img
            className="md:h-7 md:w-7 h-6 w-6 rounded-full"
            src="https://res.cloudinary.com/djoebsejh/image/upload/v1721187808/srktgdcijec0zqmlgvbh.png"
            alt="Logo"
          />
          {isExpanded && <motion.span initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="text-white text-lg pr-2">Finvest</motion.span>}
        </Link>
        <Button
          size="icon"
          variant="outline"
          onClick={toggleExpand}
          className={`border-0 bg-transparent hover:bg-transparent transition-transform duration-700 ease-out mt-16 ${isExpanded ? 'absolute translate-x-[173px]' : 'absolute translate-x-[28px]'}`}
        >
          {isExpanded ? (
            <CircleChevronLeft className="h-5 w-5 bg-white transition-transform duration-700 ease-out" />
          ) : (
            <CircleChevronRight className="h-5 w-5 bg-white transition-transform duration-700 ease-out" />
          )}
        </Button>
      </div>

      <nav className="flex flex-col items-start justify-start gap-4 px-2">
        <Link
          to="/"
          className={`relative flex items-center gap-2 rounded-lg transition-colors hover:text-foreground ${isExpanded ? 'justify-start py-2 px-4 w-full' : 'justify-center h-9 w-9'}`}
          onMouseEnter={() => setHovered('Home')}
          onMouseLeave={() => setHovered(null)}
        >
          <Home className="h-5 w-5" />
          {hovered === 'Home' && !isExpanded && <Tooltip text="Home" />}
          {isExpanded && <motion.span initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>Home</motion.span>}
        </Link>

        <Link
          to="/dashboard"
          className={`relative flex items-center gap-2 rounded-lg transition-colors hover:text-foreground ${isExpanded ? 'justify-start bg-accent text-accent-foreground py-2 px-4 w-full' : 'justify-center h-9 w-9'}`}
          onMouseEnter={() => setHovered('Dashboard')}
          onMouseLeave={() => setHovered(null)}
        >
          <Package2 className="h-5 w-5" />
          {hovered === 'Dashboard' && !isExpanded && <Tooltip text="Dashboard" />}
          {isExpanded && <motion.span initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>Dashboard</motion.span>}
        </Link>

        <Link
          to="/services"
          className={`relative flex items-center gap-2 rounded-lg transition-colors hover:text-foreground ${isExpanded ? 'justify-start py-2 px-4 w-full' : 'justify-center h-9 w-9'}`}
          onMouseEnter={() => setHovered('Services')}
          onMouseLeave={() => setHovered(null)}
        >
          <Package className="h-5 w-5" />
          {hovered === 'Services' && !isExpanded && <Tooltip text="Services" />}
          {isExpanded && <motion.span initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>Services</motion.span>}
        </Link>

        <Link
          to="#"
          className={`relative flex items-center gap-2 rounded-lg transition-colors hover:text-foreground ${isExpanded ? 'justify-start py-2 px-4 w-full' : 'justify-center h-9 w-9'}`}
          onMouseEnter={() => setHovered('Features')}
          onMouseLeave={() => setHovered(null)}
        >
          <Activity className="h-5 w-5" />
          {hovered === 'Features' && !isExpanded && <Tooltip text="Features" />}
          {isExpanded && <motion.span initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>Features</motion.span>}
        </Link>
      </nav>
      
      <nav className="flex h-full flex-col justify-end items-start gap-4 px-2 py-4">
        <Link
          to="#"
          className={`relative flex items-center gap-2 rounded-lg transition-colors hover:text-foreground ${isExpanded ? 'justify-start py-2 px-4 w-full' : 'justify-center h-9 w-9'}`}
          onMouseEnter={() => setHovered('Settings')}
          onMouseLeave={() => setHovered(null)}
        >
          <Settings className="h-5 w-5" />
          {hovered === 'Settings' && !isExpanded && <Tooltip text="Settings" />}
          {isExpanded && <motion.span initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>Settings</motion.span>}
        </Link>
      </nav>
    </aside>
    </>
  );
};

export default Sidebar;