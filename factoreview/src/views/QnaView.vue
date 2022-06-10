<template>
  <div class="qna">
    <SideBar />
    문의하기
  </div>
</template>

<script>
import SideBar from '@/views/SideBarView';

export default {
    name: 'QnaView',
    components: {
        SideBar,
    }
}
</script>

<style lang="scss" scoped>

.qna {
    display: flex;
    color: black;
}

</style>