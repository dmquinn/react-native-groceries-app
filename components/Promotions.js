import { View, Text, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import PromotionsCard from "./PromotionsCard";
import sanityClient, { urlFor } from "../sanity";

export default function Promotions({ products, setProducts }) {
  const [promotions, setPromotions] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
    *[_type == "promotions"]
    `
      )
      .then((data) => {
        setPromotions(data);
      });
  }, []);
  return (
    <ScrollView
      horizontal
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      showsHorizontalScrollIndicator={false}
    >
      {promotions.map((promotion) => (
        <PromotionsCard
          id={promotion._id}
          key={promotion._id}
          imgUrl={urlFor(promotion.image).width(500).url()}
          title={promotion.name}
          products={products}
          setProducts={setProducts}
        />
      ))}
    </ScrollView>
  );
}
