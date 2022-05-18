<template>
  <div class="nav-wrap">
    <i @click="i_state = !i_state" class="fa-solid fa-bars" id="menu"></i>
    <Transition name="slide-fade">
      <nav v-if="i_state" class="nav">
        <router-link
          class="nav-li"
          v-for="(item, index) in nav_list"
          :key="index"
          :style="[PageName === item ? {color: '#f28907'} : {color: '#f0f0f2'}]"
          @click.native="changePage()"
          :to="item === 'Welcome' ? '/' : '/' + item"
        >{{item}}</router-link>
      </nav>
    </Transition>
  </div>
</template>

<script>
export default {
  name: 'headerCom',
  data() {
    return { 
      PageName: this.$route.name,
      nav_list: ['Welcome', 'Contact', 'Skills', 'Projects'],
      i_state: true,
    };
  },
  mounted() {
        window.addEventListener('resize', this.checkWidth);
	},
  beforeDestroy() {
        window.removeEventListener('resize', this.checkWidth);
  },
  methods: {
    changePage() {
      this.PageName = this.$route.name;
    },
    checkWidth() {
      var width = window.innerWidth;
      if(width > 768) {
        this.i_state = true;
      }
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
          color: #f29f05 !important;
        }
    }
  }
}

.slide-fade-enter-active {
  transition: all 0.5s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(50px);
  opacity: 0;
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
      flex-direction: column;
      top: 72px;
      right: 0px;
      z-index: 10;
      border-radius: 0 0 0 1rem;
      background-color: rgba(38, 38, 38, 0.7);
    }
  }
}
</style>