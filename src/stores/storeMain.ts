import { defineStore } from 'pinia'

export const useStoreMain = defineStore('storeMain', {
  state() {
    return {
      fakeAPI: [
        { username: 'test', email: 'test@test.ru' },
        { username: 'Виктор', email: 'viktor@test.ru' },
        { username: 'Виталий', email: 'vitt@test.ru' },
        { username: 'Роберт', email: 'rob@gmail.com' },
        { username: 'Фредерико', email: 'riko@gmail.com' },
        { username: 'John', email: 'john12345@netflix.com' },
        { username: 'Fedor', email: 'fedya67@mail.ru' },
        { username: 'Igor', email: 'igorecky@gmail.com' },
        { username: 'test 12346789003214', email: 'test@test.ru' },
      ]
    }
  },
  getters: {},
  actions: {}
})
