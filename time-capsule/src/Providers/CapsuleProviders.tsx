import { PropsWithChildren, ReactNode, useEffect, useState } from "react";

import { Capsule } from "../types/capsule.ts";
import { CapsuleContext } from "../context/CapsuleContext.tsx";

type Props = PropsWithChildren;

function CapsuleProviders({ children }: Props): ReactNode {
  const [capsule, setCpsule] = useState<Capsule[]>(loadCapsuleInitialState);

  useEffect(() => {
    localStorage.setItem("capsules", JSON.stringify(capsule));
  }, [capsule]);

  const createCapsule = (capsule: Capsule) => {
    setCpsule((old) => [...old, capsule]);
  };

  const removeCapsuloe = (id: string | number) => {
    setCpsule((old) => old.filter((x) => x.id !== id));
  };

  return (
    <CapsuleContext.Provider value={{ capsule, createCapsule, removeCapsuloe }}>
      {children}
    </CapsuleContext.Provider>
  );
}

function loadCapsuleInitialState(): Capsule[] {
  type LocalStorgeCapsule = Omit<Capsule, "date"> & { date: string };

  const items = localStorage.getItem("capsules");

  if (!items) {
    return [];
  }
  const parsedCpaule = JSON.parse(items) as LocalStorgeCapsule[];

  return parsedCpaule.map((capsule) => ({
    ...capsule,
    date: new Date(capsule.date),
  }));
}

export default CapsuleProviders;
