<template>
    <div class="edit-note">
        <AddEditNote v-model="noteContent.content" bgColor="link" placeholder="Edit note" label="Edit note"
            ref="addEditNoteRef">
            <template #buttons>
                <button @click="$router.back()" class="button is-link is-light">Cancel</button>
                <button class="button is-link has-background-link" @click="handleSaveClicked"
                    :disabled="!noteContent">Save Note</button>
            </template>
        </AddEditNote>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import AddEditNote from '../components/Notes/AddEditNote.vue';
import { useStoreNotes } from '../stores/storeNotes.js';

const noteContent = ref('')

const storeNotes = useStoreNotes()
const route = useRoute()
const router = useRouter()

noteContent.value = storeNotes.getNoteContent(route.params.id)

const handleSaveClicked = () => {
    storeNotes.updateNote(route.params.id, noteContent.value)

    router.push('/')
}



</script>