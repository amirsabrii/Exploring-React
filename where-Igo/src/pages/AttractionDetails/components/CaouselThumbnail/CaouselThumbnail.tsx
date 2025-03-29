import { ReactNode } from "react";

import { Attraction } from "../../../../type/attraction.ts";

import styles from "./CaouselThumbnail.module.css";

type Props = {
  attraction: Attraction;
};

function CaouselThumbnail({ attraction }: Props): ReactNode {
  return (
    <div className={styles.carousel}>
      <img
        src={`${import.meta.env.VITE_CDN_BASE_URL}/${attraction.thumbnail}`}
        alt=""
      />
    </div>
  );
}

export default CaouselThumbnail;
