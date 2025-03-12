import { Capsule } from "../types/capsule.ts";
import { createContext } from "react";

type CapsuleContextsetCpsule = {
  capsule: Capsule[];
  createCapsule: (capsule: Capsule) => void;
  removeCapsuloe: (id: string | number) => void;
  editCapsule: Capsule | null;
  setEditCapsule: React.Dispatch<React.SetStateAction<Capsule | null>>;
  editingCapsule: (cpsule: Capsule) => void;
};

export const CapsuleContext = createContext<CapsuleContextsetCpsule>({
  capsule: [],
  createCapsule: () => {},
  removeCapsuloe: () => {},
  editCapsule: null,
  setEditCapsule: () => {},
  editingCapsule: () => {},
});
