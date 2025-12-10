import Button from "../../components/Button";
import Input from "../../components/Input";

const CharacterCreation = () => {
    return (
        <div className="h-screen m-5">
            <div className="flex flex-col justify-center items-center mb-10">
                <div className="-mb-30 -mr-10">
                    <div className="w-32 h-32 bg-primary [clip-path:polygon(50%_0%,100%_38%,82%_100%,18%_100%,0%_38%)]"></div>
                    <div className="w-32 h-32 bg-gradient-to-b from-red-400 to-red-200 [clip-path:polygon(50%_0%,100%_38%,82%_100%,18%_100%,0%_38%)] -mt-32 -ml-5"></div>
                </div>
                <h1 className="font-['UnifrakturCook'] text-[6rem] text-black z-1">Character</h1>
                <h2 className="font-['Splash'] text-[3rem] text-primary -mt-16 drop-shadow-lg z-2">Creation</h2>
            </div>
            <div className="flex flex-col justify-start gap-10 items-center h-full">
                <p>Fill out the form below with your player's character info and add them to the encounter.</p>
                <div className="rounded-2xl w-4/5 drop-shadow-md bg-lightgrey px-6 py-3 flex flex-col">
                    <form className="flex flex-col">
                        <Input type="number" placeholder="Enter initiative..." />
                        <Input type="text" placeholder="Enter name..." />
                        <Input type="number" placeholder="Enter ac..." />
                        <Input type="number" placeholder="Enter health..." />
                    </form>
                </div>

                <Button>Add to Roster</Button>
            </div>
        </div>
    );
};

export default CharacterCreation;