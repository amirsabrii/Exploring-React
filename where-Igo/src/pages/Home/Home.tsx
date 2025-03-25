import { ReactNode, useEffect, useState } from "react";
import AttractionsList from "../../components/AttractionsList/AttractionsList.tsx";

function Home(): ReactNode {
  const [attractions, setAttractions] = useState([]);

  useEffect(() => {
    const fetchAttractions = async () :Promise<void> => {
      const responce = await fetch(`${import.meta.env.VITE_API_BASE_URL}/whereabouts/attraction`);
      const data = await responce.json();
      setAttractions(data);
      console.log(data)
    };
    fetchAttractions().then();
  }, []);

  return <div>
    <AttractionsList attractios={attractions}/>
  </div>;
}

export default Home;
