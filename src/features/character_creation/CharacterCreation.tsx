import Button from "../../components/Button";
import Input from "../../components/Input";
import { useEncounterStore } from "../../global/encounterStore";

const CharacterCreation = () => {
    const { addCreatures } = useEncounterStore();

    const addToRoster = (event: React.FormEvent<HTMLFormElement>) => {
        event?.preventDefault();

        const form = event.currentTarget;
        const formData = new FormData(form);

        const newCreature = {
            id: crypto.randomUUID(),
            name: String(formData.get("name")),
            initiative: Number(formData.get("initiative")),
            armor_class: [{ value: Number(formData.get("ac")) }],
            hit_points: Number(formData.get("health")),
            actions: [],
            alignment: "",
            challenge_rating: 0,
            charisma: 0,
            condition_immunities: [],
            constitution: 0,
            damage_immunities: [],
            damage_resistances: [],
            damage_vulnerabilities: [],
            dexterity: 0,
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
            type: "player",
            updated_at: "",
            url: "",
            wisdom: 0,
            xp: 0
        };

        addCreatures([newCreature]);

        form.reset();
    }

    return (
        <div id="character-section" className="h-screen m-5 flex flex-col justify-evenly">
            <div className="flex flex-col justify-center items-center mt-5">
                <div className="-mb-30 -mr-10">
                    <div className="w-32 h-32 bg-primary [clip-path:polygon(50%_0%,100%_38%,82%_100%,18%_100%,0%_38%)]"></div>
                    <div className="w-32 h-32 bg-gradient-to-b from-red-400 to-red-200 [clip-path:polygon(50%_0%,100%_38%,82%_100%,18%_100%,0%_38%)] -mt-32 -ml-5"></div>
                </div>
                <h1 className="font-['UnifrakturCook'] text-[6rem] text-black z-1">Character</h1>
                <h2 className="font-['Splash'] text-[3rem] text-primary -mt-16 drop-shadow-lg z-2">Creation</h2>
                <p className="pt-5">Fill out the form below with your player's character info and add them to the encounter.</p>
            </div>
            <div className="flex flex-col justify-start gap-10 items-center h-fit">
                <form className="flex flex-col items-center gap-5" onSubmit={addToRoster}>
                    <div className="rounded-2xl w-4/5 drop-shadow-md bg-lightgrey px-6 py-3 flex flex-col w-full">
                        <Input name="initiative" required type="number" placeholder="Enter initiative..." />
                        <Input name="name" required type="text" placeholder="Enter name..." />
                        <Input name="ac" required type="number" placeholder="Enter ac..." />
                        <Input name="health" required type="number" placeholder="Enter health..." />
                    </div>
                    <Button type="submit">Add to Roster</Button>
                </form>
            </div>
        </div>
    );
};

export default CharacterCreation;