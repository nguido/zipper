import React from 'react'
import FileList from './FileList'
import FileSubmit from './FileSubmit'
import FileUploader from './FileUploader'

export default function FileContainer() {
    // file variables accessed throughout the app
    const [files, setFiles] = React.useState([])

    return (
        <>
            <FileUploader files={files} setFiles={setFiles} />
            <FileList files={files} setFiles={setFiles} />
            <FileSubmit files={files} />
        </>
    )
}
