<template>
    <div class="notes">
        <AddEditNote v-model="newNote" placeholder="Add a new note" ref="addEditNoteRef">
            <template #buttons>
                <button @click="addNote" :disabled="!newNote" class="button is-link has-background-success">Add New
                    Note</button>
            </template>
        </AddEditNote>

        <Notes v-for="note in storeNotes.notes" :key="note._id" :note='note' />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useStoreNotes } from '../stores/storeNotes.js'

import Notes from '../components/Notes/Notes.vue';
import AddEditNote from '../components/Notes/AddEditNote.vue';

const storeNotes = useStoreNotes()

const newNote = ref('')
const addEditNoteRef = ref(null)

const addNote = () => {
    storeNotes.addNote(newNote.value)
    newNote.value = ''
    addEditNoteRef.value.focusTextarea()
}
</script>