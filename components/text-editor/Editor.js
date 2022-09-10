import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import React from 'react';
import styles from './Editor.module.scss';
import Button from '../ui/button/Button';
import {
  BoldIcon,
  BulletIcon,
  HeaderIcon,
  ItalicIcon,
  LinkIcon,
  OrderedListIcon,
  ParagraphIcon,
} from '../../utils/icons/Icons';

const MenuBar = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <div className={styles.editor__menu}>
      <>
        <Button
          title='Bold'
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={
            editor.isActive('bold')
              ? `${styles.editor__menuBtn} is-active`
              : `${styles.editor__menuBtn}`
          }
          type='button'
        >
          <BoldIcon />
        </Button>
        <Button
          title='Italic'
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={
            editor.isActive('bold')
              ? `${styles.editor__menuBtn} is-active`
              : `${styles.editor__menuBtn}`
          }
          type='button'
        >
          <ItalicIcon />
        </Button>
        <Button
          title='Paragraph'
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={
            editor.isActive('bold')
              ? `${styles.editor__menuBtn} is-active`
              : `${styles.editor__menuBtn}`
          }
          type='button'
        >
          <ParagraphIcon />
        </Button>
        <Button
          title='Heading'
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          className={
            editor.isActive('bold')
              ? `${styles.editor__menuBtn} is-active`
              : `${styles.editor__menuBtn}`
          }
          type='button'
        >
          <HeaderIcon />
        </Button>
        <Button
          title='Bulleted List'
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={
            editor.isActive('bold')
              ? `${styles.editor__menuBtn} is-active`
              : `${styles.editor__menuBtn}`
          }
          type='button'
        >
          <BulletIcon />
        </Button>
        <Button
          title='Ordered List'
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={
            editor.isActive('bold')
              ? `${styles.editor__menuBtn} is-active`
              : `${styles.editor__menuBtn}`
          }
          type='button'
        >
          <OrderedListIcon />
        </Button>
        <Button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={
            editor.isActive('bold')
              ? `${styles.editor__menuBtn} is-active`
              : `${styles.editor__menuBtn}`
          }
          type='button'
        >
          <LinkIcon />
        </Button>
      </>
    </div>
  );
};

const Tiptap = (props) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: '',
  });

  const getEditorContentInHTML = function () {
    const editorContent = editor.getHTML();
    props.getEditorContent(editorContent);
  };

  return (
    <div>
      <MenuBar editor={editor} />
      <EditorContent
        editor={editor}
        className={styles.editor}
        onBlur={getEditorContentInHTML}
      />
    </div>
  );
};

export default Tiptap;
