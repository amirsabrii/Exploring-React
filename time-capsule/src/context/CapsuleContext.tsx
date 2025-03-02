import { Capsule } from "../types/capsule.ts";
import { createContext } from "react";

type CapsuleContextsetCpsule = {
  capsule: Capsule[];
  setCpsule: React.Dispatch<React.SetStateAction<Capsule[]>>;
};

export const CapsuleContext = createContext<CapsuleContextsetCpsule>({
  capsule: [],
  setCpsule: () => {},
});
