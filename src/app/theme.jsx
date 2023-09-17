"use client"
import { extendTheme } from "@chakra-ui/react";

// Incluir custom options here.
const theme = extendTheme({
  colors: {
    brand: {
      300: '#FF0000',
      500: '#B40404',
    }
  },
})

export default theme;