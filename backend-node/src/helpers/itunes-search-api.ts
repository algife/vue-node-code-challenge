import axios, { AxiosResponse } from "axios";
import { iTunesAlbumCollectionType } from "../models/album";
import dummyItunesData from "./dummy-itunes-data";
import { iTunesArtistAlbumApiResponse } from "./../models/album.d";

/** 
 * Documentation: https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/
 * Endpoint Syntax: https://itunes.apple.com/search?key1=value1&key2=value2&key3=value3&callback="myJSFunctionName"

// ! Search Example
==============
To search for all Jack Johnson music videos (ignoring audio) content of the Canada iTunes Store and return only the first 25 items:
https://itunes.apple.com/search?term=jack+johnson&limit=25&entity=musicVideo&country=ca

// ! Lookup Search
=============
Lookup requests allow us to search for content in the stores based on iTunes IDs, UPCs/ EANs, and All Music Guide (AMG) IDs. ID-based lookups are faster and contain fewer false-positive results.
Example to Look up Jack Johnson by iTunes artist ID: https://itunes.apple.com/lookup?id=909253

// ! For more info, check the documentation.
*/
export const iTunesLookUp = async (
  amgArtistId: string = "468749",
  entity: string = "album"
) => {
  // // const baseEndpoint = "https://itunes.apple.com/search/";
  // // const url = `${baseEndpoint}?term=${searchTerm}`; // &limit=10&country=ca&entity=musicVideo

  // Look up all albums for Jack Johnson:
  const apiLookUpBaseUrl = "https://itunes.apple.com/lookup";
  const reqUrl = `${apiLookUpBaseUrl}/?entity=${entity.toLowerCase()}&amgArtistId=${amgArtistId}`;

  // TODO Comment next line to retrieve REAL data from iTunes
  // -- Added here temporarily for dev purposes to avoid unnecessary requests to the real API
  return parseAlbumsByArtistResults(dummyItunesData, entity);

  const apiResponse: any = await axios
    .get(reqUrl)
    .then(({ status, data }): iTunesArtistAlbumApiResponse => {
      // Parse results to filter the artist info and return just the albums

      if (status === 200) return parseAlbumsByArtistResults(data, entity);

      // else  return { resultCount: 0, results: [] };
      throw new Error(
        "Problems with the request to iTunes Search APi for query url: " +
          reqUrl
      );
    })
    .catch((err: Error) => {
      console.error(err);
      return "Error: " + err.message;
    });

  return apiResponse;
};

const parseAlbumsByArtistResults = (
  data: iTunesArtistAlbumApiResponse,
  entity: string = "album"
): iTunesArtistAlbumApiResponse => {
  // Remove duplicated results filtered by collectionName + remove the results that are not albums (the first one is artist info and not an album of the artist, for some reason)

  // ! Removing duplicates with a hashMap for a better efficiency
  // As per requirements:
  // -- we need albums only and not other kind of data sent in the response
  // -- we need to avoid duplicates by album's name so we make use of the hashmap keys for that because
  // -- It is far more efficient than other potential solutions
  const hashMap: { [key: string]: iTunesAlbumCollectionType } = {};

  for (let i = 0; i < data.results.length; i++) {
    const item = data.results[i];

    if (
      item.collectionType?.toLowerCase() === entity.toLowerCase() &&
      item.hasOwnProperty("collectionName") &&
      hashMap[item.collectionName] === undefined // there is no record for this album in the hashmap
    )
      hashMap[item.collectionName] = item;

    // ! Uncomment for easier debugging
    // else {
    //   console.log(
    //     "Result excluded. This is a duplicated result or not an album:",
    //     {
    //       position: i,
    //       item,
    //       existingHashMapRecord: hashMap[item.collectionName],
    //     }
    //   );
    // }
  }

  // Prepare the results and return them
  const parsedResults = Object.values(hashMap) as iTunesAlbumCollectionType[];
  return {
    resultCount: parsedResults.length,
    results: parsedResults,
  };
};
