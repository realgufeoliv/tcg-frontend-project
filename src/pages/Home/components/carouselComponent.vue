<template>
  <div class="q-pb-sm">
    <q-carousel
      autoplay="true"
      infinite="true"
      v-model="slide"
      swipeable
      animated
      :navigation-position="navPos"
      navigation
      height="300px"
      class="bg-white text-white rounded-borders"
    >
      <q-carousel-slide name="style" class="column no-wrap flex-center">
        <div class="text-center q-ma-none q-pa-none">
          <q-img src="/carouselimg.png" height="300px" width="1250px"></q-img>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="tv" class="column no-wrap flex-center">
        <div class="text-center q-ma-none q-pa-none">
          <q-img
            src="/carrousselImage2.png"
            height="300px"
            width="1250px"
          ></q-img>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="layers" class="column no-wrap flex-center">
        <div class="text-center q-ma-none q-pa-none">
          <q-img src="/carouselimg3.png" height="300px" width="1250px"></q-img>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="map" class="column no-wrap flex-center">
        <div class="text-center q-ma-none q-pa-none">
          <q-img src="/carouselimg4.png" height="300px" width="1250px"></q-img>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      navPos: ref("bottom"),
      navigationPositions: [
        { value: "top", label: "top" },
        { value: "right", label: "right" },
        { value: "bottom", label: "bottom (default)" },
        { value: "left", label: "left" },
      ],

      slide: ref("style"),
      lorem:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.",
    };
  },
};
</script>
