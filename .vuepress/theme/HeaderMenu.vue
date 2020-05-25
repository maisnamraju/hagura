<template>
  <div v-if="links.length > 0" id="header-menu">
    <router-link
      v-for="item in links"
      :key="item.href"
      :to="item.href"
    >
       {{ item.title }} 
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    links: Array
  }
}
</script>
<style>
#header-menu a {
  margin-right: 10px;
  font-size: 16px;
}
</style>
