import CheckList from '@editorjs/checklist'
import Code from '@editorjs/code'
import Delimiter from '@editorjs/delimiter'
import Embed from '@editorjs/embed'
import Header from '@editorjs/header'
import Image from '@editorjs/image'
import InlineCode from '@editorjs/inline-code'
import LinkTool from '@editorjs/link'
import List from '@editorjs/list'
import Marker from '@editorjs/marker'
import Paragraph from '@editorjs/paragraph'
import Quote from '@editorjs/quote'
import Raw from '@editorjs/raw'
import SimpleImage from '@editorjs/simple-image'
import Table from '@editorjs/table'

export const EDITOR_TOOLS = {
  embed: { class: Embed, inlineToolbar: true },
  table: { class: Table, inlineToolbar: true },
  paragraph: { class: Paragraph, inlineToolbar: true },
  list: { class: List, inlineToolbar: true },
  code: { class: Code, inlineToolbar: true },
  linkTool: { class: LinkTool, inlineToolbar: true },
  image: { class: Image, inlineToolbar: true },
  raw: { class: Raw, inlineToolbar: true },
  header: { class: Header, inlineToolbar: true },
  quote: { class: Quote, inlineToolbar: true },
  marker: { class: Marker, inlineToolbar: true },
  checklist: { class: CheckList, inlineToolbar: true },
  delimiter: { class: Delimiter, inlineToolbar: true },
  inlineCode: { class: InlineCode, inlineToolbar: true },
  simpleImage: { class: SimpleImage, inlineToolbar: true },
}

export const defaultData = (noteId?: number) => ({
  blocks: [
    {
      type: 'header',
      data: {
        text: `Note ID: ${noteId}`,
        level: 2,
      },
    },
    {
      type: 'header',
      data: {
        text: 'What are we learning today?',
        level: 3,
      },
    },
    {
      type: 'paragraph',
      data: {
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        level: 3,
      },
    },
  ],
})
