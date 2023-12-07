import './index.css'
import React from 'react'
import ZipperIO from './ZipperIO'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <ChakraProvider>
        <ZipperIO />
    </ChakraProvider>
)
