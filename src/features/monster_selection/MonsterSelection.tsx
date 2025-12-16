import { useState, useEffect } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { useEncounterStore } from "../../global/encounterStore";
import type { CreatureStatBlock } from "../../global/encounterStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

interface CreatureOverview {
    index: string;
    name: string;
    url: string;
}

interface ApiResponse {
    count: number;
    results: CreatureOverview[];
}

const MonsterSelection = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [apiData, setApiData] = useState<CreatureOverview[]>([]);
    const [filteredApiData, setFilteredApiData] = useState<CreatureOverview[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [activeCreatureList, setActiveCreatureList] = useState<string[]>([]);
    const { addCreatures } = useEncounterStore();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://www.dnd5eapi.co/api/monsters/');
                if (!response.ok) throw new Error('Failed to fetch');
                const data: ApiResponse = await response.json();
                setApiData(data.results);
                setFilteredApiData(data.results);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const term = event.target.value;
        setSearchTerm(term);
        const filtered = apiData.filter((item) =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredApiData(filtered);
    };

    const addToActiveStyleList = (id: string) => {
        setActiveCreatureList((prev) =>
            prev.includes(id)
                ? prev.filter((item) => item !== id)
                : [...prev, id]
        );
    };

    const fetchSelectedCreatures = async (ids: string[]) => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
        if (!ids.length) return;

        try {
            const results = await Promise.all(
                ids.map(id =>
                    fetch(`https://www.dnd5eapi.co/api/monsters/${id}`).then(res => res.json())
                )
            );

            const monsterTemplate: CreatureStatBlock = {
                id: "",
                name: "",
                dexterity: 10,
                initiative: 10,
                armor_class: [{ value: 10 }],
                hit_points: 1,
                actions: [],
                alignment: "",
                challenge_rating: 0,
                charisma: 0,
                condition_immunities: [],
                constitution: 0,
                damage_immunities: [],
                damage_resistances: [],
                damage_vulnerabilities: [],
                forms: [],
                hit_dice: "",
                hit_points_roll: "",
                image: "",
                index: "",
                intelligence: 0,
                languages: "",
                legendary_actions: [],
                proficiencies: [],
                proficiency_bonus: 0,
                reactions: [],
                senses: { darkvision: "", passive_perception: 0 },
                size: "Medium",
                special_abilities: [],
                speed: {},
                strength: 0,
                type: "monster",
                updated_at: "",
                url: "",
                wisdom: 0,
                xp: 0
            };

            const mapped: CreatureStatBlock[] = results.map(monster => ({
                ...monsterTemplate,
                id: monster.index + "-" + crypto.randomUUID(),
                name: monster.name ?? "Unknown Monster",
                dexterity: monster.dexterity ?? monsterTemplate.dexterity,
                initiative: monster.dexterity ?? monsterTemplate.initiative,
                armor_class: monster.armor_class ?? monsterTemplate.armor_class,
                hit_points: monster.hit_points ?? monsterTemplate.hit_points,
                index: monster.index
            }));

            addCreatures(mapped);
            setActiveCreatureList([]);
            return mapped;
        } catch (err) {
            console.error("Error fetching creatures:", err);
        }
        // finally {
        //     setIsLoading(false);
        // }
    };

    return (
        <div id="monster-section" className="h-screen mx-5 flex flex-col justify-evenly">
            <div className="flex flex-col justify-center items-center">
                <div className="-mb-30 -mr-10">
                    <div className="w-32 h-32 bg-primary [clip-path:polygon(50%_0%,100%_50%,50%_100%,0%_50%)]"></div>
                    <div className="w-32 h-32 bg-gradient-to-b from-red-400 to-red-200 [clip-path:polygon(50%_0%,100%_50%,50%_100%,0%_50%)] -mt-32 -ml-5"></div>
                </div>
                <h1 className="font-['UnifrakturCook'] text-[6rem] text-black z-1">Monster</h1>
                <h2 className="font-['Splash'] text-[3rem] text-primary -mt-16 drop-shadow-lg z-2">Selection</h2>
                <p className="pt-5">Search for almost any D&D 5E creature and add it to your encounter.</p>
            </div>
            <Input onChange={handleSearch} placeholder="Enter creature..." />

            <div className="flex flex-col justify-start gap-10 items-center h-fit">
                <div className="overflow-auto h-48 sm:h-64 w-4/5 bg-lightgrey">

                    {isLoading ? (<div className="flex flex-col justify-center items-center h-full">
                        <FontAwesomeIcon
                            icon={faSpinner}
                            className="text-7xl text-primary fa-spin"
                        />
                    </div>) :
                        <table className="w-full bg-white rounded-lg shadow-sm">
                            <thead className="sticky top-0">
                                <tr className="bg-gray-50 border-b border-gray-200">
                                    <th className="px-4 py-4 text-center text-xs text-gray-700 uppercase">Creature</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {filteredApiData.map((item) => {
                                    const isActive = activeCreatureList.includes(item.index);
                                    return (
                                        <tr
                                            key={item.index}
                                            onClick={() => addToActiveStyleList(item.index)}
                                            className="cursor-pointer"
                                        >
                                            <td
                                                className={`px-4 py-4 whitespace-nowrap text-sm text-gray-900 transition-colors ${isActive ? "bg-primaryB" : "bg-white"}`}
                                            >
                                                {item.name}
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    }
                </div>
                <Button onClick={() => fetchSelectedCreatures(activeCreatureList)}>Add to Roster</Button>
            </div>
        </div>
    );
};

export default MonsterSelection;
