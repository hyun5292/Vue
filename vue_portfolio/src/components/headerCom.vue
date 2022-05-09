<template>
  <div class="nav-wrap">
    <div class="menu-wrap">
      <span>menu</span>
      <i class="fas fa-chevron-down" id="nav-icon"></i>
    </div>
    <nav class="nav">
      <router-link 
        class="nav-li"
        :style="[PageName === 'Welcome' ? {color: '#f28907'} : {color: '#f0f0f2'}]"
        @click.native="ChangePage()"
        to="/"
      >Welcome</router-link>
      <router-link 
        class="nav-li" 
        :style="[PageName === 'Contact' ? {color: '#f28907'} : {color: '#f0f0f2'}]"
        @click.native="ChangePage()"
        to="/Contact/"
      >Contact</router-link>
      <router-link 
        class="nav-li" 
        :style="[PageName === 'Skills' ? {color: '#f28907'} : {color: '#f0f0f2'}]"
        @click.native="ChangePage()"
        to="/Skills/"
      >Skills</router-link>
      <router-link 
        class="nav-li" 
        :style="[PageName === 'Projects' ? {color: '#f28907'} : {color: '#f0f0f2'}]"
        @click.native="ChangePage()"
        to="/Projects/"
      >Projects</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'headerCom',
  data() {
    return { 
      PageName: this.$route.name,
      list: ['Welcome', 'Contact', 'Skills', 'Projects']
    };
  },
  methods: {
    ChangePage() {
      this.PageName = this.$route.name;
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
  .menu-wrap {
    display: none;
    #nav-icon {

    }
    &:hover {
      
    }
  }
  .nav {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    .nav-li {
      padding: 0 10px;
      color: #f0f0f2;
        // &:first-child {
        //   color: #f28907;
        // }
        &:hover {
          color: #f29f05;
        }
    }
  }
}
</style>