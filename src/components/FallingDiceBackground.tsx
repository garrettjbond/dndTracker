import Dice, { type DiceProps } from './Dice';

const diceTypes: DiceProps['type'][] = ['d4', 'd6', 'd8', 'd10', 'd12', 'd20'];

const FallingDiceBackground = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
      {Array.from({ length: 20 }).map((_, i) => {
        const type = diceTypes[Math.floor(Math.random() * diceTypes.length)];
        const left = Math.random() * 100; // % from left
        const delay = Math.random() * 5; // seconds
        const duration = 5 + Math.random() * 5; // seconds

        return (
          <div
            key={i}
            className="absolute"
            style={{
              left: `${left}%`,
              animation: `fall ${duration}s linear ${delay}s infinite`,
            }}
          >
            {/* Inner wrapper spins */}
            <div
              style={{
                animation: `spin ${duration * 0.7}s linear infinite`,
              }}
            >
              <Dice type={type} size={30 + Math.random() * 30} />
            </div>
          </div>
        );
      })}


      <style>{`
  @keyframes fall {
    0% { transform: translateY(-50px); opacity: 0; }
    10% { opacity: 1; }
    100% { transform: translateY(110vh); opacity: 0; }
  }

  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`}</style>

    </div>
  );
};

export default FallingDiceBackground;
