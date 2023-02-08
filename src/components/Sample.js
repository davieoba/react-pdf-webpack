import React from 'react'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5'

// import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
// import 'react-pdf/dist/esm/Page/TextLayer.css'
import sample from './burmese.pdf'

export const Sample = () => {
  return (
    <Document file={sample}>
      <Page />
    </Document>
  )
}
