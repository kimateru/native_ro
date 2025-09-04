import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { supabase } from '@/backend/supabase';
import { router } from 'expo-router';

type Props = {
  product: {
    id: string;
    name: string;
    price: number;
    image_url: string;
  }
  onDelete: () => void;
}


const ProductItem = ({ product, onDelete }: Props) => {

  async function deleteProduct(id: string) {
    await supabase.from("products").delete().eq("id", id);
    onDelete();
  }

  return (
    <View className='bg-white p-4 mb-3 rounded-xl shadow-md items-center'>
      <Image source={{ uri: product.image_url }} className='w-24 h-24 rounded-xl mb-2' />
      <Text className='text-lg font-bold'>{product.name}</Text>
      <Text className='text-sm text-gray-500'>${product.price}</Text>
      <TouchableOpacity className='bg-blue-500 w-full p-4 rounded-xl mt-1' onPress={() => router.push(`/(stack)/edit/${product.id}`)}>
        <Text className='text-white text-center font-semibold'>Edit</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => deleteProduct(product.id)} className='bg-red-500 w-full p-4 rounded-xl mt-1'>
        <Text className='text-white text-center font-semibold'>Delete</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ProductItem