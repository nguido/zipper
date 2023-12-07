import React from 'react'
import FileContainer from './Files/FileContainer'
import { Flex, Text } from '@chakra-ui/react'

export default function ZipperIO() {
    return (
        <Flex
            direction="column"
            alignItems="center"
            p="96px"
            h="100vh"
            w="100vw"
        >
            <Text fontSize="6xl" fontWeight="bold" fontFamily="Montserrat">
                zipper io
            </Text>
            <FileContainer />
        </Flex>
    )
}
