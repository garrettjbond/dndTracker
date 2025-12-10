import Button from "../../components/Button";
import Input from "../../components/Input";

const MonsterSelection = () => {
    return (
        <div className="h-screen m-5">
            <div className="flex flex-col justify-center items-center mt-20">
                <div className="-mb-30 -mr-10">
                    <div className="w-32 h-32 bg-primary [clip-path:polygon(50%_0%,100%_50%,50%_100%,0%_50%)]"></div>
                    <div className="w-32 h-32 bg-gradient-to-b from-red-400 to-red-200 [clip-path:polygon(50%_0%,100%_50%,50%_100%,0%_50%)] -mt-32 -ml-5"></div>
                </div>
                <h1 className="font-['UnifrakturCook'] text-[6rem] text-black z-1">Monster</h1>
                <h2 className="font-['Splash'] text-[3rem] text-primary -mt-16 drop-shadow-lg z-2">Selection</h2>
            </div>
            <div className="flex flex-col justify-start gap-10 items-center h-full">
                <p>Search for almost any D&D 5E creature and add it to your encounter.</p>
                <Input placeholder="Enter creature..." />
                <table className="w-full bg-white rounded-lg shadow-sm">
                    <thead>
                        <tr className="bg-gray-50 border-b border-gray-200">
                            <th className="px-4 py-4 text-left text-xs text-gray-700 uppercase">Creature</th>
                            <th className="px-4 py-4 text-left text-xs text-gray-700 uppercase">Type</th>
                            <th className="px-4 py-4 text-left text-xs text-gray-700 uppercase">Cr</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 overflow-auto">
                        <tr className="hover:bg-primaryB transition-colors cursor-pointer">
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">Beholder</td>
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-600">john@example.com</td>
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-600">Admin</td>
                        </tr>
                        <tr className="hover:bg-primaryB transition-colors cursor-pointer">
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">John Doe</td>
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-600">john@example.com</td>
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-600">Admin</td>
                        </tr>
                        <tr className="hover:bg-primaryB transition-colors cursor-pointer">
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">John Doe</td>
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-600">john@example.com</td>
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-600">Admin</td>
                        </tr>
                        <tr className="hover:bg-primaryB transition-colors cursor-pointer">
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">John Doe</td>
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-600">john@example.com</td>
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-600">Admin</td>
                        </tr>
                        <tr className="hover:bg-primaryB transition-colors cursor-pointer">
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">John Doe</td>
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-600">john@example.com</td>
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-600">Admin</td>
                        </tr>
                    </tbody>
                </table>
                <Button>Add to Roster</Button>
            </div>
        </div>
    );
};

export default MonsterSelection;