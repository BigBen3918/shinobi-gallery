import React from "react";
import { motion } from "framer-motion";

type Props = {
    data: any;
};

function SliderCard({ data }: Props) {
    return (
        <motion.div
            layout
            className="relative h-52 min-w-[250px] rounded-2xl shadow-md md:h-80 md:min-w-[208px]"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{
                scale: 1,
                opacity: 1,
                transition: {
                    duration: 0.4,
                },
            }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{
                type: "spring",
                damping: 20,
                stiffness: 100,
            }}
        >
            <motion.img
                layoutId={data.images[0]}
                alt="Transition Image"
                src={data.images[0]}
                className=" absolute h-full w-full  rounded-2xl  object-cover brightness-75 "
            />
            <motion.div
                layout
                className="absolute z-10 flex h-full items-end p-4"
            >
                <motion.div layout>
                    <motion.div
                        layout
                        className="mb-2 h-[2px] w-3 rounded-full bg-white"
                    ></motion.div>
                    <motion.h1
                        layoutId={data.name}
                        className="text-xl leading-6 text-white"
                    >
                        {data.name}
                    </motion.h1>
                    <motion.p
                        layoutId={data.info.Estado || "desconhecida"}
                        className="text-xs text-[#D5D5D6]"
                    >
                        Estado : {data.info.Estado || "desconhecida"}
                    </motion.p>
                    <motion.p
                        layoutId={data.info.Sexo || "desconhecida"}
                        className="text-xs text-[#D5D5D6]"
                    >
                        Sexo : {data.info.Sexo || "desconhecida"}
                    </motion.p>
                    <motion.p
                        layoutId={data.info.Aniversário || "desconhecida"}
                        className="text-xs text-[#D5D5D6]"
                    >
                        Aniversário : {data.info.Aniversário || "desconhecida"}
                    </motion.p>
                    <motion.p
                        layoutId={data.info.Tipo_Sanguíneo || "desconhecida"}
                        className="text-xs text-[#D5D5D6]"
                    >
                        Tipo Sanguíneo :{" "}
                        {data.info.Tipo_Sanguíneo || "desconhecida"}
                    </motion.p>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}

export default SliderCard;
