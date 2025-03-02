import { PropsWithChildren, ReactNode, useState } from "react";

import { Capsule } from "../types/capsule.ts";
import { CapsuleContext } from "../context/CapsuleContext.tsx";

type Props = PropsWithChildren;

function CapsuleProviders({ children }: Props): ReactNode {
  const [capsule, setCpsule] = useState<Capsule[]>([]);

  return (
    <CapsuleContext.Provider value={{ capsule, setCpsule }}>
      {children}
    </CapsuleContext.Provider>
  );
}

export default CapsuleProviders;
