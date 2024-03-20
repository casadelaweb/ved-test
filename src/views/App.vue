<template>
  <header class="header">
    <div class="container">
      <div class="global-search-wrapper">
        <AutoComplete
          v-model:value="value"
          :dropdown-match-select-width="252"
          :options="dataSource"
          style="width: 300px"
          @search="handleSearch"
          @select="onSelect"
        >
          <template #option="item">
            <div style="display: flex; justify-content: space-between">
          <span>
            Found {{ item.query }} on {{ item.category }}
          </span>
              <span>{{ item.count }} results</span>
            </div>
          </template>
          <InputSearch enter-button placeholder="input here" size="large"/>
        </AutoComplete>
      </div>
    </div>
  </header>

  <div class="container">
    <Table :columns="tableColumns" :data-source="dataSource" class="table"/>
  </div>


</template>
<script lang="ts" setup>
import { AutoComplete, InputSearch, Table } from 'ant-design-vue'
import { useStoreMain } from 'src/stores/storeMain.ts'
import { ref } from 'vue'

const store = useStoreMain()

interface Option {
  query: string;
  category: string;
  value: string;
  count: number;
}

const value = ref('')
const dataSource = ref(store.fakeAPI)
const tableColumns = ref([
  {
    title: 'Username',
    dataIndex: 'Username',
    key: 'Username',
    width: '33%',
  },
  {
    title: 'Email',
    dataIndex: 'Email',
    key: 'Email',
    width: '33%',
  },
])
// const dataSource = ref<Option[]>([])
// const onSelect = (value: string) => {
//   console.log('onSelect', value)
// }
//
// const getRandomInt = (max: number, min = 0) => {
//   return Math.floor(Math.random() * (max - min + 1)) + min
// }
//
// const searchResult = (query: string): Option[] => {
//   return new Array(getRandomInt(5))
//     .join('.')
//     .split('.')
//     .map((_item, idx) => ({
//       query,
//       category: `${ query }${ idx }`,
//       value: `${ query }${ idx }`,
//       count: getRandomInt(200, 100),
//     }))
// }
// const handleSearch = (val: string) => {
//   dataSource.value = val ? searchResult(val) : []
// }
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

