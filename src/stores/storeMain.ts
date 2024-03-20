import { defineStore } from 'pinia'

export const useStoreMain = defineStore('storeMain', {
  state() {
    return {
      fakeAPI: [
        { key: '1', username: 'test', email: 'test@test.ru' },
        { key: '2', username: 'Виктор', email: 'viktor@test.ru' },
        { key: '3', username: 'Виталий', email: 'vitt@test.ru' },
        { key: '4', username: 'Роберт', email: 'rob@gmail.com' },
        { key: '5', username: 'Фредерико', email: 'riko@gmail.com' },
        { key: '6', username: 'John', email: 'john12345@netflix.com' },
        { key: '7', username: 'Fedor', email: 'fedya67@mail.ru' },
        { key: '8', username: 'Igor', email: 'igorecky@gmail.com' },
        { key: '9', username: 'test 12346789003214', email: 'test@test.ru' },
      ]
      ,
    }
  },
  getters: {},
  actions: {}
})
