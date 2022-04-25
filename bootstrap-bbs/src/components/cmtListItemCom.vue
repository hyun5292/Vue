<template>
  <div class="comment-list-item">
      <div class="comment-list-item-name">
          <div>{{ name }}</div>
          <div>{{ commentObj.created_at }}</div>
      </div>
      <div class="comment-list-item-context">{{ commentObj.context }}</div>
      <div class="comment-list-item-button">
          <b-button variant="info">수정</b-button>
          <b-button variant="info">삭제</b-button>
      </div>
  </div>
</template>

<script>
import data from '@/data';

export default {
    name: "cmtListItemCom",
    props: {
        commentObj: Object,
    },
    data() {
        return  {
            name: data.User.filter(
                item => item.user_id === this.commentObj.user_id
            )[0].name,
        }
    }
}
</script>

<style scoped>
.comment-list-item {
  display: flex;
  justify-content: space-between;
  padding-bottom: 1em;
}
.comment-list-item-name {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 0.5px solid black;
  padding: 1em;
}
.comment-list-item-context {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50em;
  border: 0.5px solid black;
}
.comment-list-item-button {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 0.5px solid black;
  padding: 1em;
}
.btn {
  margin-bottom: 1em;
}
.comment-list-item-subcomment-list {
  display: flex;
  justify-content: space-between;
  padding-bottom: 1em;
  margin-left: 10em;
}
</style>