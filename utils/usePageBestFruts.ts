import { client } from "./contentful";
import { useState } from "react";
import { Asset, Entry } from "contentful";

export interface FrutaModel {
  titulo: string;
  descripcion: string;
  cover: Asset,
}

interface FrutasPromocionales {
  nombre: string;
  foto: Asset;
  descipcion: string;
  valorPorKilo: number;
}

interface Pagina {
  titulo: string;
  descripcion: string;
  palabrasClaves: string[];
  frutasModelo: Entry<FrutaModel>[];
  frutasPromocionales: Entry<FrutasPromocionales>[];
}

export type PaginaEntry = Entry<Pagina>;

export const getFrutPage = () => client.getEntry<Pagina>('1ameHeSPbyQyAgJRDdu0xW');
export const frutPagePromise = getFrutPage();

frutPagePromise.then(console.log);

export const usePageBestFruts = () => {
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState();

  frutPagePromise.then((result) => {
    setLoading(true);
    setResult(result);
  });

  return { loading, result };
}
