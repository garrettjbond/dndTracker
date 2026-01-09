import React from "react";

type DiceShape = "d4" | "d8" | "d10" | "d12";

const DiceTexture: React.FC = () => {
    const diceShapes: Record<DiceShape, string> = {
        d4: "[clip-path:polygon(50%_0%,0%_100%,100%_100%)]",
        d8: "[clip-path:polygon(50%_0%,100%_50%,50%_100%,0%_50%)]",
        d10: "[clip-path:polygon(50%_0%,100%_38%,82%_100%,18%_100%,0%_38%)]",
        d12: "[clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]",
    };

    const shapes: DiceShape[] = ["d4", "d8", "d10", "d12"];

    const renderColumn = (gradient: string) => (
        <div className="flex flex-col gap-4">
            {Array(3).fill(null).map((_, i) => (
                shapes.map((shape) => (
                    <div
                        key={`${i}-${shape}`}
                        className={`${diceShapes[shape]} my-8 w-75 h-75 ${gradient}`}
                    />
                ))
            ))}
        </div>
    );

    return (
        <div className="pointer-events-none absolute inset-0 hidden md:flex justify-between z-0">
            <div className="absolute -left-40 top-0 bottom-0 flex flex-col justify-evenly">
                {renderColumn("bg-gradient-to-l from-red-50 to-red-300")}
            </div>

            <div className="absolute -right-40 top-0 bottom-0 flex flex-col justify-evenly">
                {renderColumn("bg-gradient-to-r from-red-50 to-red-300")}
            </div>
        </div>
    );

};

export default DiceTexture;