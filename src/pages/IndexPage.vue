<template>

  <q-layout
    view="hHh LpR fff"
    container
    style="height: 100vh"
  >
    <q-header elevated>
      <q-toolbar>

        <q-toolbar-title>
          Atom App
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <lesson-component :data="lessons[lessonNumber - 1]" @show-tip="showTipHandler"/>
      <q-banner v-if="showTip" inline-actions rounded class="bg-orange text-white">
        Now you can watch next video
      </q-banner>
    </q-page-container>

    <q-drawer
      class="flex justify-center"
      side="right"
      v-model="drawerRight"
      :width="200"
      :breakpoint="700"
      bordered
    >
      <q-btn
        v-for="lesson in lessons"
        :key="lesson.id"
        @click="changeLesson(lesson.id)" color="orange"
        :icon="lesson.isButtonDisabled ? 'lock' : 'lock_open'" :label="lesson.title"
        :disable="lesson.isButtonDisabled"
      />

    </q-drawer>

  </q-layout>

</template>

<script setup lang="ts">
import {useLessonsStore} from 'stores/example-store';
import {storeToRefs} from 'pinia';
import LessonComponent from 'components/LessonComponent.vue';
import {ref} from 'vue';

const store = useLessonsStore();
const {lessons} = storeToRefs(store);
const lessonNumber = ref<number>(1)
const drawerRight = ref<boolean>(true)
const showTip = ref<boolean>(false)

const changeLesson = (id: number) => {
  lessonNumber.value = id
  showTip.value = false
}

const showTipHandler = () => showTip.value = true
</script>
