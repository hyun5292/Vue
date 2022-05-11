<template>
  <div class="nav-wrap">
    <i @click="ShowMenu()" class="fa-solid fa-bars" id="menu"></i>
    <nav class="nav" :class="[i_state ? 'show' : 'hide' ]">
      <router-link
        class="nav-li"
        v-for="(item, index) in nav_list"
        :key="index"
        :style="[PageName === item ? {color: '#f28907'} : {color: '#f0f0f2'}]"
        @click.native="ChangePage()"
        :to="item === 'Welcome' ? '/' : '/' + item"
      >{{item}}</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'headerCom',
  data() {
    return { 
      PageName: this.$route.name,
      nav_list: ['Welcome', 'Contact', 'Skills', 'Projects'],
      i_state: false,
    };
  },
  methods: {
    ChangePage() {
      this.PageName = this.$route.name;
    },
    ShowMenu() {
      this.i_state = !this.i_state;
      console.log(this.i_state);
    }
  }
}
</script>

<style lang="scss" scoped>
a, ul, li {
  list-style: none;
  text-decoration: none;
}

.nav-wrap {
  #menu {
    display: none;
  }
  .nav {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    .nav-li {
      padding: 0 10px;
      color: #f0f0f2;
        &:hover {
          color: #f29f05;
        }
    }
  }
}

.show {
  display: flex !important;
}
.hide {
  display: none;
}

//반응형
//메뉴 축소
@media (max-width: 768px) {
  .nav-wrap {
    #menu {
      display: block;
      font-size: 2rem;
    }
    .nav {
      position: absolute;
      display: none;
      flex-direction: column;
      top: 3rem;
      right: 0px;
      z-index: 10;
      border-radius: 0 0 0 1rem;
      background-color: rgba(38, 38, 38, 0.7);
    }
  }
}
</style>