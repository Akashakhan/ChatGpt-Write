import React from "react";
import { motion } from "framer-motion";

const container = {
    show: {
        transition: {
            staggerChildren: 0.35,
        },
    },
};

const itemMain = {
    hidden: { opacity: 0, y: 200 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            ease: "linear",
            duration: 0.5,
        },
    },
};
const Loader = ( { } ) => {
    return (
        <motion.div className="loader overflow-hidden">
            <motion.div
                variants={ container }
                initial="hidden"
                animate="show"
                exit="exit"
                className="loader-inner"
            >
                <motion.div variants={ itemMain } className="transition-image">
                    <motion.h2
                        className="mobile_imgs text-[4rem] h-[100vh] flex justify-center items-center"
                    >
                        ASSESSMENT
                    </motion.h2>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default Loader;
