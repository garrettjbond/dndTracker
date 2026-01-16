import { useState, useEffect } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { useEncounterStore } from "../../global/encounterStore";
import type { CreatureStatBlock } from "../../global/encounterStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import SectionTitle from "../../components/SectionTitle";

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
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
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

        if (!ids.length) {
            setErrorMessage("Please select at least one creature before adding to the roster.");
            return;
        }

        setErrorMessage(null);

        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);

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
                initiative: (Math.floor(Math.random() * 20) + 1) + Math.floor((monster.dexterity - 10) / 2),
                armor_class: monster.armor_class ?? monsterTemplate.armor_class,
                hit_points: monster.hit_points ?? monsterTemplate.hit_points,
                index: monster.index
            }));

            addCreatures(mapped);
            setActiveCreatureList([]);
            return mapped;
        } catch (err) {
            setErrorMessage("Something went wrong while fetching creatures.")
        }
        finally {
            setIsLoading(false)
        }
    };

    return (
        <div id="monster-section" className="h-screen mx-5 flex flex-col justify-start pt-10 gap-12">
            <SectionTitle title="Monster" subtitle="Selection" shape="d8">Search for almost any D&D 5E creature and add it to your encounter.</SectionTitle>
            <Input onChange={handleSearch} placeholder="Enter creature..." />

            <div className="flex flex-col justify-start gap-7 md:gap-10 items-center h-fit sm:mt-0">
                <div className="overflow-auto h-[33vh] w-xs sm:w-xl lg:w-[40vw] scrollbar-gutter-stable bg-white">
                    {isLoading ? (<div className="flex flex-col justify-center items-center h-full">
                        <FontAwesomeIcon
                            icon={faSpinner}
                            className="text-7xl text-primary fa-spin"
                        />
                    </div>) :
                        <table className="w-full bg-white rounded-lg shadow-sm">
                            <thead className="sticky top-0">
                                <tr className="bg-primary">
                                    <th className="px-4 py-4 text-white text-center text-xs sm:text-sm text-gray-700 uppercase -mt-5">Creature</th>
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
                {errorMessage && (
                    <p className="text-red-600 text-sm font-medium">
                        {errorMessage}
                    </p>
                )}
                <Button onClick={() => fetchSelectedCreatures(activeCreatureList)}>Add to Roster</Button>
            </div>
        </div>
    );
};

export default MonsterSelection;
