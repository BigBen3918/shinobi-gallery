import React from "react";
import { motion } from "framer-motion";

type Props = {
    data: any;
};

const item = {
    hidden: {
        y: "100%",
        transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
    },
    visible: {
        y: 0,
        transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 },
    },
};

function OtherInfo({ data }: Props) {
    return (
        <motion.div
            layoutId={data?.name}
            initial="hidden"
            animate={"visible"}
            className=" flex flex-col"
        >
            {/* <AnimatedText
                className="spacing overflow-hidden text-[#D5D5D6]"
                data={data?.name}
            /> */}
            <AnimatedText
                className="my-1 text-4xl font-semibold md:my-3 md:text-7xl md:leading-[100px]"
                data={data?.name}
            />
            <AnimatedText
                className="text-xs text-[#D5D5D6]"
                data={data?.about[0]}
            />
        </motion.div>
    );
}

export default OtherInfo;

const AnimatedText = ({
    data,
    className,
}: {
    data?: string;
    className?: string;
}) => {
    return (
        <span
            style={{
                overflow: "hidden",
                display: "inline-block",
            }}
        >
            <motion.p className={` ${className}`} variants={item} key={data}>
                {data}
            </motion.p>
        </span>
    );
};
