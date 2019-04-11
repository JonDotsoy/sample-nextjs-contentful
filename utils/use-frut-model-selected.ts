import { FrutaModel } from "./usePageBestFruts";
import { Entry } from "contentful";
import { useState } from "react";

export const useFrutModelSelected = (frutaModelsIngres: Entry<FrutaModel>[]) => {
  const [selected, setselected] = useState(frutaModelsIngres[0]);

  return {
    selected,
    select(frutaModel: Entry<FrutaModel>) {
      const found = frutaModelsIngres.find(d => d.sys.id === frutaModel.sys.id);
      if (found) {
        setselected(found);
      }
    }
  };
}