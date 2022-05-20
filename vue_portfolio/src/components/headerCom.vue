<template>
  <div class="header">
    <div class="logo">
        <span>SUDOL</span> 
        <div id="text-port">Portfolio</div>
    </div>
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
  </div>
</template>

<script>
export default {
    name: 'HeaderCom',
    components: {

    },
}
</script>

<style lang="scss" scoped>
.header {
    
}
</style>