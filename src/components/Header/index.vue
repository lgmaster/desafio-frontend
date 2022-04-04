<template>
  <nav class="header navbar navbar-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img :src="require('@/assets/images/logo.png')" alt="Logo" height="80">
      </a>
      <form class="d-flex">
        <input class="form-control me-2 rounded-0"
        type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
      <div>
        <a href="#" class="link-primary">Create Account</a>
          <span class="ms-2 me-2">or</span>
        <a href="#" class="link-primary">Sign-In</a>
      </div>
    </div>
    <div class="container-fluid mt-1 pb-3 border-bottom">
      <div class="w-25"></div>
      <div class="btn-group" role="group" aria-label="Menu">
        <button type="button" class="btn border-end">Home</button>
        <button type="button" class="btn border-end">Videos</button>
        <button type="button" class="btn">Channels</button>
      </div>
      <div class="btn-group" role="group" aria-label="Menu">
        <button type="button" class="btn border-end">Subscriptions</button>
        <button type="button" class="btn border-end">History</button>
        <button type="button" class="btn">Uploads</button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss">
.header {
  .btn {
    border-radius: 0;

    &:hover {
      border-bottom: 1px solid black;
    }
  }
}
</style>
