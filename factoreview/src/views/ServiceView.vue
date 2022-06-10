<template>
  <div class="service">
    <SideBar />
    서비스 소개
  </div>
</template>

<script>
import SideBar from '@/views/SideBarView';

export default {
    name: 'ServiceView',
    components: {
        SideBar,
    }
}
</script>

<style lang="scss" scoped>
.service {
    display: flex;
    color: black;
}
</style>