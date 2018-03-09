/**
 * Marketcheck Cars API
 * <b>Access the New, Used and Certified cars inventories for all Car Dealers in US.</b> <br/>The data is sourced from online listings by over 44,000 Car dealers in US. At any time, there are about 6.2M searchable listings (about 1.9M unique VINs) for Used & Certified cars and about 6.6M (about 3.9M unique VINs) New Car listings from all over US. We use this API at the back for our website <a href='https://www.marketcheck.com' target='_blank'>www.marketcheck.com</a> and our Android and iOS mobile apps too.<br/><h5> Few useful links : </h5><ul><li>A quick view of the API and the use cases is depicated <a href='https://portals.marketcheck.com/mcapi/' target='_blank'>here</a></li><li>The Postman collection with various usages of the API is shared here https://www.getpostman.com/collections/2752684ff636cdd7bac2</li></ul>
 *
 * OpenAPI spec version: 1.0.3
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs/Observable';

import { BaseListing } from '../model/baseListing';
import { Dealer } from '../model/dealer';
import { DealerLandingPage } from '../model/dealerLandingPage';
import { DealerRating } from '../model/dealerRating';
import { DealerReview } from '../model/dealerReview';
import { DealersResponse } from '../model/dealersResponse';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class DealerService {

    protected basePath = 'https://marketcheck-prod.apigee.net/v1';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (let consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * Find car dealers around
     * The dealers API returns a list of dealers around a given point and radius. Max radius of only 50 miles is supported.
     * @param latitude Latitude component of location
     * @param longitude Longitude component of location
     * @param radius Radius around the search location
     * @param apiKey The API Authentication Key. Mandatory with all API calls.
     * @param rows Number of results to return. Default is 10. Max is 50
     * @param start Offset for the search results. Default is 1.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public dealerSearch(latitude: number, longitude: number, radius: number, apiKey?: string, rows?: number, start?: number, observe?: 'body', reportProgress?: boolean): Observable<DealersResponse>;
    public dealerSearch(latitude: number, longitude: number, radius: number, apiKey?: string, rows?: number, start?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<DealersResponse>>;
    public dealerSearch(latitude: number, longitude: number, radius: number, apiKey?: string, rows?: number, start?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<DealersResponse>>;
    public dealerSearch(latitude: number, longitude: number, radius: number, apiKey?: string, rows?: number, start?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (latitude === null || latitude === undefined) {
            throw new Error('Required parameter latitude was null or undefined when calling dealerSearch.');
        }
        if (longitude === null || longitude === undefined) {
            throw new Error('Required parameter longitude was null or undefined when calling dealerSearch.');
        }
        if (radius === null || radius === undefined) {
            throw new Error('Required parameter radius was null or undefined when calling dealerSearch.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (apiKey !== undefined) {
            queryParameters = queryParameters.set('api_key', <any>apiKey);
        }
        if (latitude !== undefined) {
            queryParameters = queryParameters.set('latitude', <any>latitude);
        }
        if (longitude !== undefined) {
            queryParameters = queryParameters.set('longitude', <any>longitude);
        }
        if (radius !== undefined) {
            queryParameters = queryParameters.set('radius', <any>radius);
        }
        if (rows !== undefined) {
            queryParameters = queryParameters.set('rows', <any>rows);
        }
        if (start !== undefined) {
            queryParameters = queryParameters.set('start', <any>start);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        return this.httpClient.get<DealersResponse>(`${this.basePath}/dealers`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Dealer by id
     * Get a particular dealer&#39;s information by its id
     * @param dealerId Dealer id to get all the dealer info attributes
     * @param apiKey The API Authentication Key. Mandatory with all API calls.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getDealer(dealerId: string, apiKey?: string, observe?: 'body', reportProgress?: boolean): Observable<Dealer>;
    public getDealer(dealerId: string, apiKey?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Dealer>>;
    public getDealer(dealerId: string, apiKey?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Dealer>>;
    public getDealer(dealerId: string, apiKey?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (dealerId === null || dealerId === undefined) {
            throw new Error('Required parameter dealerId was null or undefined when calling getDealer.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (apiKey !== undefined) {
            queryParameters = queryParameters.set('api_key', <any>apiKey);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        return this.httpClient.get<Dealer>(`${this.basePath}/dealer/${encodeURIComponent(String(dealerId))}`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Dealer inventory
     * Get a dealer&#39;s currently active inventory
     * @param dealerId Id representing the dealer to fetch the active inventory for
     * @param apiKey The API Authentication Key. Mandatory with all API calls.
     * @param rows Number of results to return. Default is 10. Max is 50
     * @param start Page number to fetch the results for the given criteria. Default is 1. Pagination is allowed only till first 1000 results for the search and sort criteria. The page value can be only between 1 to 1000/rows
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getDealerActiveInventory(dealerId: string, apiKey?: string, rows?: number, start?: number, observe?: 'body', reportProgress?: boolean): Observable<BaseListing>;
    public getDealerActiveInventory(dealerId: string, apiKey?: string, rows?: number, start?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<BaseListing>>;
    public getDealerActiveInventory(dealerId: string, apiKey?: string, rows?: number, start?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<BaseListing>>;
    public getDealerActiveInventory(dealerId: string, apiKey?: string, rows?: number, start?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (dealerId === null || dealerId === undefined) {
            throw new Error('Required parameter dealerId was null or undefined when calling getDealerActiveInventory.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (apiKey !== undefined) {
            queryParameters = queryParameters.set('api_key', <any>apiKey);
        }
        if (rows !== undefined) {
            queryParameters = queryParameters.set('rows', <any>rows);
        }
        if (start !== undefined) {
            queryParameters = queryParameters.set('start', <any>start);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        return this.httpClient.get<BaseListing>(`${this.basePath}/dealer/${encodeURIComponent(String(dealerId))}/active/inventory`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Dealer&#39;s historical inventory
     * [v1 : Not Implemented Yet] - Get a dealer&#39;s historical inventory
     * @param dealerId Id representing the dealer to fetch the active inventory for
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getDealerHistoricalInventory(dealerId: string, observe?: 'body', reportProgress?: boolean): Observable<BaseListing>;
    public getDealerHistoricalInventory(dealerId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<BaseListing>>;
    public getDealerHistoricalInventory(dealerId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<BaseListing>>;
    public getDealerHistoricalInventory(dealerId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (dealerId === null || dealerId === undefined) {
            throw new Error('Required parameter dealerId was null or undefined when calling getDealerHistoricalInventory.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        return this.httpClient.get<BaseListing>(`${this.basePath}/dealer/${encodeURIComponent(String(dealerId))}/historical/inventory`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Experimental: Get cached version of dealer landing page by dealer id
     * Experimental: Get cached version of dealer landing page by dealer id
     * @param dealerId Robot id to get the landing page html for
     * @param apiKey The API Authentication Key. Mandatory with all API calls.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getDealerLandingPage(dealerId: string, apiKey?: string, observe?: 'body', reportProgress?: boolean): Observable<DealerLandingPage>;
    public getDealerLandingPage(dealerId: string, apiKey?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<DealerLandingPage>>;
    public getDealerLandingPage(dealerId: string, apiKey?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<DealerLandingPage>>;
    public getDealerLandingPage(dealerId: string, apiKey?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (dealerId === null || dealerId === undefined) {
            throw new Error('Required parameter dealerId was null or undefined when calling getDealerLandingPage.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (apiKey !== undefined) {
            queryParameters = queryParameters.set('api_key', <any>apiKey);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        return this.httpClient.get<DealerLandingPage>(`${this.basePath}/dealer/${encodeURIComponent(String(dealerId))}/landing`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Dealer&#39;s Rating
     * [MOCK] Get a dealer&#39;s Rating
     * @param dealerId Id representing the dealer to fetch the ratings for
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getDealerRatings(dealerId: string, observe?: 'body', reportProgress?: boolean): Observable<DealerRating>;
    public getDealerRatings(dealerId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<DealerRating>>;
    public getDealerRatings(dealerId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<DealerRating>>;
    public getDealerRatings(dealerId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (dealerId === null || dealerId === undefined) {
            throw new Error('Required parameter dealerId was null or undefined when calling getDealerRatings.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        return this.httpClient.get<DealerRating>(`${this.basePath}/dealer/${encodeURIComponent(String(dealerId))}/ratings`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Dealer&#39;s Review
     * [MOCK] Get a dealer&#39;s Review
     * @param dealerId Id representing the dealer to fetch the ratings for
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getDealerReviews(dealerId: string, observe?: 'body', reportProgress?: boolean): Observable<DealerReview>;
    public getDealerReviews(dealerId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<DealerReview>>;
    public getDealerReviews(dealerId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<DealerReview>>;
    public getDealerReviews(dealerId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (dealerId === null || dealerId === undefined) {
            throw new Error('Required parameter dealerId was null or undefined when calling getDealerReviews.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        return this.httpClient.get<DealerReview>(`${this.basePath}/dealer/${encodeURIComponent(String(dealerId))}/reviews`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
