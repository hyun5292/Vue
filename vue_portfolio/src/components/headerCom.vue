<template>
  <div class="nav-wrap">
    <div class="menu-wrap">
      <span>menu</span>
      <i class="fas fa-chevron-down" id="nav-icon"></i>
    </div>
    <nav class="nav">
      <router-link class="nav-li" to="/">Welcome</router-link>
      <router-link class="nav-li" to="/contact/">Contact</router-link>
      <router-link class="nav-li" to="/skills/">Skills</router-link>
      <router-link class="nav-li" to="/projects/">Projects</router-link>
    </nav>
  </div>
</template>

<script>
export default {
    name: 'headerCom',

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
        &:first-child {
          color: #f28907;
        }
        &:hover {
          color: #f29f05;
        }
    }
  }
}
</style>