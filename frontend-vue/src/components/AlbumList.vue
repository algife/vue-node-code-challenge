<template> 
  <div class="album-list-grid">
      <!-- ALBUM SHOWCASE -->
      <div class="card album-list-element" 
            v-for="item in albums" 
            :key="item.collectionName" 
            @click="onAlbumCardClicked()"
      >
        <img class="card-img-top" :src="item.artworkUrl100" :alt="item.artworkUrl100"> 
        <div class="card-body">
          <!-- // ! card title -->
          <h5 class="card-title">{{ item.collectionName }} 
            <span class="artist-name">by {{ item.artistName }}</span>
          </h5>
          <!-- // ! card action button -->
          <div class="card-action-buttons">
            <a :href="item.collectionViewUrl" class="btn btn-primary">See details</a>
          </div>
        </div>
      </div>
      <!-- end of album showcase -->
  </div>
</template>

<script> 
export default {
  name: "AlbumList",
  components: [ 
  ],
  props: {
    albums: Array,
    // TO USE ON SEARCH  -- .filter(function (item) {return item.mensaje.match(/Foo/)})
  },
  methods: {
    onAlbumCardClicked(){
      console.log("Album card has been clicked!");
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.album-list-grid { 
  width: 100vw;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly; 
  align-content: space-evenly;
}
.album-list-element {
  flex: 1 1 calc(25% - 5rem);
  min-width: 12.5rem;
  max-width: 22rem;
  max-height: 33rem;
  margin: 1rem;
  box-shadow: .1rem .1rem .1rem .1rem rgba(0,0,0, .25);
}
.artist-name {
  opacity: .75; 
  font-size: .7em;
  display: block;
}
</style>