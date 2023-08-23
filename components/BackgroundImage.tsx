import React from "react";
import { motion } from "framer-motion";

type Props = {
    transitionData: any;
    currentSlideData: any;
};

function BackgroundImage({ transitionData, currentSlideData }: Props) {
    return (
        <>
            {transitionData && (
                <motion.img
                    key={transitionData.images[0]}
                    layoutId={transitionData.images[0]}
                    alt="Transition Image"
                    transition={{
                        opacity: { ease: "linear" },
                        layout: { duration: 0.5 },
                    }}
                    className="absolute left-0 top-0 z-10 h-full w-full object-cover brightness-50"
                    src={transitionData?.images[0]}
                />
            )}
            {currentSlideData.data && (
                <motion.img
                    alt="Current Image"
                    key={currentSlideData.data.images[0] + "transition"}
                    src={currentSlideData.data.images[0]}
                    className="absolute left-0 top-0 h-full w-full object-cover brightness-50"
                />
            )}
        </>
    );
}

export default BackgroundImage;
