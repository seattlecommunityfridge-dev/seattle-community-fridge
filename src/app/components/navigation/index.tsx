'use client';
import { useState } from "react";
import Navbar from "./navbar_v2";
import {motion, AnimatePresence} from 'framer-motion';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>
            <Navbar />
        </>
    )
}

export default Navigation;