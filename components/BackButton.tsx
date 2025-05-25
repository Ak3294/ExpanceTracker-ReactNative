import { colors, radius } from '@/constants/theme';
import { BackButtonProps } from '@/types';
import { verticalScale } from '@/utils/styling';
import { useRouter } from 'expo-router';
import { CaretLeft } from 'phosphor-react-native';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

const BackButton = ({style,iconSize=20}:BackButtonProps) => {
    const router = useRouter();
  return (
    <TouchableOpacity onPress={()=>router.back()} style={[styles.button, style]}>
        <CaretLeft size={verticalScale(iconSize)} weight='bold' color='white'/>
    </TouchableOpacity>
  )
}

export default BackButton

const styles = StyleSheet.create({
    button:{
        backgroundColor:colors.neutral600,
        padding:verticalScale(10),
        borderRadius:radius._12,
       alignSelf:"flex-start",
        borderCurve:"continuous"
    }
})