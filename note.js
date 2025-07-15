document.addEventListener('DOMContentLoaded', function () {
      //background====================================================================
      document.body.style.backgroundImage = "url('images/bkgrnd.jpeg')";
      document.body.style.backgroundSize = "cover";
      document.body.style.backgroundRepeat = "no-repeat";
      document.body.style.backgroundPosition = "center center";
      document.body.style.fontFamily = "'Dancing Script', cursive";

      //search container==================================================================
      const container = document.createElement("div");
      container.style.position = "absolute";
      container.style.top = "30px";
      container.style.right = "30px";
      container.style.left = "auto";
      container.style.transform = "none";
      container.style.display = "flex";
      container.style.borderRadius = "50px";
      container.style.overflow = "hidden";
      container.style.boxShadow = "0 4px 7px rgba(0, 0, 0, 0.2)";

      //form===============================================================================================
      const form = document.createElement("form");
      form.style.display = "flex";

      //search input==================================================================
      const searchInput = document.createElement("input");
      searchInput.id = "searchInput";
      searchInput.type = "text";
      searchInput.placeholder = "Search ur note ...";
      searchInput.style.color = "rgb(202, 199, 154)";
      searchInput.style.padding = "12px 20px";
      searchInput.style.fontSize = "16px";
      searchInput.style.border = "none";
      searchInput.style.outline = "none";
      searchInput.style.borderRadius = "50px 0 0 50px";
      searchInput.style.fontFamily = "inherit";
      searchInput.style.backgroundColor = "rgb(70, 105, 17)";
      form.appendChild(searchInput);

      //placeholder style for searchInput==================================================================
      const style = document.createElement('style');
      style.textContent = `
        #searchInput::placeholder {
          color: rgba(243, 235, 219, 1);
          opacity: 1;
        }
      `;
      document.head.appendChild(style);

      //clear search button========================================================================================
      const clearButton = document.createElement("button");
      clearButton.type = "button";
      clearButton.style.border = "none";
      clearButton.style.background = "rgb(70, 105, 17)";
      clearButton.style.borderRadius = "0";
      clearButton.style.cursor = "pointer";
      clearButton.style.padding = "12px 15px";
      clearButton.style.display = "flex";
      clearButton.style.alignItems = "center";
      clearButton.style.justifyContent = "center";

      const iconClear = document.createElement("img");
      iconClear.src = "images/tool.png";
      iconClear.alt = "clear";
      iconClear.style.width = "20px";
      iconClear.style.height = "20px";
      clearButton.appendChild(iconClear);
      form.appendChild(clearButton);

      //search button==================================================================
      const searchButton = document.createElement("button");
      searchButton.type = "submit";
      searchButton.style.border = "none";
      searchButton.style.background = "rgb(70, 105, 17)";
      searchButton.style.borderRadius = "0 50px 50px 0";
      searchButton.style.cursor = "pointer";
      searchButton.style.display = "flex";
      searchButton.style.alignItems = "center";
      searchButton.style.justifyContent = "center";
      searchButton.style.padding = "0 15px";

      const icon = document.createElement("img");
      icon.src = "images/loupe.png";
      icon.alt = "search";
      icon.style.width = "20px";
      icon.style.height = "20px";
      searchButton.appendChild(icon);
      form.appendChild(searchButton);

      //append form to container and container to body==================================================================
      container.appendChild(form);
      document.body.appendChild(container);

      //stickers==================================================================
      const sticker1 = document.createElement("img");
      sticker1.src = "images/rose.png";
      sticker1.alt = "Sticker 1";
      sticker1.style.position = "absolute";
      sticker1.style.top = "30px";
      sticker1.style.left = "50px";
      sticker1.style.width = "70px";
      sticker1.style.height = "70px";
      document.body.appendChild(sticker1);

      const sticker2 = document.createElement("img");
      sticker2.src = "images/green-star.png";
      sticker2.alt = "Sticker 2";
      sticker2.style.position = "absolute";
      sticker2.style.top = "10px";
      sticker2.style.right = "500px";
      sticker2.style.width = "70px";
      sticker2.style.height = "100px";
      document.body.appendChild(sticker2);

      const sticker3 = document.createElement("img");
      sticker3.src = "images/rose.png";
      sticker3.alt = "Sticker 3";
      sticker3.style.position = "absolute";
      sticker3.style.top = "10px";
      sticker3.style.left = "100px";
      sticker3.style.width = "100px";
      sticker3.style.height = "70px";
      document.body.appendChild(sticker3);

      const sticker4 = document.createElement("img");
      sticker4.src = "images/sticker-totoro.png";
      sticker4.alt = "Sticker 4";
      sticker4.style.position = "absolute";
      sticker4.style.top = "465px"; 
      sticker4.style.left = "430px"; 
      sticker4.style.width = "100px";
      sticker4.style.height = "90px";
      sticker4.style.zIndex = "-1"; 
      document.body.appendChild(sticker4);

      //note input card(left side)==================================================================
      const inputCard = document.createElement("div");
      inputCard.style.position = "absolute";
      inputCard.style.top = "100px";
      inputCard.style.left = "30px";
      inputCard.style.width = "400px";
      inputCard.style.height = "350px";
      inputCard.style.padding = "25px";
      inputCard.style.backgroundColor = "rgba(77, 105, 104, 1)";
      inputCard.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.1)";
      inputCard.style.borderRadius = "15px";
      inputCard.style.display = "flex";
      inputCard.style.flexDirection = "column";
      inputCard.style.justifyContent = "space-between";
      inputCard.style.fontFamily = "'D dancing Script', cursive";

      //title + textarea==================================================================
      const contentWrapper = document.createElement("div");
      contentWrapper.style.display = "flex";
      contentWrapper.style.flexDirection = "column";
      contentWrapper.style.gap = "10px";
      contentWrapper.style.flexGrow = "1";

      //title input==================================================================
      const titleInput = document.createElement("input");
      titleInput.type = "text";
      titleInput.placeholder = "Note Title";
      titleInput.style.padding = "10px";
      titleInput.style.fontSize = "16px";
      titleInput.style.border = "1px solid #ccc";
      titleInput.style.borderRadius = "8px";
      titleInput.style.backgroundColor = "rgba(202, 199, 154, 1)";
      titleInput.style.color = "rgb(70, 105, 17)";
      contentWrapper.appendChild(titleInput);

      //content textarea==================================================================
      const noteContent = document.createElement("textarea");
      noteContent.placeholder = "Note content...";
      noteContent.style.flexGrow = "1";
      noteContent.style.padding = "10px";
      noteContent.style.fontSize = "14px";
      noteContent.style.border = "1px solid #ccc";
      noteContent.style.borderRadius = "8px";
      noteContent.style.resize = "none";
      noteContent.style.backgroundImage = "url('images/jiji.jpeg')";
      noteContent.style.backgroundSize = "cover";
      noteContent.style.backgroundPosition = "center";
      noteContent.style.backgroundRepeat = "no-repeat";
      noteContent.style.color = "#000";
      noteContent.style.fontWeight = "bold";
      noteContent.style.whiteSpace = "pre-wrap";
      noteContent.style.overflowY = "auto";
      noteContent.style.boxSizing = "border-box";
      contentWrapper.appendChild(noteContent);

      inputCard.appendChild(contentWrapper);

      //save btn==================================================================
      const saveButton = document.createElement("button");
      saveButton.textContent = "Save Note";
      saveButton.style.padding = "6px 12px";
      saveButton.style.fontSize = "14px";
      saveButton.style.border = "none";
      saveButton.style.borderRadius = "6px";
      saveButton.style.backgroundColor = "rgb(63, 75, 66)";
      saveButton.style.color = "#fff";
      saveButton.style.cursor = "pointer";
      saveButton.style.alignSelf = "flex-end";
      saveButton.style.marginTop = "15px";

      inputCard.appendChild(saveButton);
      document.body.appendChild(inputCard);

      //saved notes card(right side)==================================================================
      const savedNotesCard = document.createElement("div");
      savedNotesCard.style.position = "absolute";
      savedNotesCard.style.top = "100px";
      savedNotesCard.style.right = "30px";
      savedNotesCard.style.width = "600px";
      savedNotesCard.style.height = "400px";
      savedNotesCard.style.padding = "25px";
      savedNotesCard.style.backgroundColor = "rgba(133, 155, 99, 0.93)";
      savedNotesCard.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.1)";
      savedNotesCard.style.borderRadius = "15px";
      savedNotesCard.style.overflowY = "auto";
      savedNotesCard.style.fontFamily = "'Dancing Script', cursive";
      document.body.appendChild(savedNotesCard);

      //================================================================================================
      const notesContainer = document.createElement("div");
      notesContainer.style.display = "flex";
      notesContainer.style.flexWrap = "wrap";
      notesContainer.style.gap = "20px";
      savedNotesCard.appendChild(notesContainer);

      //============================================================================================
      let notes = JSON.parse(localStorage.getItem("notes")) || [];
      let editingIndex = null;

      //func to display notes==================================================================
      function displayNotes(notesToDisplay) {
        notesContainer.innerHTML = "";
        notesToDisplay.forEach((note, index) => {
          const noteElement = document.createElement("div");
          noteElement.style.backgroundImage = "url('images/t.jpeg')";
          noteElement.style.backgroundSize = "cover";
          noteElement.style.backgroundPosition = "center";
          noteElement.style.backgroundRepeat = "no-repeat";
          noteElement.style.padding = "15px";
          noteElement.style.borderRadius = "8px";
          noteElement.style.border = "1px solid #ccc";
          noteElement.style.width = "calc(50% - 10px)";
          noteElement.style.boxSizing = "border-box";
          noteElement.style.cursor = "pointer";
          noteElement.style.height = "150px";
          noteElement.style.overflow = "hidden";
          noteElement.style.display = "flex";
          noteElement.style.flexDirection = "column";

          const noteTitle = document.createElement("h3");
          noteTitle.textContent = note.title;
          noteTitle.style.margin = "0 0 10px 0";
          noteTitle.style.color = "rgba(199, 188, 176, 1)";
          noteTitle.style.fontSize = "18px";
          noteTitle.style.overflow = "hidden";
          noteTitle
          noteTitle.style.textOverflow = "ellipsis";
          noteTitle.style.whiteSpace = "nowrap";

          const noteContentDisplay = document.createElement("p");
          const contentLines = note.content.split('\n').slice(0, 3).join('\n');
          noteContentDisplay.textContent = contentLines;
          noteContentDisplay.style.margin = "0";
          noteContentDisplay.style.fontSize = "14px";
          noteContentDisplay.style.color = "rgba(175 Detailed Response, 154, 129, 1)";
          noteContentDisplay.style.whiteSpace = "pre-wrap";
          noteContentDisplay.style.overflow = "hidden";
          noteContentDisplay.style.textOverflow = "ellipsis";
          noteContentDisplay.style.display = "-webkit-box";
          noteContentDisplay.style.webkitLineClamp = "3";
          noteContentDisplay.style.webkitBoxOrient = "vertical";
          noteContentDisplay.style.flexGrow = "1";
          if (note.content.split('\n').length > 3) {
            noteContentDisplay.textContent += '...';
          }

          //edit btn==================================================================
          const editButton = document.createElement("button");
          editButton.textContent = "Edit";
          editButton.style.padding = "5px 15px";
          editButton.style.fontSize = "12px";
          editButton.style.border = "none";
          editButton.style.borderRadius = "5px";
          editButton.style.backgroundColor = "rgba(91, 134, 34, 1)";
          editButton.style.color = "#fff";
          editButton.style.cursor = "pointer";
          editButton.style.marginTop = "10px";
          editButton.style.alignSelf = "flex-end";

          editButton.addEventListener("click", function (e) {
            e.stopPropagation();
            titleInput.value = note.title;
            noteContent.value = note.content;
            noteContent.scrollTop = 0;
            noteContent.focus();
            editingIndex = index;
            saveButton.textContent = "Update Note";
          });

          //delete btn==================================================================
          const deleteButton = document.createElement("button");
          deleteButton.textContent = "Delete";
          deleteButton.style.padding = "5px 7px";
          deleteButton.style.fontSize = "12px";
          deleteButton.style.border = "none";
          deleteButton.style.borderRadius = "5px";
          deleteButton.style.backgroundColor = "rgb(79, 91, 69)";
          deleteButton.style.color = "#fff";
          deleteButton.style.cursor = "pointer";
          deleteButton.style.marginTop = "10px";
          deleteButton.style.alignSelf = "flex-end";

          deleteButton.addEventListener("click", function (e) {
            e.stopPropagation();
            notes.splice(index, 1);
            localStorage.setItem("notes", JSON.stringify(notes));
            displayNotes(notes);
          });

          //click to show note===============--------===================================================
          noteElement.addEventListener("click", function () {
            showNoteModal(note);
          });

          //=====================================================================================================
          const buttonContainer = document.createElement("div");
          buttonContainer.style.display = "flex";
          buttonContainer.style.gap = "5px";
          buttonContainer.appendChild(deleteButton);
          buttonContainer.appendChild(editButton);

          noteElement.appendChild(noteTitle);
          noteElement.appendChild(noteContentDisplay);
          noteElement.appendChild(buttonContainer);
          notesContainer.appendChild(noteElement);
        });
      }

      //func to create and show full note==================================================================
      function showNoteModal(note) {
        const modalOverlay = document.createElement("div");
        modalOverlay.style.position = "fixed";
        modalOverlay.style.top = "0";
        modalOverlay.style.left = "0";
        modalOverlay.style.width = "100%";
        modalOverlay.style.height = "100%";
        modalOverlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        modalOverlay.style.display = "flex";
        modalOverlay.style.alignItems = "center";
        modalOverlay.style.justifyContent = "center";
        modalOverlay.style.zIndex = "1000";

        const modalContent = document.createElement("div");
        modalContent.style.backgroundColor = "rgb(142, 157, 118)";
        modalContent.style.padding = "20px";
        modalContent.style.borderRadius = "10px";
        modalContent.style.maxWidth = "500px";
        modalContent.style.width = "90%";
        modalContent.style.maxHeight = "80vh";
        modalContent.style.overflowY = "auto";
        modalContent.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.3)";
        modalContent.style.fontFamily = "'Dancing Script', cursive";
        modalContent.style.color = "rgb(246, 239, 231)";

        const modalTitle = document.createElement("h2");
        modalTitle.textContent = note.title;
        modalTitle.style.margin = "0 0 15px 0";
        modalTitle.style.fontSize = "24px";

        const modalText = document.createElement("p");
        modalText.textContent = note.content;
        modalText.style.margin = "0";
        modalText.style.fontSize = "16px";
        modalText.style.whiteSpace = "pre-wrap";

        const closeButton = document.createElement("button");
        closeButton.textContent = "Close";
        closeButton.style.padding = "8px 16px";
        closeButton.style.fontSize = "14px";
        closeButton.style.border = "none";
        closeButton.style.borderRadius = "5px";
        closeButton.style.backgroundColor = "rgb(63, 75, 66)";
        closeButton.style.color = "#fff";
        closeButton.style.cursor = "pointer";
        closeButton.style.marginTop = "20px";
        closeButton.style.float = "right";

        closeButton.addEventListener("click", function () {
          document.body.removeChild(modalOverlay);
        });

        modalOverlay.addEventListener("click", function (e) {
          if (e.target === modalOverlay) {
            document.body.removeChild(modalOverlay);
          }
        });

        modalContent.appendChild(modalTitle);
        modalContent.appendChild(modalText);
        modalContent.appendChild(closeButton);
        modalOverlay.appendChild(modalContent);
        document.body.appendChild(modalOverlay);
      }

      //func to filter notes based on search==================================================================
      function filterNotes(query) {
        const filteredNotes = notes.filter(
          (note) =>
            note.title.toLowerCase().includes(query) ||
            note.content.toLowerCase().includes(query)
        );
        displayNotes(filteredNotes);
      }

      //form submission 2 search==================================================================
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        const query = searchInput.value.trim().toLowerCase();
        if (query) {
          console.log("Searching for:", query);
          filterNotes(query);
        } else {
          displayNotes(notes);
        }
      });

      //clear search==================================================================
      clearButton.addEventListener("click", function () {
        searchInput.value = "";
        displayNotes(notes);
      });

      //save or update==================================================================
      saveButton.addEventListener("click", function () {
        const title = titleInput.value.trim();
        const content = noteContent.value.trim();

        if (title && content) {
          if (editingIndex !== null) {
            notes[editingIndex] = { title, content };
            editingIndex = null;
            saveButton.textContent = "Save Note";
          } else {
            const newNote = { title, content };
            notes.push(newNote);
          }
          localStorage.setItem("notes", JSON.stringify(notes));
          displayNotes(notes);
          titleInput.value = "";
          noteContent.value = "";
        }
      });

      //initial display of notes=================================================================================
      displayNotes(notes);
    });
