import React from "react";
import { motion } from "framer-motion";

type Props = {
    transitionData: Data;
    currentSlideData: CurrentSlideData;
};

function BackgroundImage({ transitionData, currentSlideData }: Props) {
    return (
        <>
            {transitionData && (
                <motion.img
                    layout
                    alt="Transition Image"
                    transition={{
                        opacity: { ease: "linear" },
                        layout: { duration: 0.5 },
                    }}
                    className="absolute left-0 top-0 z-10 h-full w-full object-cover brightness-50"
                    src={transitionData.images[0]}
                />
            )}
            <motion.img
                layout
                alt="Current Image"
                key={currentSlideData.data.name + "transition"}
                src={currentSlideData.data.images[0]}
                className="absolute left-0 top-0 h-full w-full object-cover brightness-50"
            />
        </>
    );
}

export default BackgroundImage;
