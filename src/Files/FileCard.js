import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { Box } from '@chakra-ui/react'

export default function FileCard({ file, index }) {
    // styles for draggable task card
    const fileStyle = (isDragging, draggableStyle) => {
        let transform = draggableStyle.transform

        if (transform) {
            transform =
                'translate(0px' +
                transform.slice(transform.indexOf(','), transform.length)
        }
        return {
            ...draggableStyle,
            transform: transform,
            cursor: 'grab',
            marginTop: '16px',
            padding: '16px',
            borderRadius: '8px',
            backgroundColor: '#daf2f0',
        }
    }

    return (
        <Draggable key={file._id} draggableId={file._id} index={index}>
            {(provided, snapshot) => (
                <Box
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={fileStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style
                    )}
                    _hover={{
                        boxShadow: '0 8px 16px 0 rgba(56, 96, 165, 0.15)',
                    }}
                >
                    {file.name}
                </Box>
            )}
        </Draggable>
    )
}
