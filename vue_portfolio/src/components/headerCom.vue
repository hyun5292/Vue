<template>
  <div class="nav-wrap">
    <div class="menu-wrap">
      <span>menu</span>
      <i class="fas fa-chevron-down" id="nav-icon"></i>
    </div>
    <nav class="nav">
      <ul class="nav-list">
        <li><a href="#welcome-section">Welcome</a></li>
        <li><a href="#contact-section">Contact</a></li>
        <li><a href="#skill-section">Skills</a></li>
        <li><a href="#project-section">Projects</a></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
    name: 'headerCom',

}
</script>

<style lang="scss" scoped>
//Color in Hex
$orange-dark: #f28907;

* {
  margin: 0;
  padding: 0;
  font-family: "Pretendard-Regular";
  font-size: 1.5rem;
  font-weight: 400;
  text-align: center;
  line-height: 1.5;
  color: #f0f0f2;
}

a, ul, li {
  text-decoration: none;
  list-style: none;
}

.nav-wrap {
  margin-right: 18px;
  .menu-wrap {
    position: relative;
    width: 85px;
    height: 36px;
    display: none;
    font-size: 1.5rem;
    span {
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
    }
    #nav-icon {
      position: absolute;
      top: 22%;
      right: 0;
    }
    &:hover {
      opacity: 0.3;
      cursor: pointer;
    }
  }
  .nav {
    .nav-list {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      li {
        padding: 0px 10px;
        &:first-child {
          color: $orange-dark;
        }
        &:last-child {
          padding-right: 0px;
        }
      }
    }
  }
}
</style>