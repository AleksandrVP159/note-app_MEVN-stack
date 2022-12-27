import { defineStore } from "pinia";

export const useStoreNotes = defineStore("storeNotes", {
  state: () => {
    return {
      notes: [],
    };
  },
  actions: {
    async getNote() {
      try {
        await fetch("http://localhost:3000/notes")
          .then((res) => res.json())
          .then((data) => {
            this.notes = data;
          });
      } catch (err) {
        console.log(err);
      }
    },

    async addNote(newNoteContent) {
      const response = await fetch("http://localhost:3000/notes/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content: newNoteContent }),
      });

      const responseData = await response.json();

      if (!response.ok) {
        const error = new Error(
          responseData.message || "Failed to send request!"
        );
        throw error;
      }

      let newNote = {
        id: responseData._id,
        content: responseData.content,
      };
      this.notes.unshift(newNote);
    },

    async deleteNote(idToDelete) {
      const response = await fetch(
        `http://localhost:3000/notes/delete/${idToDelete}`,
        {
          method: "DELETE",
        }
      );

      const responseData = await response.json();

      if (!response.ok) {
        const error = new Error(
          responseData.message || "Failed to send request!"
        );
        throw error;
      }
    },
    async updateNote(id, content) {
      await fetch(`http://localhost:3000/notes/update/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: content.content,
        }),
      })
        .then((res) => res.body)
        .then((res) => console.log(res));
    },
  },
  getters: {
    getNoteContent: (state) => {
      return (id) => {
        return state.notes.filter((note) => note._id === id)[0];
      };
    },
    totalNotesCount: (state) => {
      return state.notes.length;
    },
    totalCharactersCount: (state) => {
      let count = 0;
      state.notes.forEach((note) => {
        count += note.content.length;
      });
      return count;
    },
  },
});
