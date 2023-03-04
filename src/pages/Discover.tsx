import React from "react";
import { useGetChartListQuery } from "../redux/services/shazam";

export default function Discover() {
  const { data } = useGetChartListQuery(null);
  console.log(data);

  return <div>Discover</div>;
}
