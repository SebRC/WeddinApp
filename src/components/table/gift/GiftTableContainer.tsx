import { FunctionComponent, useEffect, useState } from "react";
import { LoadingPage } from "../../loading/LoadingPage";
import { GiftTable } from "./GiftTable";

interface Gift {
  name: string;
  url: string;
  price?: string;
  reserved: boolean;
  reservedBy?: string;
}

const fakeGifts: Gift[] = [
  {
    name: "Carl Hansen & Søn CH24 Y-Stol - Sæbebehandlet Bøg/Naturflet",
    url: "https://www.interiorshop.dk/shop/carl-hansen-soen-7492p.html?gclid=Cj0KCQjw8e-gBhD0ARIsAJiDsaVa_qu2rT8OCA2v0qv5mADZJPFPxb5vrznFK0aqyLROLGVFcPOW4_UaAmTkEALw_wcB",
    price: "2.790,00",
    reserved: false,
  },
  {
    name: "Skagerak Georg Spisebord - Natur eg",
    url: "https://www.interiorshop.dk/shop/skagerak-georg-spisebord-6561p.html?gclid=Cj0KCQjw8e-gBhD0ARIsAJiDsaU5vhvmkfuhAkec8xT4thXuZOPfKzjDp5kF-yK5sbuQPrAiIdeXaOgaAthzEALw_wcB",
    price: "5.590,00",
    reserved: true,
    reservedBy: "Martin Holde Jensen",
  },
  {
    name: "Rug",
    url: "https://www.interiorshop.dk/shop/carl-hansen-soen-7492p.html?gclid=Cj0KCQjw8e-gBhD0ARIsAJiDsaVa_qu2rT8OCA2v0qv5mADZJPFPxb5vrznFK0aqyLROLGVFcPOW4_UaAmTkEALw_wcB",
    price: "1.200,00",
    reserved: false,
  },
];

export const GiftTableContainer: FunctionComponent = () => {
  const [gifts, setGifts] = useState<Gift[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setLoading(true);
      // const loadedGuests = await getAllguests();
      setGifts(fakeGifts);
      setLoading(false);
    })();
  }, []);
  return loading ? <LoadingPage /> : <GiftTable gifts={gifts} />;
};
