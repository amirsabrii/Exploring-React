import { PropsWithChildren, ReactNode, useEffect, useState } from "react";

import { Capsule } from "../types/capsule.ts";
import { CapsuleContext } from "../context/CapsuleContext.tsx";

type Props = PropsWithChildren;

function CapsuleProviders({ children }: Props): ReactNode {
  const [capsule, setCpsule] = useState<Capsule[]>(loadCapsuleInitialState);

  useEffect(() => {
    localStorage.setItem("capsules", JSON.stringify(capsule));
  }, [capsule]);

  return (
    <CapsuleContext.Provider value={{ capsule, setCpsule }}>
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
