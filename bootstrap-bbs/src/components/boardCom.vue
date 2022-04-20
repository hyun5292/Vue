<template>
  <div>
    <b-table striped hover :items="items" :fields="fields"></b-table>
  </div>
</template>

<script>
import data from '@/data'

export default {
  data() {
    return {
      fields: [
          {
              key: 'content_id',
              label: '글번호'
          },
          {
              key: 'title',
              label: '제목'
          },
          {
              key: 'created_at',
              label: '작성일'
          },
      ],
      items: data.Content
    }
  }
}
</script>