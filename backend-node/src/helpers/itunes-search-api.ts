import { Request, Response } from "express";
import axios, { AxiosResponse } from "axios";
import { iTunesSearchData } from "../models/album";
import dummyItunesData from "./dummy-itunes-data";

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
export const getFromiTunesSearchAPI = async (_req: Request, _res: Response) => {
  const baseEndpoint = "https://itunes.apple.com/search";
  const url = `${baseEndpoint}?term=jack+johnson`; // &limit=10&country=ca&entity=musicVideo

  return dummyItunesData;
  const apiResponse: any = await axios // ! iTunesSearchData
    .get(url)
    .then(({ status, data }) => {
      // ! : AxiosResponse<any, any>
      if (status === 200) return data;

      // else  return { resultCount: 0, results: [] };
      throw new Error(
        "Problems with the request to iTunes Search APi for query url: " + url
      );
    })
    .catch((err: Error) => {
      console.error(err);
      return "Error: " + err.message;
    });

  return apiResponse;
};
