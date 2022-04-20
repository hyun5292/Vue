<template>
  <div>
    <b-table striped hover :items="items" :fields="fields" @row-clicked="rowClick"></b-table>
  </div>
</template>

<script>
import data from '@/data'

export default {
  data() {
    let items = data.Content.sort((a,b) => { return b.content_id - a.content_id });
    items = items.map(contentItem => { return { ...contentItem, user_name: data.User.filter(userItem => userItem.user_id === contentItem.user_id)[0].name } });

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
          {
              key: 'user_name',
              label: '글쓴이'
          },
      ],
      items: items
    }
  },
  methods: {
      rowClick(item) {
          this.$router.push({
              path: `/board/free/detail/${item.content_id}`
          });
      }
  }
}
</script>