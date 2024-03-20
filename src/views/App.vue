<template>
  <header class="header">
    <div class="container">
      <div class="global-search-wrapper">
        <AutoComplete
          v-model:value="value"
          :options="dataSource"
          @search="handleSearch"
          @select="onSelect"
        >
          <template #option="item">
            <div>
              <span> Found {{ item.query }} on {{ item.category }} </span>
              <span>{{ item.count }} results</span>
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
import { useStoreMain } from 'src/stores/storeMain.ts'
import { onMounted, ref } from 'vue'

const store = useStoreMain()

interface Option {
  query: string;
  category: string;
  value: string;
  count: number;
}

const value = ref('')
const loading = ref(false)
const dataSource = ref([])
const tableColumns = ref([
  {
    title: 'username',
    dataIndex: 'username',
    key: 'username',
  },
  {
    title: 'email',
    dataIndex: 'email',
    key: 'email',
  },
])

onMounted(() => {
  loading.value = true
  setTimeout(() => {
    dataSource.value = store.fakeAPI
    loading.value = false
  }, 1000)
})
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

