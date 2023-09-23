import React from 'react'
import { Text } from 'react-native'
import { THEME } from '../../constants/Theme'

export default function Header() {
  return (
    <Text style={{ fontFamily: 'Mulish_500Medium', fontSize: 40,color:THEME.COLORS.primaryTextColor }}>mulish</Text>
  )
}
