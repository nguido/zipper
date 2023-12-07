import React from 'react'
import JSZip from 'jszip'
import { saveAs } from 'file-saver'
import {
    Flex,
    Input,
    Button,
    InputGroup,
    InputRightAddon,
} from '@chakra-ui/react'

export default function FileSubmit({ files }) {
    const zip = new JSZip()
    const [zipName, setZipName] = React.useState('zipperboi')

    const changeZipName = (event) => {
        setZipName(event.target.value)
    }

    const zipFiles = async () => {
        files.forEach((file) => {
            zip.file(file.name, file)
        })

        zip.generateAsync({ type: 'blob' }).then((blob) => {
            saveAs(blob, zipName)
        })
    }

    return (
        <Flex direction="column">
            <InputGroup>
                <Input
                    value={zipName}
                    onChange={changeZipName}
                    focusBorderColor="#4bb6c4"
                />
                <InputRightAddon children=".zip" />
            </InputGroup>
            <Button onClick={zipFiles} w="280px" mt="16px">
                Zip Files
            </Button>
        </Flex>
    )
}
