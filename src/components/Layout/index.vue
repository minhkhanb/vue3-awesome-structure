<template>
  <div class="main-layout">
    <header>header</header>

    <main>
      main content
      <slot />
    </main>

    <footer>footer</footer>
  </div>
</template>

<script>
export default {
  name: 'Layout',
};
</script>

<style scoped></style>
