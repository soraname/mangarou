<template>
  <div class="home">

      <div class="row">
          <div id="slider" class="col s12">
          	<slider></slider>
          </div>
      </div>

      <div class="row title-section">
          <div class="col s12">
              <h2>Atualizações</h2>
          </div>
      </div>

      <div class="row">
          <div class="col s12 m4 news-box">
              <h4>Título</h4>
              <p>
                  <img src="https://via.placeholder.com/150">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dignissim dictum massa vitae tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque congue iaculis arcu, sit amet congue nunc consequat et. Suspendisse feugiat feugiat massa vel vestibulum.
              </p>
          </div>
          <div class="col s12 m4 news-box">
              <h4>Título</h4>
              <p>
                  <img src="https://via.placeholder.com/150">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dignissim dictum massa vitae tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque congue iaculis arcu, sit amet congue nunc consequat et. Suspendisse feugiat feugiat massa vel vestibulum.
              </p>
          </div>
          <div class="col s12 m4 news-box">
              <h4>Título</h4>
              <p>
                  <img src="https://via.placeholder.com/150">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dignissim dictum massa vitae tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque congue iaculis arcu, sit amet congue nunc consequat et. Suspendisse feugiat feugiat massa vel vestibulum.
              </p>
          </div>
      </div>

  </div>
</template>

<script>

import Slider from '@/components/Slider.vue'

export default {
  name: 'home',
  components: {
  	Slider
  },
  mounted: function () {
  	sliderload();
  }
}


</script>
