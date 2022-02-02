<template>
  <div class="root">

    <!-- NAVBAR -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
      <div class="navbar-content">
        <!-- Logo -->
        <a class="navbar-brand mx-0" href="#">U2 Album Explorer</a> 

        <!-- Searchbar -->
        <div class="navbar-searchbar">
          <div class="input-group">
            <div class="container">
              <div class="row height d-flex justify-content-center align-items-center">
                <div class="navbar-search-form d-flex">                  
                  <!-- Search input box -->
                  <input type="search"
                      class="navbar-searchbar-input form-control m-0 " 
                      v-model="searchQuery"
                      v-on:keyup="onAlbumSearch()"
                      :placeholder="searchbarPlaceholder"
                      aria-label="Search"
                  >                  
                  <!-- Search button  -->
                  <button class="btn btn-primary navbar-searchbar-button" v-on:click="onAlbumSearch()">
                    <Magnify />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <!-- PAGE CONTENT  -->
    <div class="page-container">      
      <!-- ALBUMS -->
      <div class="loading-container" v-show="!showAlbumList"> 
        <div class="loading-content">
          <h2>{{ loadingText.main }}</h2>
          <small><i>{{loadingText.small}}</i></small>
        </div>
      </div>
  
      <AlbumList :albums="albumsFiltered" v-show="showAlbumList" />
    </div>
  </div>
</template>

<script>
import AlbumList from './components/AlbumList.vue' 
import { Magnify } from 'mdue';

let searchTimer = "";
let searchDebounceTime = 350;
 
export default {
  name: 'App',
  components: { 
    AlbumList,
    Magnify
  },
  data(){
    return {
      albums: [],
      albumsFiltered: [],
      showAlbumList: false,
      loadingText: {
        main: `Loading the best albums ever on the face of the planet Earth`,
        small: "It might take a while (intentionally) for demo purposes"
      },
      searchbarPlaceholder:"Search by album's name" 
    }
  },
  created() { // Life-cycle event hook
    setTimeout(() => {
      // Making the user wait intentionally just for demo purposes to show the pre-loader 
      this.fetchAlbums();
    }, 3000);
  },
  methods: {
    // Fetch Albums by artistId
    async fetchAlbums() {
      const artistId = 78500; // U2 artist id
      const url = `/api/artist/${artistId}/albums/?entity=album`;

      console.log("Fetching Albums from API at " + url);
      return await fetch(url)
        .then((res) => res.json())
        .then((success) => {
          // console.log('Fetch Success:', success.data); 
          this.albums = success.data;
          this.albumsFiltered = success.data;
          this.showAlbumList = true;
          
          return success.data;
        })
        .catch((error) => {
          console.error('Fetch Error:', error);
          return [];
        });
    },

    onAlbumSearch() {  
      // It holds until the user has ended typing in the search bar    
      clearTimeout(searchTimer);
      searchTimer = setTimeout(()=>{
        if (this.searchQuery === "") this.albumsFiltered = [...this.albums];
              else {
                console.log(`Filtering albums by name ${this.searchQuery}`);
                this.albumsFiltered = this.albums.filter(x => x.collectionName.toLowerCase().includes(this.searchQuery.toLowerCase()));
              }
      }, searchDebounceTime);
      
    },
  }
}
</script>

<style>
html, #app {
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
  display: flex;
  justify-items: space-between;
}

.navbar-content > * {
  flex: 2 4 auto;
}
.navbar-content .navbar-brand {
  text-align: left;
  padding-left: 1em;  
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

.navbar-searchbar { 
  /* margin: auto 0 auto auto; */
}

.navbar-searchbar .navbar-search-form input {
  height: auto;
  /* text-indent: 2rem 2rem 2rem 2rem; */
  border: 2px solid #d6d4d4;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  /* position: relative;
  box-shadow: 0 0 40px rgba(51, 51, 51, .1) */
}
 
.navbar .navbar-searchbar .navbar-searchbar-button {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  position:relative;
  left: -2px;
}
</style>
