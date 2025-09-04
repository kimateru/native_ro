import { useEffect, useState } from "react";
import { supabase } from "../backend/supabase";
import ProductItem from "../components/ProductItem";
import { FlatList, ActivityIndicator } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Index() {

  type Product = {
    id: string;
    name: string;
    price: number;
    image_url: string;
  }

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);


  async function fetchProducts() {
    setLoading(true);
    const { data, error } = await supabase.from("products").select("*");
    if (error) {
      console.log(error);
    } else {
      setProducts(data as Product[]);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-gray-200">
      {
        loading ? (
          <ActivityIndicator size="large" />
        ) : (
          <FlatList
            data={products}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <ProductItem product={item} />}
            contentContainerStyle={{ padding: 16 }}
          />
        )
      }
    </SafeAreaView>
  );
}


/*
1) Creaza tabela filme
Afișează filmele într-o listă scrollabilă cu poster.Filtrează filme după gen (Sci-Fi, Acțiune, etc.).Sortează filmele după anul lansării (de la cele mai noi la cele mai vechi).

2) Tabele:
tari (id, nume, steag_url)
oras (id, tara_id, nume, populatie)

Afișează lista de țări cu steagul lor.La apăsarea unei țări → afișează orașele din acea țară.Afișează populația orașelor cu formatare frumoasă (1,2M pentru milioane).
*/
