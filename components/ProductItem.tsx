import { View, Text, Image } from 'react-native'
import React from 'react'

type Props = {
    product: {
        id: string;
        name: string;
        price: number;
        image_url: string;
    }
}

const ProductItem = ({product}: Props) => {
  return (
    <View className='bg-white p-4 mb-3 rounded-xl shadow-md items-center'>
        <Image source={{uri: product.image_url}} className='w-24 h-24 rounded-xl mb-2' />
        <Text className='text-lg font-bold'>{product.name}</Text>
        <Text className='text-sm text-gray-500'>${product.price}</Text>
    </View>
  )
}

export default ProductItem