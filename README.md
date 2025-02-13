Note App
A simple Note-taking app built with React that allows users to create, edit, filter, search, categorize, and delete notes.

Features
Create Notes: Add a new note with a title, category, and content.
Search and Filter: Search for notes by title and filter them by category.
Edit Notes: Edit the title, content, and category of existing notes.
Delete Notes: Remove notes from your list.
Categories: Organize your notes by specific categories (e.g., Work, School, Books, etc.).
Technologies Used
React: For building the user interface.
CSS: For styling the app.
useState & useEffect: React hooks for managing state and side-effects.
Installation
Prerequisites
Make sure you have Node.js installed.

Clone this repository:

bash
Copy
git clone https://github.com/yourusername/note-app.git
Navigate to the project directory:

bash
Copy
cd note-app
Install dependencies:

bash
Copy
npm install
Start the development server:

bash
Copy
npm start
The app will be available at http://localhost:3000.

How to Use
Create a Note: Click the button to open the create note form, enter the title, category, and content, then save it.
Search Notes: Use the search bar to filter notes by title (it matches from the beginning of the title).
Filter Notes by Category: Select a category from the dropdown to filter notes by their category.
Edit Notes: Click the edit button to modify a note's title, content, or category.
Delete Notes: Click the delete button to remove a note from the list.
Folder Structure
bash
Copy
/note-app
  /src
    /components
      NoteList.js      # Displays the list of notes
      NoteShow.js      # Displays each individual note
      CreateNote.js    # Form for creating new notes
      NavBar.js        # Navigation and search bar
    App.js             # Main app component, manages state and logic
    index.js           # Entry point, renders the app
    styles.css         # Global styles