import { Righteous } from "next/font/google";
import { AnimatePresence } from "framer-motion";
import React from "react";

import Header from "@/components/Header";
import BackgroundImage from "@/components/BackgroundImage";
import Slides from "@/components/Slides";
import SlideInfo from "@/components/SlideInfo";
import Controls from "@/components/Controls";
import { GetData } from "@/components/Service";

const inter = Righteous({
    subsets: ["latin"],
    weight: ["400"],
});

export default function Home() {
    const [originData, setOriginData] = React.useState<any>([]);
    const [data, setData] = React.useState<any>([]);
    const [transitionData, setTransitionData] = React.useState<any>(null);
    const [currentSlideData, setCurrentSlideData] = React.useState<any>({
        data: null,
        index: 0,
    });

    React.useEffect(() => {
        (async () => {
            const result = await GetData();
            setOriginData(result.akatsuki);
        })();
    }, []);

    React.useEffect(() => {
        if (originData.length > 0) {
            setTransitionData(originData[0]);
            setCurrentSlideData({ ...currentSlideData, data: originData[0] });
            setData(originData.slice(1));
        }
    }, [originData]);

    return (
        <main
            className={`
       ${inter.className}
        relative min-h-screen select-none overflow-hidden text-white antialiased`}
        >
            {originData.length > 0 && (
                <AnimatePresence>
                    <BackgroundImage
                        transitionData={transitionData}
                        currentSlideData={currentSlideData}
                    />
                    <div className="absolute z-20 h-full w-full">
                        <Header />
                        <div className=" flex h-full w-full grid-cols-10 flex-col md:grid">
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
                                    initData={originData[0]}
                                    handleData={setData}
                                    handleTransitionData={setTransitionData}
                                    handleCurrentSlideData={setCurrentSlideData}
                                    sliderData={originData}
                                />
                            </div>
                        </div>
                    </div>
                </AnimatePresence>
            )}
        </main>
    );
}
