import { FunctionComponent } from "react";
import { Paper } from "../layout/paper/Paper";

interface Gift {
  name: string;
  url: string;
  price?: string;
  reserved: boolean;
  reservedBy?: string;
}

const gifts: Gift[] = [
  {
    name: "Chairs",
    url: "https://www.interiorshop.dk/shop/carl-hansen-soen-7492p.html?gclid=Cj0KCQjw8e-gBhD0ARIsAJiDsaVa_qu2rT8OCA2v0qv5mADZJPFPxb5vrznFK0aqyLROLGVFcPOW4_UaAmTkEALw_wcB",
    price: "2.790,00DKK",
    reserved: false,
  },
  {
    name: "Table",
    url: "https://www.interiorshop.dk/shop/carl-hansen-soen-7492p.html?gclid=Cj0KCQjw8e-gBhD0ARIsAJiDsaVa_qu2rT8OCA2v0qv5mADZJPFPxb5vrznFK0aqyLROLGVFcPOW4_UaAmTkEALw_wcB",
    reserved: true,
    reservedBy: "Martin Holde Jensen",
  },
];

export const GiftsContainer: FunctionComponent = () => {
  return <Paper>bla</Paper>;
};
