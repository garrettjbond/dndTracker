import './App.css'
import FallingDiceBackground from './components/FallingDiceBackground.tsx'
import CharacterCreation from './features/character_creation/CharacterCreation.tsx'
import CombatTips from './features/combat_tips/CombatTips.tsx'
import EncounterRoster from './features/encounter_roster/EncounterRoster.tsx'
import Footer from './features/footer/Footer.tsx'
import Header from './features/header/Header.tsx'
import MonsterSelection from './features/monster_selection/MonsterSelection.tsx'

function App() {
  return (
    <>
      <div className="relative w-full h-screen bg-gradient-to-b from-primary to-white">
        <FallingDiceBackground />
        <Header />
      </div>
      <CombatTips/>
      <MonsterSelection/>
      <CharacterCreation/>
      <EncounterRoster />
      <Footer />
    </>
  )
}


export default App
