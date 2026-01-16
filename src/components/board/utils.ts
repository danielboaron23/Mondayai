export const STATUS_COLORS: Record<string, string> = {
  "Done": "#00c875",
  "Working on it": "#fdab3d",
  "Ready to start": "#579bfc",
  "Needs shaping": "#c4c4c4",
};

export const PRIORITY_COLORS: Record<string, string> = {
  "Critical": "#e2445c",
  "High": "#a25ddc",
  "Low": "#579bfc",
};

export const TYPE_COLORS: Record<string, string> = {
  "Craft": "#ff5ac4",
  "Logistics": "#00c875", // Cyan/Green per prompt
  "Program": "#00c875",   // Green per prompt
  "Content": "#fdab3d",
  "Design": "#0086c0",
  "Web": "#00c875",       // Cyan per prompt
  "Production": "#ff642e",
};

export const GROUP_COLORS = {
  "This week's tasks": "#579bfc", // Using the blue/purple from prompt description or screenshot
  "Next week's tasks": "#a25ddc",
};
