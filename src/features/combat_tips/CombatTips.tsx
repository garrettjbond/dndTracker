// import SectionTitle from "../../components/SectionTitle";

const CombatTips = () => {
    return (
        <div className="h-fit m-5">
            <div className="flex flex-col justify-center items-center mt-20">
                <div className="-mb-30 -mr-10">
                    <div className="w-32 h-32 bg-primary [clip-path:polygon(50%_0%,0%_100%,100%_100%)]"></div>
                    <div className="w-32 h-32 bg-gradient-to-b from-red-400 to-red-200 [clip-path:polygon(50%_0%,0%_100%,100%_100%)] -mt-32 -ml-5"></div>
                </div>
                <h1 className="font-['UnifrakturCook'] text-[6rem] text-black z-1">Combat</h1>
                <h2 className="font-['Splash'] text-[3rem] text-primary -mt-16 drop-shadow-lg z-2">Tips</h2>
            </div>
            <div>
                <div>
                    <h3 className="text-6xl font-bold font-['Permanent\\ Marker'] text-left px-6">01</h3>
                    <div className="rounded-2xl w-4/5 drop-shadow-md bg-lightgrey px-6 py-3 flex flex-col text-left -mt-2">
                        <h4 className="font-bold text-2xl">Battlefield & Terrain</h4>
                        <ul className="list-disc list-inside">
                            <li>Add interactive terrain - levers, falling chandeliers, explosive barrels, etc..</li>
                            <li>Giving it depth - flying foes, climbing vines, archers on ledges</li>
                            <li>Environmental Hazards - lava flows, collapsing floors, slippery ice, magical effects</li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col items-end">
                    <h3 className="text-6xl font-bold font-['Permanent\\ Marker'] text-right px-6">02</h3>
                    <div className="rounded-2xl w-4/5 drop-shadow-md bg-lightgrey px-6 py-3 flex flex-col text-left -mt-2">
                        <h4 className="font-bold text-2xl">Make Enemies Unique</h4>
                        <ul className="list-disc list-inside">
                            <li>Vary enemy types - commanders, casters, artillery, etc.</li>
                            <li>Enemies have brains too - their tactics should be unique to their build</li>
                            <li>Let monsters taunt or react</li>
                            <li>Players aren't the only ones with potions and items</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h3 className="text-6xl font-bold font-['Permanent\\ Marker'] text-left px-6">03</h3>
                    <div className="rounded-2xl w-4/5 drop-shadow-md bg-lightgrey px-6 py-3 flex flex-col text-left -mt-2">
                        <h4 className="font-bold text-2xl">Encounter Design</h4>
                        <ul className="list-disc list-inside">
                            <li>Give each fight a purpose - protect something, stop a ritual, escape, survive for so long</li>
                            <li>Add mid-fight twists - reinforcements, terraing changes, enemy phases</li>
                            <li>Unique rewards - loot doesn't always have to be game changing</li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col items-end">
                    <h3 className="text-6xl font-bold font-['Permanent\\ Marker'] text-right px-6">04</h3>
                    <div className="rounded-2xl w-4/5 drop-shadow-md bg-lightgrey px-6 py-3 flex flex-col text-left -mt-2">
                        <h4 className="font-bold text-2xl">Make it Cinematic</h4>
                        <ul className="list-disc list-inside">
                            <li>Describe what attacks look like</li>
                            <li>Let crits and killing blows shine</li>
                            <li>Use sound and movement</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CombatTips;
