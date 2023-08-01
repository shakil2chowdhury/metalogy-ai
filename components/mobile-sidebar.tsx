"use client"

import { Button } from "@/components/ui/button";

import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Sidebar from "./sidebar";
import { useState, useEffect } from 'react';

interface MobileSidebarProps {
    apiLimitCount: number;
    isPro: boolean;
}

const MobileSidebar = ({ apiLimitCount = 0, isPro = false }: MobileSidebarProps) => {
    //fixing iteration error by this block of code
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    },[])

    if(!isMounted) {
        return null;
    }
    //fixing iteration error by this block of code

    return(
        <Sheet>
            <SheetTrigger>
                <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu />
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0">
                <Sidebar isPro={isPro} apiLimitCount={apiLimitCount}/>
            </SheetContent>
        </Sheet>
    )
}

export default MobileSidebar;