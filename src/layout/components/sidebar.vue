<template>
  <div class="sidebar">
    <div class="logo-wrap">
      <div class="logo">LOGO</div>
    </div>
    <div class="menu">
      <router-link class="link" :to="{ name: 'all-books'}">
        <img src="@/assets/img/all-books.png" width="11" height="13">&nbsp;&nbsp;All Books
      </router-link>
      <router-link class="link" :to="{ name: 'borrowed-books'}">
        <img src="@/assets/img/borrowed-books.png" width="11" height="13">&nbsp;&nbsp;Borrowed Books
      </router-link>
      <router-link class="link" :to="{ name: 'users'}">
        <img src="@/assets/img/borrowed-books.png" width="11" height="13">&nbsp;&nbsp;Users
      </router-link>
    </div>
  </div>
</template>
<style>
.sidebar {
  background: rgba(0, 21, 41, 1);
}
.sidebar .logo-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 280px;
  height: 64px;
  background: rgba(0, 33, 64, 1);
}
.sidebar .logo-wrap .logo {
  width: 109px;
  height: 49px;
  text-align: center;
  line-height: 49px;
  background: #707070;
  color: #000;
}
.sidebar .menu {
  display: flex;
  flex-direction: column;
  color: #fff;
  margin-top: 20px;
}
.sidebar .menu .link {
  font-size: 14px;
  font-family: Arial;
  font-weight: 400;
  line-height: 16px;
  color: rgba(255, 255, 255, 0.65);
  text-decoration: none;
  padding: 10px 20px;
}
.sidebar .menu .router-link-active {
  color: #fff;
  background: rgba(24, 144, 255, 1);
}
</style>
