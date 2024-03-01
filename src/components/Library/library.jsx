import React from 'react';
import { useNavigate } from 'react-router-dom';
import './library.css'; // Import CSS file for styling

function Library() {
    return (
      <div className="full-page">
          <div className="library-container">
              <div className="my-library">My Library</div>
          </div>

          <div className="create-story">
            
            <div className='inside-create-story'>
              Create a new Story
              
            </div>
          </div>
        </div>
    );
}

export default Library;
