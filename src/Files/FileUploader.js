import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useDropzone } from 'react-dropzone'
import { Flex, Text } from '@chakra-ui/react'
import { DownloadIcon } from '@chakra-ui/icons'

export default function FileUploader({ files, setFiles }) {
    // handle file upload
    const onDrop = React.useCallback((acceptedFiles) => {
        acceptedFiles.forEach((file) => {
            file._id = uuidv4()
        })
        setFiles([...files, ...acceptedFiles])
    })

    // init dropzone props
    const { getRootProps, getInputProps } = useDropzone({ onDrop })

    return (
        <Flex
            {...getRootProps()}
            bg="rgba(225, 225, 225, 0.5)"
            mt="16px"
            h="120px"
            w="50%"
            minW="320px"
            maxW="480px"
            borderRadius="16px"
            outline="1px dashed rgba(225, 225, 225)"
            justify="center"
            alignItems="center"
            cursor="pointer"
            direction="column"
        >
            <input {...getInputProps()} />
            <DownloadIcon boxSize={6} color="#bdb9b9" mb="8px" />
            <Text fontWeight="bold" color="#bdb9b9">
                Drop files here or click to upload
            </Text>
        </Flex>
    )
}
