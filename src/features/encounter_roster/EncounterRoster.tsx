import Button from "../../components/Button";

const EncounterRoster = () => {
    return (
        <div className="h-screen m-5">
            <div className="flex flex-col justify-center items-center my-10">
                <div className="-mb-30 -mr-10">
                    <div className="w-32 h-32 bg-primary [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]"></div>
                    <div className="w-32 h-32 bg-gradient-to-b from-red-400 to-red-200 [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)] -mt-32 -ml-5"></div>
                </div>
                <h1 className="font-['UnifrakturCook'] text-[6rem] text-black z-1">Encounter</h1>
                <h2 className="font-['Splash'] text-[3rem] text-primary -mt-16 drop-shadow-lg z-2">Let's Go!</h2>
            </div>
            <div className="flex flex-col justify-start gap-10 items-center h-full">

                <p>Fill out the form below with your player's character info and add them to the encounter.</p>
                <table className="w-full bg-white rounded-lg shadow-sm overflow-auto">
                    <thead>
                        <tr className="bg-gray-50 border-b border-gray-200">
                            <th className="px-4 py-4 text-left text-xs text-gray-700 uppercase">Initiative</th>
                            <th className="px-4 py-4 text-left text-xs text-gray-700 uppercase">Name</th>
                            <th className="px-4 py-4 text-left text-xs text-gray-700 uppercase">AC</th>
                            <th className="px-4 py-4 text-left text-xs text-gray-700 uppercase">Health</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        <tr className="hover:bg-primaryB transition-colors cursor-pointer">
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">20</td>
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-600">Luna</td>
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-600">20</td>
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-600">109</td>
                        </tr>
                        <tr className="hover:bg-primaryB transition-colors cursor-pointer">
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">20</td>
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-600">Silas</td>
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-600">20</td>
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-600">109</td>
                        </tr>
                        <tr className="hover:bg-primaryB transition-colors cursor-pointer">
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">20</td>
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-600">Aeron</td>
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-600">20</td>
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-600">109</td>
                        </tr>
                        <tr className="hover:bg-primaryB transition-colors cursor-pointer">
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">20</td>
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-600">Lucious</td>
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-600">20</td>
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-600">109</td>
                        </tr>
                        <tr className="hover:bg-primaryB transition-colors cursor-pointer">
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">20</td>
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-600">Ping</td>
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-600">20</td>
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-600">109</td>
                        </tr>
                        <tr className="hover:bg-primaryB transition-colors cursor-pointer">
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">20</td>
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-600">Sweats</td>
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-600">20</td>
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-600">109</td>
                        </tr>
                    </tbody>
                </table>
            <div className="self-start">
                <Button variant="secondary">Add to Roster</Button>
            </div>
            </div>
        </div>
    );
};

export default EncounterRoster;