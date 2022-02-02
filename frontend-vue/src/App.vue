<template>
  <div class="root">

    <!-- NAVBAR -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
      <div class="navbar-content">
        <a class="navbar-brand" href="#">iTunes Artist's Album Explorer</a> 
      </div>
    </nav>

    <!-- <div class="searchbox">
      <form class="d-flex">
        <input class="form-control me-0" type="search" placeholder="Search" aria-label="Search" value="468749">
        <button class="btn btn-primary" type="submit">Search</button>
      </form>  
    </div> -->


    <!-- ALBUMS -->
    <div class="page-container">
      <AlbumList :albums = "albums" />
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
      albums: []
    }
  },
  created() {
    this.albums = [{
      wrapperType: "collection",
      collectionType: "Album",
      artistId: 909253,
      collectionId: 1440857781,
      amgArtistId: 468749,
      artistName: "Jack Johnson",
      collectionName: "In Between Dreams (Bonus Track Version)",
      collectionCensoredName: "In Between Dreams (Bonus Track Version)",
      artistViewUrl:
        "https://music.apple.com/us/artist/jack-johnson/909253?uo=4",
      collectionViewUrl:
        "https://music.apple.com/us/album/in-between-dreams-bonus-track-version/1440857781?uo=4",
      artworkUrl60:
        "https://is4-ssl.mzstatic.com/image/thumb/Music125/v4/db/d9/1a/dbd91afa-044d-637b-c557-847863c85a79/source/60x60bb.jpg",
      artworkUrl100:
        "https://is4-ssl.mzstatic.com/image/thumb/Music125/v4/db/d9/1a/dbd91afa-044d-637b-c557-847863c85a79/source/100x100bb.jpg",
      collectionPrice: 6.99,
      collectionExplicitness: "notExplicit",
      trackCount: 16,
      copyright: "℗ 2013 Jack Johnson",
      country: "USA",
      currency: "USD",
      releaseDate: "2005-03-01T08:00:00Z",
      primaryGenreName: "Rock",
    },
    {
      wrapperType: "collection",
      collectionType: "Album",
      artistId: 909253,
      collectionId: 1440854851,
      amgArtistId: 468749,
      artistName: "Jack Johnson",
      collectionName: "Sleep Through the Static",
      collectionCensoredName: "Sleep Through the Static",
      artistViewUrl:
        "https://music.apple.com/us/artist/jack-johnson/909253?uo=4",
      collectionViewUrl:
        "https://music.apple.com/us/album/sleep-through-the-static/1440854851?uo=4",
      artworkUrl60:
        "https://is2-ssl.mzstatic.com/image/thumb/Music125/v4/c4/65/6a/c4656ad0-6f0b-0b8b-152d-0236b86ace39/source/60x60bb.jpg",
      artworkUrl100:
        "https://is2-ssl.mzstatic.com/image/thumb/Music125/v4/c4/65/6a/c4656ad0-6f0b-0b8b-152d-0236b86ace39/source/100x100bb.jpg",
      collectionPrice: 15.99,
      collectionExplicitness: "notExplicit",
      trackCount: 15,
      copyright: "℗ 2014 Jack Johnson",
      country: "USA",
      currency: "USD",
      releaseDate: "2008-02-01T08:00:00Z",
      primaryGenreName: "Rock",
    },
    {
      wrapperType: "collection",
      collectionType: "Album",
      artistId: 909253,
      collectionId: 1440851963,
      amgArtistId: 468749,
      artistName: "Jack Johnson",
      collectionName: "To the Sea (Bonus Track Version)",
      collectionCensoredName: "To the Sea (Bonus Track Version)",
      artistViewUrl:
        "https://music.apple.com/us/artist/jack-johnson/909253?uo=4",
      collectionViewUrl:
        "https://music.apple.com/us/album/to-the-sea-bonus-track-version/1440851963?uo=4",
      artworkUrl60:
        "https://is3-ssl.mzstatic.com/image/thumb/Music114/v4/2a/ee/04/2aee045d-12b0-84f2-56df-1c357118c63f/source/60x60bb.jpg",
      artworkUrl100:
        "https://is3-ssl.mzstatic.com/image/thumb/Music114/v4/2a/ee/04/2aee045d-12b0-84f2-56df-1c357118c63f/source/100x100bb.jpg",
      collectionPrice: 9.99,
      collectionExplicitness: "notExplicit",
      trackCount: 15,
      copyright: "℗ 2014 Jack Johnson",
      country: "USA",
      currency: "USD",
      releaseDate: "2010-06-01T07:00:00Z",
      primaryGenreName: "Rock",
    },
    {
      wrapperType: "collection",
      collectionType: "Album",
      artistId: 909253,
      collectionId: 1435611352,
      amgArtistId: 468749,
      artistName: "Jack Johnson",
      collectionName: "From Here to Now to You",
      collectionCensoredName: "From Here to Now to You",
      artistViewUrl:
        "https://music.apple.com/us/artist/jack-johnson/909253?uo=4",
      collectionViewUrl:
        "https://music.apple.com/us/album/from-here-to-now-to-you/1435611352?uo=4",
      artworkUrl60:
        "https://is2-ssl.mzstatic.com/image/thumb/Music124/v4/bb/d4/3d/bbd43d98-7095-3c70-336a-b0cde2df20c9/source/60x60bb.jpg",
      artworkUrl100:
        "https://is2-ssl.mzstatic.com/image/thumb/Music124/v4/bb/d4/3d/bbd43d98-7095-3c70-336a-b0cde2df20c9/source/100x100bb.jpg",
      collectionPrice: 9.99,
      collectionExplicitness: "notExplicit",
      trackCount: 12,
      copyright: "℗ 2013 Jack Johnson",
      country: "USA",
      currency: "USD",
      releaseDate: "2013-09-17T07:00:00Z",
      primaryGenreName: "Rock",
    },
    {
      wrapperType: "collection",
      collectionType: "Album",
      artistId: 909253,
      collectionId: 1440752312,
      amgArtistId: 468749,
      artistName: "Jack Johnson",
      collectionName:
        "Jack Johnson & Friends - Best of Kokua Festival (A Benefit for the Kokua Hawaii Foundation)",
      collectionCensoredName:
        "Jack Johnson & Friends - Best of Kokua Festival (A Benefit for the Kokua Hawaii Foundation)",
      artistViewUrl:
        "https://music.apple.com/us/artist/jack-johnson/909253?uo=4",
      collectionViewUrl:
        "https://music.apple.com/us/album/jack-johnson-friends-best-of-kokua-festival-a/1440752312?uo=4",
      artworkUrl60:
        "https://is4-ssl.mzstatic.com/image/thumb/Music124/v4/68/ca/d4/68cad45e-e7b7-e8f9-067e-cef6d8fb2f04/source/60x60bb.jpg",
      artworkUrl100:
        "https://is4-ssl.mzstatic.com/image/thumb/Music124/v4/68/ca/d4/68cad45e-e7b7-e8f9-067e-cef6d8fb2f04/source/100x100bb.jpg",
      collectionPrice: 8.99,
      collectionExplicitness: "notExplicit",
      trackCount: 15,
      copyright: "This Compilation ℗ 2012 Brushfire Records Inc",
      country: "USA",
      currency: "USD",
      releaseDate: "2012-01-01T08:00:00Z",
      primaryGenreName: "Rock",
    },
    {
      wrapperType: "collection",
      collectionType: "Album",
      artistId: 909253,
      collectionId: 1440851725,
      amgArtistId: 468749,
      artistName: "Jack Johnson",
      collectionName: "En Concert (Live)",
      collectionCensoredName: "En Concert (Live)",
      artistViewUrl:
        "https://music.apple.com/us/artist/jack-johnson/909253?uo=4",
      collectionViewUrl:
        "https://music.apple.com/us/album/en-concert-live/1440851725?uo=4",
      artworkUrl60:
        "https://is3-ssl.mzstatic.com/image/thumb/Music124/v4/c3/a1/04/c3a104db-4caa-4ecf-55d1-ae1fa9947d94/source/60x60bb.jpg",
      artworkUrl100:
        "https://is3-ssl.mzstatic.com/image/thumb/Music124/v4/c3/a1/04/c3a104db-4caa-4ecf-55d1-ae1fa9947d94/source/100x100bb.jpg",
      collectionPrice: 9.99,
      collectionExplicitness: "notExplicit",
      trackCount: 20,
      copyright: "℗ 2014 Jack Johnson",
      country: "USA",
      currency: "USD",
      releaseDate: "2009-10-26T07:00:00Z",
      primaryGenreName: "Rock",
    },
    {
      wrapperType: "collection",
      collectionType: "Album",
      artistId: 909253,
      collectionId: 906900960,
      amgArtistId: 468749,
      artistName: "Jack Johnson",
      collectionName: "Brushfire Fairytales (Remastered) [Bonus Version]",
      collectionCensoredName:
        "Brushfire Fairytales (Remastered) [Bonus Version]",
      artistViewUrl:
        "https://music.apple.com/us/artist/jack-johnson/909253?uo=4",
      collectionViewUrl:
        "https://music.apple.com/us/album/brushfire-fairytales-remastered-bonus-version/906900960?uo=4",
      artworkUrl60:
        "https://is5-ssl.mzstatic.com/image/thumb/Music115/v4/8a/00/26/8a00262b-136e-32de-29ba-3e0a0280e2f6/source/60x60bb.jpg",
      artworkUrl100:
        "https://is5-ssl.mzstatic.com/image/thumb/Music115/v4/8a/00/26/8a00262b-136e-32de-29ba-3e0a0280e2f6/source/100x100bb.jpg",
      collectionPrice: 9.99,
      collectionExplicitness: "notExplicit",
      trackCount: 15,
      copyright: "℗ 2011 Everloving Records",
      country: "USA",
      currency: "USD",
      releaseDate: "2011-04-12T07:00:00Z",
      primaryGenreName: "Rock",
    }];
  }
}
</script>

<style>
#app {
  position: relative;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color:#ccc;
  margin: 0;
  padding: 0;
} 

.navbar {
  position: fixed !important; 
  z-index: 9999;
  width: 100%;
  opacity: .95;
}
.navbar-content {
  flex: 1 1 auto; 
}
.page-container {
  position: relative;
  margin: 0;
  padding: 0;
  display: flex; 
} 
</style>




