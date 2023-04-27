<template>
  <div class="q-px-sm">
    <h3>{{ props.data.title }}</h3>
    <h5>{{ props.data.subtitle }}</h5>
    <YoutubeVue3
      controls="1"
      ref="youtube"
      :videoid="props.data.video_url"
      :width="480"
      :height="320"
      @paused="onPaused"
      @played="onPlayed"
    />
    <p>{{ props.data.description }}</p>
  </div>
</template>

<script setup lang="ts">
import {YoutubeVue3} from 'youtube-vue3'
import {useLessonsStore} from 'stores/example-store';
import {ref, watch} from 'vue';
import {Lesson} from 'components/models';

interface IProps {
  data: Lesson
}

const props = defineProps<IProps>()

const emit = defineEmits<{
  (e: 'show-tip'): void
}>()

const store = useLessonsStore();

const {buttonDisabledHandler} = store;
// тут и так и так можно
// const id = computed(() => props.data.id)
const id = ref(props.data.id)
let timerId: NodeJS.Timeout
let timerValue = ref<number>(0)

watch(timerValue, () => {
  if (timerValue.value === props.data.video_time) {
    buttonDisabledHandler(id.value)
    clearInterval(timerId)
    emit('show-tip')
  }
})

watch(
  store,
  (lessons) => {
    localStorage.setItem('piniaState', JSON.stringify(lessons))
  },
  {deep: true}
)

const onPlayed = () => {
  timerId = setInterval(() => {
    timerValue.value++
  }, 100)
}

const onPaused = () => {
  clearInterval(timerId)
}
</script>
