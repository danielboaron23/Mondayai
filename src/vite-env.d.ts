/// <reference types="vite/client" />

// This project imports some Figma-exported assets via virtual paths like:
//   import img from "figma:asset/<hash>.png";
// Vite resolves those via `vite.config.ts` aliases, but TypeScript needs a module declaration.
declare module "figma:asset/*.png" {
  const src: string;
  export default src;
}

// Some TS tooling is pickier about wildcard matching in custom prefixes.
// This broader declaration ensures `figma:asset/<anything>` resolves.
declare module "figma:asset/*" {
  const src: string;
  export default src;
}

