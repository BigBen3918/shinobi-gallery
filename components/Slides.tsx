import React from "react";
import SliderCard from "./SliderCard";

type Props = {
    data: Data[];
};

function Slides({ data }: Props) {
    return (
        <div className=" flex w-full gap-6">
            {data.map((data, index: number) => {
                return <SliderCard key={index} data={data} />;
            })}
        </div>
    );
}

export default Slides;
