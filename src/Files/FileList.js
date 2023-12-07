import React from 'react'
import FileCard from './FileCard'
import { Flex } from '@chakra-ui/react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'

export default function FileList({ files, setFiles }) {
    // container styling during drag
    const dragStyle = (isDraggingOver) => ({
        cursor: isDraggingOver ? 'grabbing' : 'grab',
    })

    // sort file order after dnd
    const onDragEnd = (result) => {
        const { destination, source } = result
        const newIndex = destination ? destination.index : source.index

        if (newIndex === source.index) {
            return
        } else {
            const newFilesList = [...files]
            const draggedTask = newFilesList[source.index]

            newFilesList.splice(source.index, 1)
            newFilesList.splice(newIndex, 0, draggedTask)

            setFiles(newFilesList)
            return
        }
    }

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable
                droppableId="droppable"
                style={{
                    height: '420px',
                    width: '420px',
                    background: 'red',
                }}
            >
                {(provided, snapshot) => (
                    <Flex
                        ref={provided.innerRef}
                        style={dragStyle(snapshot.isDraggingOver)}
                        {...provided.droppableProps}
                        direction="column"
                        m="16px"
                        p="16px"
                        h="80%"
                        w="50%"
                        minW="320px"
                        maxW="480px"
                        minH="400px"
                        maxH="600px"
                        borderRadius="16px"
                        outline="2px solid #4bb6c4"
                    >
                        {files.map((file, index) => (
                            <FileCard
                                file={file}
                                index={index}
                                key={file._id}
                            />
                        ))}
                        {provided.placeholder}
                    </Flex>
                )}
            </Droppable>
        </DragDropContext>
    )
}
