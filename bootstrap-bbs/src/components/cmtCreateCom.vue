<template>
  <div class="comment-create">
      <b-input-group :prepend="name" class="mt-3">
          <b-form-textarea
            id="textarea"
            v-model="context"
            :placeholder="'코멘트를 달아주세요~!'"
            rows="3"
            max-rows="6"
          ></b-form-textarea>
      </b-input-group>
      <b-input-group-append>
          <b-button variant="info" @click="isSubComment ? createSubComment() : createComment()">작성하기</b-button>
      </b-input-group-append>
  </div>
</template>

<script>
import data from '@/data';

export default {
    name: "cmtCreateCom",
    props: {
        contentId: Number,
        commentId: Number,
        isSubComment: Boolean,
        reloadComment: Function,
        subCommentToggle: Function,
        reloadSubComments: Function,
    },
    data() {
        return {
            name: "르라나",
            context: ""
        }
    },
    methods: {
        createComment() {
            data.Comment.push(
                {
                    comment_id: data.Comment[data.Comment.length - 1].comment_id + 1,
                    user_id: 1,
                    content_id: this.contentId,
                    context: this.context,
                    created_at: '2022-04-25 14:11:11',
                    updated_at: null
                }
            );
            this.reloadComment();
            this.context = "";
        },
        createSubComment() {
            data.SubComment.push(
                {
                    subcomment_id: data.SubComment[data.SubComment.length - 1].subcomment_id + 1,
                    user_id: 1,
                    comment_id: this.commentId,
                    context: this.context,
                    created_at: '2022-04-25 14:11:11',
                    updated_at: null
                }
            );
            this.subCommentToggle();
            this.reloadSubComments();
            this.context = "";
        },
    }
}
</script>

<style scoped>
.comment-create {
  display: flex;
  margin-bottom: 1em;
}
</style>