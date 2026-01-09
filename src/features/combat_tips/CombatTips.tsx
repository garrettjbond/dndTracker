import CardNumber from "../../components/CardNumber";
import SectionTitle from "../../components/SectionTitle";
import { combatFacts } from "./combatFacts";

const CombatTips = () => {
  return (
    <section
      id="combat-section"
      className="relative w-full min-h-screen flex justify-center pt-10"
    >
      <div className="w-xs sm:w-2xl lg:w-[55vw] flex flex-col">
        <SectionTitle title="Combat" subtitle="Tips" shape="d4" />
        <div>
          {combatFacts.map((item) => (
            <CardNumber key={item.step} fact={item} />
          ))}
        </div>
      </div>
    </section>
  );
};


export default CombatTips;
