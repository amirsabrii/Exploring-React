import { Capsule } from "../types/capsule.ts";
import { createContext } from "react";

type CapsuleContextsetCpsule = {
  capsule: Capsule[];
  createCapsule: (capsule: Capsule) => void;
  removeCapsuloe: (id: string | number) => void;
};

export const CapsuleContext = createContext<CapsuleContextsetCpsule>({
  capsule: [],
  createCapsule: () => {},
  removeCapsuloe: () => {},
});
