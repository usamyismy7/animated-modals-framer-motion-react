import React from 'react'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from "react-intersection-observer";
import { useEffect } from 'react';

const boxInLeft = {
    visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0, x: 500 }
};

const fadeIn = {
    visible: { opacity: 1, scale: 2 },
    hidden: { opacity: 0, scale: 0 },
}

const Box = ({ num }) => {
    const control = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            control.start('visible');
        } else {
            control.start("hidden")
        }
    }, [control, inView]);

    return (
        <motion.div
            className='box'
            ref={ref}
            variants={boxInLeft}
            initial='hidden'
            animate={control}
        >
            <h1 className="Box">Box {num}</h1>
        </motion.div>
    )
}

function Scroll() {
    return (
        <div className='container'>
            <div className="boxes">
                <Box num={1} />
            </div>
            <div className="boxes">
                <Box num={2} />
            </div>
            <div className="boxes">
                <Box num={3} />
            </div>
        </div>
    )
}

export default Scroll