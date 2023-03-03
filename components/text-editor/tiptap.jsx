import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import {
  FaBold,
  FaHeading,
  FaItalic,
  FaListOl,
  FaListUl,
  FaQuoteLeft,
  FaRedo,
  FaStrikethrough,
  FaUnderline,
  FaUndo,
} from "react-icons/fa";
import CharacterCount from "@tiptap/extension-character-count";
import Highlight from "@tiptap/extension-highlight";
import { useEffect } from "react";
import Paragraph from "@tiptap/extension-paragraph";

const MenuBar = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="menuBar">
      <div>
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
        >
          <FaBold />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={editor.isActive("italic") ? "is_active" : ""}
        >
          <FaItalic />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={editor.isActive("underline") ? "is_active" : ""}
        >
          <FaUnderline />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={editor.isActive("strike") ? "is_active" : ""}
        >
          <FaStrikethrough />
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className={
            editor.isActive("heading", { level: 2 }) ? "is_active" : ""
          }
        >
          <FaHeading />
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          className={
            editor.isActive("heading", { level: 3 }) ? "is_active" : ""
          }
        >
          <FaHeading className="heading3" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive("bulletList") ? "is_active" : ""}
        >
          <FaListUl />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={editor.isActive("orderedList") ? "is_active" : ""}
        >
          <FaListOl />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={editor.isActive("blockquote") ? "is_active" : ""}
        >
          <FaQuoteLeft />
        </button>
      </div>
      <div>
        <button onClick={() => editor.chain().focus().undo().run()}>
          <FaUndo />
        </button>
        <button onClick={() => editor.chain().focus().redo().run()}>
          <FaRedo />
        </button>
      </div>
    </div>
  );
};

export const Tiptap = ({ setEditor, defaultTextHTML, setTextHTML, setTextString, setWordCount, scrollToPplSentence, handleUndo }) => {

  const editor = useEditor({
    // extensions
    extensions: [StarterKit, Underline, CharacterCount, Highlight.configure({
      multicolor: true
    }), Paragraph.configure({
      HTMLAttributes: {
        class: 'tiptap-paragraph',
      },
    })],
    content: ``,
    // when typed
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      const text = editor.getText();

      setWordCount(editor.storage.characterCount.words());
      setTextHTML(html);
      setTextString(text);

      addListenerToHighlights();

    },
    onTransaction: ({ editor, transaction }) => {
      console.log(editor);
      console.log(transaction);
    },
    // editorProps: {
    //   handleClickOn: (view, pos, node) => {
    //     console.log(view);
    //     console.log(pos);
    //     console.log(node);
    //   }
    // }
  });

  // Set editor for parent component
  useEffect(() => {
    setEditor(editor);
  }, [editor, setEditor]);

  // Set default text initially and also for future manual changes
  // defaultTextHTML is modified and this useEffect is triggered
  useEffect(() => {
    if (editor && editor.commands) {
      editor.commands.setContent(defaultTextHTML, true);
    }
  }, [editor, defaultTextHTML]);

  const highlightClickListener = (mark) => {
    const text = mark.innerText;
    scrollToPplSentence(text);
  }

  const addListenerToHighlights = () => {
    // get all mark elements
    const marks = document.querySelectorAll('mark');
    // loop through all mark elements
    marks.forEach(mark => {
        // remove click listener if it exists
        mark.removeEventListener('click', () => { });

        // add click event listener
        mark.addEventListener('click', () => highlightClickListener(mark));
    })
  }

  return (
    <div className="textEditor">
      <EditorContent editor={editor} />
    </div>
  );
};