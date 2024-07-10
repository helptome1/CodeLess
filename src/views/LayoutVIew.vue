<template>
  <div class="runtime">
    <h1>This is LayoutView</h1>
  </div>
  <RouterView></RouterView>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
