<template>
  <div>
      <div :key="item.comment_id" v-for="item in comments">
          <CmtListItem :commentObj="item" />
      </div>
      <CmtCreate :contentId="contentId" :reloadComment="reloadComment"/>
  </div>
</template>

<script>
import data from '@/data';
import CmtListItem from './cmtListItemCom.vue';
import CmtCreate from './cmtCreateCom.vue';

export default {
    name: 'cmtListCom',
    props: {
        contentId: Number,
    },
    components: {
        CmtListItem,
        CmtCreate,
    },
    data() {
        return {
            comments: data.Comment.filter(item => item.content_id === this.contentId)
        }
    },
    methods: {
        reloadComment() {
            this.comments = data.Comment.filter(item => item.content_id === this.contentId)
        }
    }
}
</script>

<style>

</style>