import React from "react";

type DiceShape = "d4" | "d8" | "d10" | "d12";

interface SectionTitleProps {
  title: string;
  subtitle: string;
  shape?: DiceShape;
  children?: React.ReactNode;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title = "title", subtitle = "subtitle", shape = "d4", children }) => {
    const diceShapes: Record<DiceShape, string> = {
        d4: "[clip-path:polygon(50%_0%,0%_100%,100%_100%)]",
        d8: "[clip-path:polygon(50%_0%,100%_50%,50%_100%,0%_50%)]",
        d10: "[clip-path:polygon(50%_0%,100%_38%,82%_100%,18%_100%,0%_38%)]",
        d12: "[clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]",
    };



    return (
        <div className="flex flex-col justify-center items-center mt-5" >
            <div className="-mb-30 md:-mb-40 -mr-10" >
                <div className={`w-32 h-32 md:w-40 md:h-40 bg-primary ${diceShapes[shape]}`}> </div>
                < div className={`w-32 h-32 md:w-40 md:h-40 bg-gradient-to-b from-red-400 to-red-200 -mt-32 md:-mt-40 -ml-5 ${diceShapes[shape]}`}> </div>
            </div>
            < h1 className="font-['UnifrakturCook'] text-[6rem] md:text-[8rem] text-black z-1" > {title} </h1>
            < h2 className="font-['Splash'] text-[3rem] md:text-[4rem] text-primary -mt-16 md:-mt-20 drop-shadow-lg z-2" > {subtitle} </h2>
            < p className="pt-2 md:pt-5" > {children}</p>
        </div>
    );
};

export default SectionTitle;