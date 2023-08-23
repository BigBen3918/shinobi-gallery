import { Righteous } from "next/font/google";
import { AnimatePresence } from "framer-motion";
import React from "react";

import Header from "@/components/Header";
import BackgroundImage from "@/components/BackgroundImage";
import Slides from "@/components/Slides";
import SlideInfo from "@/components/SlideInfo";
import Controls from "@/components/Controls";

import { sliderData } from "./data";

const inter = Righteous({
    subsets: ["latin"],
    weight: ["400"],
});

export default function Home() {
    const [data, setData] = React.useState<Data[]>(sliderData.slice(1));
    const [transitionData, setTransitionData] = React.useState<Data>(
        sliderData[0]
    );

    const [currentSlideData, setCurrentSlideData] =
        React.useState<CurrentSlideData>({
            data: initData,
            index: 0,
        });

    return (
        <main
            className={`
       ${inter.className}
        relative min-h-screen select-none overflow-hidden text-white antialiased`}
        >
            <AnimatePresence>
                <BackgroundImage
                    transitionData={transitionData}
                    currentSlideData={currentSlideData}
                />
                <div className="absolute z-20  h-full w-full">
                    <Header />
                    <div className="flex h-full w-full grid-cols-10 flex-col md:grid">
                        <div className=" col-span-4 mb-3 flex h-full flex-1 flex-col justify-end px-5 md:mb-0 md:justify-center md:px-10">
                            <SlideInfo
                                transitionData={transitionData}
                                currentSlideData={currentSlideData}
                            />
                        </div>
                        <div className=" col-span-6 flex h-full flex-1 flex-col justify-start p-4 md:justify-center md:p-10">
                            <Slides data={data} />
                            <Controls
                                currentSlideData={currentSlideData}
                                data={data}
                                transitionData={transitionData}
                                initData={initData}
                                handleData={setData}
                                handleTransitionData={setTransitionData}
                                handleCurrentSlideData={setCurrentSlideData}
                                sliderData={sliderData}
                            />
                        </div>
                    </div>
                </div>
            </AnimatePresence>
        </main>
    );
}

const initData = sliderData[0];
