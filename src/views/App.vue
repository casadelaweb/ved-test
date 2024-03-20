<template>
  <header class="header">
    <div class="container">
      <div class="global-search-wrapper">
        <AutoComplete
          v-model:value="value"
          :options="searchMatches"
          @search="handleSearch">
          <template #option="item">
            <div style="display: flex; justify-content: space-between">
              {{ item.username }} {{ item.email }} {{ item.tel }}
            </div>
          </template>
          <InputSearch enter-button placeholder="input here" size="large"/>
        </AutoComplete>
      </div>
    </div>
  </header>

  <div class="container">
    <Table :columns="tableColumns"
           :data-source="dataSource"
           :loading="loading"
           class="table"/>
  </div>


</template>
<script lang="ts" setup>
import { AutoComplete, InputSearch, Table } from 'ant-design-vue'
import { iUser, iUsers, useStoreMain } from 'src/stores/storeMain.ts'
import { onMounted, Ref, ref } from 'vue'

const store = useStoreMain()
const value = ref('')
const loading = ref(false)
const dataSource: Ref<iUsers> = ref([])
const tableColumns = ref([
  {
    title: 'Имя',
    dataIndex: 'username',
    key: 'username',
  },
  {
    title: 'Электронная почта',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Номер телефона',
    dataIndex: 'tel',
    key: 'tel',
  },
])

function atLeastOnePropertyMatches(text: string, user: iUser) {
  if (typeof user === 'string') {
    return user.includes(text)
  }
  return Object.values(user).some(val => atLeastOnePropertyMatches(text, val))
}

const searchMatches = ref([])
const searchResults = (query: string) => {
  return dataSource.value.filter((user: iUser) => {
    return atLeastOnePropertyMatches(query, user)
  })
}
const handleSearch = (query: string) => {
  searchMatches.value = query ? searchResults(query) : []
}

onMounted(() => {
  loading.value = true
  setTimeout(() => {
    dataSource.value = store.fakeAPI
    loading.value = false
  }, 1000)
})
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  max-width: 1180px;
  padding: 0 20px;
}

.header {
  padding: 20px 0;
  border-bottom: 2px solid #f0f0f0;
  box-shadow: 4px 4px 16px 0 rgba(black, 0.1);
}

.table {
  margin: 80px 0;
  border-bottom: 2px solid #f0f0f0;
  box-shadow: 4px 4px 16px 0 rgba(black, 0.1);
}
</style>

