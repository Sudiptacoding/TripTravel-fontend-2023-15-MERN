import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { motion, useScroll } from "framer-motion"

const Root = () => {
    const { scrollYProgress } = useScroll();
    return (
        <div>
            <motion.div
                className="progress-bar"
                style={{ scaleX: scrollYProgress }}
            />
            <Header></Header>
            <div ><Outlet></Outlet></div>
            <Footer></Footer>
            <Toaster />
        </div>
    );
};

export default Root;