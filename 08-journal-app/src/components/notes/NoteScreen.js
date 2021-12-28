import React from 'react';
import {NotesAppBar} from "./NotesAppBar";

export const NoteScreen = () => {
  return (
    <div className="notes__main-content">

      <NotesAppBar />

      <div className='notes__content'>

        <input
            type="text"
            placeholder="Some awesome title"
            className='notes__title-input'
            autoComplete="off"
        />
        <textarea
            placeholder="What happen today..."
            className='notes__textarea'
        />
        <div className='notes__image'>
          <img
              src='https://images.ctfassets.net/hrltx12pl8hq/61DiwECVps74bWazF88Cy9/2cc9411d050b8ca50530cf97b3e51c96/Image_Cover.jpg?fit=fill&w=480&h=270'
              alt="Note image"
          />
        </div>

      </div>

    </div>
  );
};