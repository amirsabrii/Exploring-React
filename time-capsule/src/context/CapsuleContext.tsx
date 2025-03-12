import { Capsule } from "../types/capsule.ts";
import { createContext } from "react";

type CapsuleContextsetCapsule = {
  capsule: Capsule[];
  createCapsule: (capsule: Capsule) => void;
  removeCapsule: (id: string | number) => void;
  editingCapsule: Capsule | null;
  setEditingCapsule: React.Dispatch<React.SetStateAction<Capsule | null>>;
  editCapsule: (capsule: Capsule) => void;
};

export const CapsuleContext = createContext<CapsuleContextsetCapsule>({
  capsule: [],
  createCapsule: () => {},
  removeCapsule: () => {},
  editingCapsule: null,
  setEditingCapsule: () => {},
  editCapsule: () => {},
});
