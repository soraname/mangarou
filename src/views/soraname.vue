<template>
  <div class="soraname content-box">
  	<Autor v-bind="soraname"></Autor>
  </div>
</template>

<script>
import Autor from '@/components/Autores/Autor.vue';

export default {
  name: 'soraname',
  components: {
  	Autor
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>