import {defineStore} from 'pinia';
import {Lesson} from 'components/models';

export const useLessonsStore = defineStore('lessons', {
  state: () => {
    if (localStorage.getItem('piniaState'))
      return JSON.parse(localStorage.getItem('piniaState')!);
    return {
      lessons: [
        {
          id: 1,
          title: 'Lesson 1',
          subtitle: 'This lesson about...1',
          video_url: '__-vp0g_BhA',
          video_time: 150,
          description: 'Lorem 111 ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi, blanditiis consequuntur cumque dignissimos dolore earum ex facere fuga ipsa nobis odit omnis saepe sed similique, tempore, voluptate. At, pariatur.',
          isButtonDisabled: false
        },
        {
          id: 2,
          title: 'Lesson 2',
          subtitle: 'This lesson about...2',
          video_url: 'Zri-IB-QaP0',
          video_time: 3260,
          description: 'Lorem 222 ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi, blanditiis consequuntur cumque dignissimos dolore earum ex facere fuga ipsa nobis odit omnis saepe sed similique, tempore, voluptate. At, pariatur.',
          isButtonDisabled: true
        },
        {
          id: 3,
          title: 'Lesson 3',
          subtitle: 'This lesson about...3',
          video_url: 'v4qymvKaWaA',
          video_time: 60, // тут нужно высчитать длительность видео в десятых долях секунд. То есть одна секунда - это 10
          description: 'Lorem 333 ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi, blanditiis consequuntur cumque dignissimos dolore earum ex facere fuga ipsa nobis odit omnis saepe sed similique, tempore, voluptate. At, pariatur.',
          isButtonDisabled: true
        },
        {
          id: 4,
          title: 'Lesson 4',
          subtitle: 'This lesson about...4',
          video_url: 'FIjXrN8w6_k',
          video_time: 60,
          description: 'Lorem 444 ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi, blanditiis consequuntur cumque dignissimos dolore earum ex facere fuga ipsa nobis odit omnis saepe sed similique, tempore, voluptate. At, pariatur.',
          isButtonDisabled: true
        },
        {
          id: 5,
          title: 'Lesson 5',
          subtitle: 'This lesson about...5',
          video_url: 'kISLReswjco',
          video_time: 60,
          description: 'Lorem 555 ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi, blanditiis consequuntur cumque dignissimos dolore earum ex facere fuga ipsa nobis odit omnis saepe sed similique, tempore, voluptate. At, pariatur.',
          isButtonDisabled: true
        },
        {
          id: 6,
          title: 'Lesson 6',
          subtitle: 'This lesson about...6',
          video_url: 'Vrj5ZE5yiBo',
          video_time: 60,
          description: 'Lorem 666 ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi, blanditiis consequuntur cumque dignissimos dolore earum ex facere fuga ipsa nobis odit omnis saepe sed similique, tempore, voluptate. At, pariatur.',
          isButtonDisabled: true
        },
      ] as Lesson[]
    }
  },
  getters: {},
  actions: {
    buttonDisabledHandler(lessonId: number) {
      this.lessons[lessonId].isButtonDisabled = false;
    },
  },
});
