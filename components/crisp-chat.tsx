"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("3b6fb802-4a61-4621-916a-fc531a82e38a");
    }, [])
    return null;
}