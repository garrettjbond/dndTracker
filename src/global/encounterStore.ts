import { create } from "zustand";

export interface CreatureStatBlock {
    id: string;
    initiative: number;
    actions: any[];
    alignment: string;
    armor_class: any[];
    challenge_rating: number;
    charisma: number;
    condition_immunities: any[];
    constitution: number;
    damage_immunities: any[];
    damage_resistances: any[];
    damage_vulnerabilities: any[];
    dexterity: number;
    forms: any[];
    hit_dice: string;
    hit_points: number;
    hit_points_roll: string;
    image: string;
    index: string;
    intelligence: number;
    languages: string;
    legendary_actions: any[];
    name: string;
    proficiencies: any[];
    proficiency_bonus: number;
    reactions: any[];
    senses: {
        darkvision: string;
        passive_perception: number;
    };
    size: string;
    special_abilities: any[];
    speed: {
        walk?: string;
        swim?: string;
        [key: string]: string | undefined;
    };
    strength: number;
    type: string;
    updated_at: string;
    url: string;
    wisdom: number;
    xp: number;
}

interface EncounterStore {
    activeTurn: number;
    creatures: CreatureStatBlock[];
    rollInitiative: (id: string | number, dexterity: number) => void;
    previousTurn: () => void;
    nextTurn: () => void;
    addCreatures: (creatures: CreatureStatBlock[]) => void;
    removeCreature: (id: string | number) => void;
    updateArmorClass: (id: string | number, newValue: number) => void;
    updateCreature: (id: string, field: string, value: string | number) => void;
    clearEncounter: () => void;
}

export const useEncounterStore = create<EncounterStore>((set) => ({
    activeTurn: 0,
    creatures: [],
    
    rollInitiative: (id, dexterity) =>
        set((state) => ({
            creatures: state.creatures.map((creature) => {
                if (creature.id !== id) return creature;
                const dexMod = Math.floor(dexterity / 2);
                const roll = Math.floor(Math.random() * 20) + 1;
                return { ...creature, initiative: dexMod + roll };
            }),
        })),

    previousTurn: () =>
        set((state) => ({
            activeTurn:
                state.creatures.length > 0
                    ? (state.activeTurn - 1 + state.creatures.length) % state.creatures.length
                    : 0,
        })),

    nextTurn: () =>
        set((state) => ({
            activeTurn:
                state.creatures.length > 0
                    ? (state.activeTurn + 1) % state.creatures.length
                    : 0,
        })),

    addCreatures: (newCreatures) =>
        set((state) => ({
            creatures: [
                ...state.creatures,
                ...newCreatures.map((creature) => ({
                    ...creature,
                    id: `${creature.id}-${Date.now()}-${Math.random()
                        .toString(36)
                        .substr(2, 9)}`,
                })),
            ],
        })),

    removeCreature: (id) =>
        set((state) => ({
            creatures: state.creatures.filter((c) => c.id !== id),
            activeTurn:
                state.activeTurn >= state.creatures.length - 1
                    ? 0
                    : state.activeTurn,
        })),

    updateCreature: (id, field, value) =>
        set((state) => ({
            creatures: state.creatures.map((c) =>
                c.id === id ? { ...c, [field]: value } : c
            ),
        })),

    updateArmorClass: (id, newValue) =>
        set((state) => ({
            creatures: state.creatures.map((c) =>
                c.id === id
                    ? { ...c, armor_class: [{ ...c.armor_class[0], value: newValue }] }
                    : c
            ),
        })),

    clearEncounter: () => set({ creatures: [], activeTurn: 0 }),
}));
