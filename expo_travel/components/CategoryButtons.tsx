import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import ongo from '@/constants/Colors'
import destinationCategories from '@/data/categories'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const CategoryButtons = () => {
  return (
    <View>
      <Text style={styles.title}>Categories</Text>
      <ScrollView horizontal> 
        {destinationCategories.map((item, index)=>(
            <TouchableOpacity onPress={() => {}} style= {styles.categoryBtn}>
                <MaterialCommunityIcons 
                name={item.iconName as any} 
                size= {20} 
                color = {ongo.black}
                />
                <Text>{item.title}</Text>
            </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  )
}

export default CategoryButtons
const styles = StyleSheet.create({
    title: { 
        fontSize:22, 
        fontWeight: '700',
        color: ongo.black
    },
    categoryBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: ongo.white,
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 10,
        shadowColor: "#333333",
        shadowOffset: {width:1, height:2},
        shadowOpacity: 0.1,
        shadowRadius: 3,
    }
});

