<template>
    <div class="card mb-3">
        <div class="card-content">
            <div class="content">
                {{ note.content }}
                <div class="has-text-right has-text-grey-light mt-2">
                    <small>{{ characterLength }}</small>
                </div>
            </div>
        </div>
        <footer class="card-footer">
            <RouterLink :to="`/editNote/${note._id}`" href="#" class="card-footer-item">Edit</RouterLink>
            <a @click.prevent="modals.deleteNote = true" href="#" class="card-footer-item">Delete</a>
        </footer>
        <ModalDeleteNotes v-if="modals.deleteNote" v-model="modals.deleteNote" :noteId="note._id" />
    </div>
</template>

<script setup>
import { computed, reactive } from 'vue';
import ModalDeleteNotes from './ModalDeleteNotes.vue';

const props = defineProps({
    note: {
        type: Object,
        required: true
    }
})

const characterLength = computed(() => {
    let description = props.note.content.length > 1 ? 'characters' : 'character'
    return `${props.note.content.length} ${description}`
})

const modals = reactive({
    deleteNote: false
})
</script>