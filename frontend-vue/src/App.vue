<template>
  <div class="root">

    <!-- NAVBAR -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
      <div class="navbar-content">
        <a class="navbar-brand" href="#">U2 Album Explorer</a> 
      </div>
    </nav>

    <!-- <div class="searchbox">
      <form class="d-flex">
        <input class="form-control me-0" type="search" placeholder="Search" aria-label="Search" value="78500">
        <button class="btn btn-primary" type="submit">Search</button>
      </form>  
    </div> -->

    <div class="page-container">      
      <!-- ALBUMS -->
      <div class="loading-container" v-show="!showAlbumList"> 
        <div class="loading-content">
          <h2>{{ loadingText.main }}</h2>
          <small><i>{{loadingText.small}}</i></small>
        </div>
      </div>
  
      <AlbumList :albums="albums" v-show="showAlbumList" />
    </div>
  </div>
</template>

<script>
import AlbumList from './components/AlbumList.vue'
 
export default {
  name: 'App',
  components: { 
    AlbumList
  },
  data(){
    return {
      albums: [],
      showAlbumList: false,
      loadingText: {
        main: `Loading the best albums ever on the face of the planet Earth`,
        small: "It might take a while (intentionally) for demo purposes"
      }
    }
  },
  created() { // Life-cycle event hook
    setTimeout(() => {
      // Making the user wait intentionally just for demo purposes to show the pre-loader 
      this.fetchAlbums();
    }, 4000);
  },
  methods: {
    // Fetch Albums by artistId
     async fetchAlbums(){
      const artistId = 78500; // U2 artist id
      const url = `/api/artist/${artistId}/albums/?entity=album`;

      console.log("Mocking Albums API response at "+url);
 


      console.log("Fetching Albums from API at "+url);
      return await fetch(url)
        .then((res) => res.json())
        .then((success) => {
          // console.log('Fetch Success:', success.data); 
          this.albums = success.data;
          this.showAlbumList = true;
          return success.data;
        })
        .catch((error) => {
          console.error('Fetch Error:', error);
          return [];
        });
      }
  }
}
</script>

<style>
html,#app {
  margin: 0;
  padding: 0;
  color: #2c3e50;
  background-color:#ccc;
  box-sizing: border-box;
}
#app {
  position: relative;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  
} 

.navbar {
  position: fixed !important; 
  z-index: 9999;
  width: 100%;
  height: 4rem;
  opacity: .95;
  top: 0;
}
.navbar-content {
  flex: 1 1 auto; 
}
.page-container {
  position: relative;
  margin: 0;
  padding: 0;
  margin-top: 4rem;
}
.loading-container {
  margin-top: 4rem;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-items: center; 
  color: rgba(0, 0, 0, .618);
}
.loading-content {
  flex: 1 1 auto;
} 
</style>




