import {
  PropsWithChildren,
  ReactNode,
  useContext,
} from "react";

import { AtractiosContext } from "../context/AttractionsContext.ts";
import { FiltersContext } from "../context/FilterContext.ts";

import { useQuery } from "@tanstack/react-query";
import { fetchAttractions } from "../api/fetch-attractions.ts";

type Props = PropsWithChildren;

function AttractionsProvider({ children }: Props): ReactNode {
  const { filter } = useContext(FiltersContext);

  const { data } = useQuery({
    queryKey: ["attraction", filter],
    queryFn: () => fetchAttractions(filter),
      initialData : []
  });
  return (
    <AtractiosContext value={{ filterActraction: data }}>
      {children}
    </AtractiosContext>
  );
}

export default AttractionsProvider;
