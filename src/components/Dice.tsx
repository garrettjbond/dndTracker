// Dice.tsx
export interface DiceProps {
  type: 'd4' | 'd6' | 'd8' | 'd10' | 'd12' | 'd20';
  size?: number; // in px
}



const Dice = ({ type, size = 80 }: DiceProps) => {

  let svg;
  switch (type) {
    case 'd4':
      svg = <polygon points="20,0 40,34.64 0,34.64" fill="black" />;
      break;
    case 'd6':
      svg = <rect width={size} height={size} fill="black" />;
      break;
    case 'd8':
      svg = <polygon points="20,0 40,20 20,40 0,20" fill="black" />;
      break;
    case 'd10':
      svg = <polygon points="20,0 40,10 40,30 20,40 0,30 0,10" fill="black" />;
      break;
    case 'd12':
      svg = <polygon points="20,0 35,5 40,20 35,35 20,40 5,35 0,20 5,5" fill="black" />;
      break;
    case 'd20':
      svg = <polygon points="20,0 36,7 40,20 36,33 20,40 4,33 0,20 4,7" fill="black" />;
      break;
    default:
      svg = <rect width={size} height={size} fill="black" />;
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      className="absolute"
    >
      {svg}
    </svg>
  );
};

export default Dice;
