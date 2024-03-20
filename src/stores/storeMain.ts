import { defineStore } from 'pinia'

export interface iUser {
  key: string | number,
  tel: string,
  username: string,
  email: string,
}

export type iUsers = Array<iUser>

export const useStoreMain = defineStore('storeMain', {
  state() {
    return {
      fakeAPI: [
        { key: '1', tel: '8 800 986 45 45', username: 'test', email: 'test@test.ru' },
        { key: '2', tel: '8 800 121 35 54', username: 'Виктор', email: 'viktor@test.ru' },
        { key: '3', tel: '8 800 121 45 78', username: 'Виталий', email: 'vitt@test.ru' },
        { key: '4', tel: '8 800 755 45 45', username: 'Роберт', email: 'rob@gmail.com' },
        { key: '5', tel: '8 800 121 45 91', username: 'Фредерико', email: 'riko@gmail.com' },
        { key: '6', tel: '8 800 121 39 45', username: 'John', email: 'john12345@netflix.com' },
        { key: '7', tel: '8 800 777 66 45', username: 'Fedor', email: 'fedya67@mail.ru' },
        { key: '8', tel: '8 800 544 45 45', username: 'Igor', email: 'igorecky@gmail.com' },
        {
          key: '9',
          tel: '8 800 453 45 45',
          username: 'test 12346789003214',
          email: 'test@test.ru'
        },
      ] as iUsers,
    }
  },
  getters: {},
  actions: {}
})
