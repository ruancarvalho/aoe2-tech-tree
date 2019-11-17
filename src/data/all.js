export const BLANK = 0
export const BUILDING = 1
export const TECH = 2
export const UNIT = 3

const miningTechTree = [
  { type: BLANK, name: null },
  { type: TECH, name: 'Double-Bit Axe' },
  { type: BLANK, name: null },
  { type: TECH, name: 'Bow Saw' },
  { type: BLANK, name: null },
  { type: TECH, name: 'Two-Man Saw' },
]

const lumberTechTree = [
  { 
    dark: { 
      type: BLANK, 
    },
    feudal: { 
      type: TECH, 
      name: 'Double-Bit Axe',
    },
    castle: {
      type: TECH,
      name: 'Bow Saw',
    },
    imperial: {
      type: TECH,
      name: 'Two-Man Saw',
    },
  },
]

export const allTechTree = [];

// First Line of Dark Ange
allTechTree.push({ type: BUILDING, name: 'barracks' });
// allTechTree.push({ type: BLANK, name: 'wonder' });
// allTechTree.push({ type: BLANK, name: 'feitoria' });
allTechTree.push({ type: BUILDING, name: 'dock' });
allTechTree.push({ type: BUILDING, name: 'outpost' });
allTechTree.push({ type: BUILDING, name: 'palisade wall' });
allTechTree.push({ type: BUILDING, name: 'house' });
allTechTree.push({ type: BUILDING, name: 'town center' });
allTechTree.push({ id: 14487, type: BUILDING, name: 'mining camp' });
// allTechTree.push({ id: 14464, type: BUILDING, name: 'lumber camp', children: lumberTechTree });
// allTechTree.push({ type: BUILDING, name: 'mill' });

