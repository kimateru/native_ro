import { useLocalSearchParams, useRouter } from 'expo-router';
import { View, Text, TextInput, Button, Alert } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { supabase } from '@/backend/supabase';
import { useState, useEffect } from 'react';

const EditScreen = () => {

    const { id } = useLocalSearchParams();
    const router = useRouter();

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        async function fetchProduct() {
            const { data, error } = await supabase.from('products').select('*').eq('id', id).single();
            if (!error && data) {
                setName(data.name);
                setPrice(data.price.toString());
                setImageUrl(data.image_url);
            }
        }
        fetchProduct();
    }, [id])

    async function updateProduct() {
        const { error } = await supabase.from("products").update({ name, price: parseFloat(price), image_url:imageUrl }).eq('id' ,id);

        if(error) {
            Alert.alert("Error", error.message);
        }else {
            Alert.alert("Succes", "Product updated !");
            router.back();
        }
    }
    return (
        <SafeAreaView className='flex-1 bg-gray-200 p-4'>
             <Text className='text-2xl font-bold text-blue-500' onPress={() => router.back()}>Go back to home</Text>
            <Text>Edit Product</Text>
            <View>
                <Text>Product Name</Text>
                <TextInput value={name} onChangeText={setName} className='border-2 border-gray-300 rounded-md p-2' />
            </View>
            <View>
                <Text>Product Price</Text>
                <TextInput value={price} onChangeText={setPrice} className='border-2 border-gray-300 rounded-md p-2' keyboardType='numeric'/>
            </View>
            <View>
                <Text>Product image URL</Text>
                <TextInput value={imageUrl} onChangeText={setImageUrl} className='border-2 border-gray-300 rounded-md p-2' />
            </View>
            <Button title='Update Product' onPress={updateProduct} />
        </SafeAreaView>
    )
}

export default EditScreen