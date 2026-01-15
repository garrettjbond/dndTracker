import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../../components/Button";
import { useEncounterStore } from "../../global/encounterStore";
import { faDungeon, faTrash } from '@fortawesome/free-solid-svg-icons';
import SectionTitle from "../../components/SectionTitle";

const EncounterRoster = () => {
    const {
        activeTurn,
        nextTurn,
        previousTurn,
        creatures,
        clearEncounter,
        removeCreature,
        updateCreature,
        updateArmorClass
    } = useEncounterStore();

    const sortedCreatures = creatures.slice().sort((a, b) => (b.initiative ?? 0) - (a.initiative ?? 0));
    const activeCreatureId = sortedCreatures[activeTurn]?.id;

    return (
        <div id="encounter-section" className="h-screen mx-5 flex flex-col gap-5 sm:gap-15">
            <SectionTitle title="Encounter" subtitle="Let's Go!" shape="d12">Take charge of the battle! Cycle through the turns and bring the fantasy to life!</SectionTitle>
            <div className="flex justify-center">
                <Button onClick={() => {
                    document.getElementById("combat-section")?.scrollIntoView({
                        behavior: "smooth",
                    });
                }}>Combat Tips</Button>
                <Button onClick={() => {
                    document.getElementById("monster-section")?.scrollIntoView({
                        behavior: "smooth",
                    });
                }}>Monster Selection</Button>
                <Button onClick={() => {
                    document.getElementById("character-section")?.scrollIntoView({
                        behavior: "smooth",
                    });
                }}>Character Creation</Button>
            </div>

            <div className="flex flex-col justify-start gap-10 items-center h-fit">
                {creatures.length < 1 ?
                    <div className="shadow-md rounded-md flex flex-col justify-evenly items-center bg-gradient-to-b from-red-500 to-red-200 text-xl text-white  font-semibold w-xs sm:w-xl lg:w-[45vw] h-[40vh]">
                        <p>Roster is Empty</p>
                        <FontAwesomeIcon
                            icon={faDungeon}
                            className="text-7xl text-white fa-beat-fade"
                        />
                        <p>All Monsters Secure</p>
                    </div>
                    :
                    <div className="flex flex-col items-center gap-7 w-xs sm:w-xl lg:w-[45vw] h-[40vh]">
                        <div className="h-[33vh] overflow-y-auto w-full">
                            <table className="w-full table-fixed bg-white rounded-lg shadow-sm">
                                <thead className="sticky top-0">
                                    <tr className="bg-gray-50 border-b border-gray-200">
                                        <th className="w-16 px-3 py-4 text-left text-xs text-gray-700 uppercase">Init</th>
                                        <th className="px-3 py-4 text-left text-xs text-gray-700 uppercase">Name</th>
                                        <th className="px-3 py-4 text-center text-xs text-gray-700 uppercase">AC</th>
                                        <th className="py-4 text-center text-xs text-gray-700 uppercase">Health</th>
                                        <th className="w-12 px-3 py-4 text-left text-xs text-gray-700 uppercase"></th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {sortedCreatures.map((item) => {
                                        const isActive = item.id === activeCreatureId;
                                        return (
                                            <tr key={item.id} className={isActive ? 'bg-primaryB' : ''}>
                                                <td className="py-4 px-3 whitespace-nowrap text-sm text-gray-900">
                                                    <input
                                                        type="number"
                                                        value={item.initiative ?? 0}
                                                        onChange={(e) =>
                                                            updateCreature(item.id, 'initiative', Number(e.target.value))
                                                        }
                                                        className="w-full text-center outline-none"
                                                    />
                                                </td>
                                                <td className="truncate py-4 px-3 whitespace-nowrap text-left text-sm text-gray-900">
                                                    {item.name}
                                                </td>
                                                <td className="py-4 px-3 whitespace-nowrap text-sm text-gray-900">
                                                    <input
                                                        type="number"
                                                        value={item.armor_class?.[0]?.value ?? 0}
                                                        onChange={(e) =>
                                                            updateArmorClass(item.id, Number(e.target.value))
                                                        }
                                                        className="w-full text-center outline-none"
                                                    />
                                                </td>
                                                <td className="py-4 px-3 whitespace-nowrap text-sm text-gray-900">
                                                    <input
                                                        type="number"
                                                        value={item.hit_points ?? 0}
                                                        onChange={(e) =>
                                                            updateCreature(item.id, 'hit_points', Number(e.target.value))
                                                        }
                                                        className="w-full text-center outline-none"
                                                    />
                                                </td>
                                                <td className="py-4 px-3 whitespace-nowrap text-sm text-gray-900">
                                                    <FontAwesomeIcon
                                                        onClick={() => removeCreature(item.id)}
                                                        icon={faTrash}
                                                        className="cursor-pointer hover:text-red-600"
                                                    />
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>

                        <div className="flex justify-center gap-6 w-full">
                            <div className="flex gap-2">
                                <Button onClick={previousTurn} variant="primary">Previous</Button>
                                <Button onClick={nextTurn} variant="primary">Next</Button>
                            </div>
                            <Button onClick={clearEncounter} variant="secondary">Clear</Button>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default EncounterRoster;
