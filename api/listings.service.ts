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

import { Listing } from '../model/listing';
import { ListingExtraAttributes } from '../model/listingExtraAttributes';
import { ListingMedia } from '../model/listingMedia';
import { ListingVDP } from '../model/listingVDP';
import { SearchResponse } from '../model/searchResponse';
import { VinReport } from '../model/vinReport';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class ListingsService {

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
     * Listing by id
     * Get a particular listing by its id
     * @param id Listing id to get all the listing attributes
     * @param apiKey The API Authentication Key. Mandatory with all API calls.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getListing(id: string, apiKey?: string, observe?: 'body', reportProgress?: boolean): Observable<Listing>;
    public getListing(id: string, apiKey?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Listing>>;
    public getListing(id: string, apiKey?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Listing>>;
    public getListing(id: string, apiKey?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getListing.');
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

        return this.httpClient.get<Listing>(`${this.basePath}/listing/${encodeURIComponent(String(id))}`,
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
     * Long text Listings attributes for Listing with the given id
     * Get listing options, features, seller comments
     * @param id Listing id to get all the long text listing attributes
     * @param apiKey The API Authentication Key. Mandatory with all API calls.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getListingExtra(id: string, apiKey?: string, observe?: 'body', reportProgress?: boolean): Observable<ListingExtraAttributes>;
    public getListingExtra(id: string, apiKey?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ListingExtraAttributes>>;
    public getListingExtra(id: string, apiKey?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ListingExtraAttributes>>;
    public getListingExtra(id: string, apiKey?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getListingExtra.');
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

        return this.httpClient.get<ListingExtraAttributes>(`${this.basePath}/listing/${encodeURIComponent(String(id))}/extra`,
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
     * Listing media by id
     * Get listing media (photo, photos) by id
     * @param id Listing id to get all the listing attributes
     * @param apiKey The API Authentication Key. Mandatory with all API calls.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getListingMedia(id: string, apiKey?: string, observe?: 'body', reportProgress?: boolean): Observable<ListingMedia>;
    public getListingMedia(id: string, apiKey?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ListingMedia>>;
    public getListingMedia(id: string, apiKey?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ListingMedia>>;
    public getListingMedia(id: string, apiKey?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getListingMedia.');
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

        return this.httpClient.get<ListingMedia>(`${this.basePath}/listing/${encodeURIComponent(String(id))}/media`,
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
     * Get listing HTML
     * Cached HTML of the Vehicle Details Page (VDP) for the listing. The HTML is cached only for 7 days for all listings. So this API could be used to get HTML of mostly active listings and that have recently expired
     * @param id Listing id to get the vehicle details page (VDP) HTML
     * @param apiKey The API Authentication Key. Mandatory with all API calls.
     * @param html Get only HTML for given listings VDP page
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getListingVDP(id: string, apiKey?: string, html?: string, observe?: 'body', reportProgress?: boolean): Observable<ListingVDP>;
    public getListingVDP(id: string, apiKey?: string, html?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ListingVDP>>;
    public getListingVDP(id: string, apiKey?: string, html?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ListingVDP>>;
    public getListingVDP(id: string, apiKey?: string, html?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getListingVDP.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (apiKey !== undefined) {
            queryParameters = queryParameters.set('api_key', <any>apiKey);
        }
        if (html !== undefined) {
            queryParameters = queryParameters.set('html', <any>html);
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

        return this.httpClient.get<ListingVDP>(`${this.basePath}/listing/${encodeURIComponent(String(id))}/vdp`,
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
     * Get Summary Report
     * [MOCK] Generate Summary report
     * @param vin VIN as a reference to the type of car for which Summary data is to be returned
     * @param apiKey The API Authentication Key. Mandatory with all API calls.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getSummaryReport(vin: string, apiKey?: string, observe?: 'body', reportProgress?: boolean): Observable<Array<VinReport>>;
    public getSummaryReport(vin: string, apiKey?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<VinReport>>>;
    public getSummaryReport(vin: string, apiKey?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<VinReport>>>;
    public getSummaryReport(vin: string, apiKey?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (vin === null || vin === undefined) {
            throw new Error('Required parameter vin was null or undefined when calling getSummaryReport.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (apiKey !== undefined) {
            queryParameters = queryParameters.set('api_key', <any>apiKey);
        }
        if (vin !== undefined) {
            queryParameters = queryParameters.set('vin', <any>vin);
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

        return this.httpClient.get<Array<VinReport>>(`${this.basePath}/vin_report_summary`,
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
     * Gets active car listings for the given search criteria
     * This endpoint is the meat of the API and serves many purposes. This API produces a list of currently active cars from the market for the given search criteria. The API results are limited to allow pagination upto 1000 rows.   The search API facilitates the following use cases -  1. Search Cars around a given geo-point within a given radius  2. Search cars for a specific year / make / model or combination of these  3. Search cars matching multiple year, make, model combinatins in the same search request 4. Filter results by most car specification attributes 5. Search for similar cars by VIN or Taxonomy VIN  6. Filter cars within a given price / miles / days on market (dom) range 7. Specify a sort order for the results on price / miles / dom / listed date  8. Search cars for a given City / State combination  9. Get Facets to build the search drill downs  10. Get Market averages for price/miles/dom/msrp for your search
     * @param apiKey The API Authentication Key. Mandatory with all API calls.
     * @param latitude Latitude component of location
     * @param longitude Longitude component of location
     * @param radius Radius around the search location
     * @param carType Car type. Allowed values are - new / used / certified
     * @param sellerType Seller type to filter cars on. Valid filter values are those that our Search facets API returns for unique seller types. You can pass in multiple seller type values comma separated.
     * @param year Car year - 1980 onwards. Valid filter values are those that our Search facets API returns for unique years. You can pass in multiple year values comma separated.
     * @param make Car Make - should be a standard OEM Make name. Valid filter values are those that our Search facets API returns for unique make. You can pass in multiple make values separated by comma. e.g. ford,audi
     * @param model Car model to search. Valid filter values are those that our Search facets API returns for unique model. You can pass in multiple model values comma separated for e.g f-150,Mustang.
     * @param trim Car trim to search. Valid filter values are those that our Search facets API returns for unique trim. You can pass in multiple trim values comma separated
     * @param dealerId Dealer id to filter the cars.
     * @param vin Car vin to search
     * @param source Source to search cars. Valid filter values are those that our Search facets API returns for unique source. You can pass in multiple source values comma separated
     * @param bodyType Body type to filter the cars on. Valid filter values are those that our Search facets API returns for unique body types. You can pass in multiple body types comma separated.
     * @param bodySubtype Body subtype to filter the cars on. Valid filter values are those that our Search facets API returns for unique body subtypes. You can pass in multiple body subtype values comma separated
     * @param vehicleType Vehicle type to filter the cars on. Valid filter values are those that our Search facets API returns for unique vehicle types. You can pass in multiple vehicle type values comma separated
     * @param vins Comma separated list of 17 digit vins to search the matching cars for. Only 10 VINs allowed per request. If the request contains more than 10 VINs the first 10 VINs will be considered. Could be used as a More Like This or Similar Vehicles search for the given VINs. Ths vins parameter is an alternative to taxonomy_vins or ymmt parameters available with the search API. vins and taxonomy_vins parameters could be used to filter our cars with the exact build represented by the vins or taxonomy_vins whereas ymmt is a top level filter that does not filter cars by the build attributes like doors, drivetrain, cylinders, body type, body subtype, vehicle type etc
     * @param taxonomyVins Comma separated list of 10 letters excert from the 17 letter VIN. The 10 letters to be picked up from the 17 letter VIN are - first 8 letters and the 10th and 11th letter. E.g. For a VIN - 1FTFW1EF3EKE57182 the taxonomy vin would be - 1FTFW1EFEK  A taxonomy VIN identified a build of a car and could be used to filter our cars of a particular build. This is an alternative to the vin or ymmt parameters to the search API.
     * @param ymmt Comma separated list of Year, Make, Model, Trim combinations. Each combination needs to have the year,make,model, trim values separated by a pipe &#39;|&#39; character in the form year|make|model|trim. e.g. 2010|Audi|A5,2014|Nissan|Sentra|S 6MT,|Honda|City|   You could just provide strings of the form - &#39;year|make||&#39; or &#39;year|make|model&#39; or &#39;|make|model|&#39; combinations. Individual year / make / model filters provied with the API calls will take precedence over the Year, Make, Model, Trim combinations. The Make, Model, Trim values must be valid values as per the Marketcheck Vin Decoder. If you are using a separate vin decoder then look at using the &#39;vins&#39; or &#39;taxonomy_vins&#39; parameter to the search api instead the year|make|model|trim combinations.
     * @param match Comma separated list of Year, Make, Model, Trim fields. For example - year,make,model,trim fields for which user wants to do an exact match
     * @param cylinders Cylinders to filter the cars on. Valid filter values are those that our Search facets API returns for unique cylinder values. You can pass in multiple cylinder values comma separated
     * @param transmission Transmission to filter the cars on. [a &#x3D; Automatic, m &#x3D; Manual]. Valid filter values are those that our Search facets API returns for unique transmission. You can pass in multiple transmission values comma separated
     * @param speeds Speeds to filter the cars on. Valid filter values are those that our Search facets API returns for unique speeds. You can pass in multiple speeds values comma separated
     * @param doors Doors to filter the cars on. Valid filter values are those that our Search facets API returns for unique doors. You can pass in multiple doors values comma separated
     * @param drivetrain Drivetrain to filter the cars on. Valid filter values are those that our Search facets API returns for unique drivetrains. You can pass in multiple drivetrain values comma separated
     * @param exteriorColor Exterior color to match. Valid filter values are those that our Search facets API returns for unique exterior colors. You can pass in multiple exterior color values comma separated
     * @param interiorColor Interior color to match. Valid filter values are those that our Search facets API returns for unique interior colors. You can pass in multiple interior color values comma separated
     * @param engine Filter listings on engine
     * @param engineType Engine Type to match. Valid filter values are those that our Search facets API returns for unique engine types. You can pass in multiple engine type values comma separated
     * @param engineAspiration Engine Aspiration to match. Valid filter values are those that our Search facets API returns for unique Engine Aspirations. You can pass in multiple Engine aspirations values comma separated
     * @param engineBlock Engine Block to match. Valid filter values are those that our Search facets API returns for unique Engine Block. You can pass in multiple Engine Block values comma separated
     * @param milesRange Miles range to filter cars with miles in the given range. Range to be given in the format - min-max e.g. 1000-5000
     * @param priceRange Price range to filter cars with the price in the range given. Range to be given in the format - min-max e.g. 1000-5000
     * @param domRange Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50
     * @param sortBy Sort by field - allowed fields are distance|price|miles|dom|age|posted_at|year. Default sort field is distance from the given point
     * @param sortOrder Sort order - asc or desc. Default sort order is distance from a point.
     * @param rows Number of results to return. Default is 10. Max is 50
     * @param start Page number to fetch the results for the given criteria. Default is 1. Pagination is allowed only till first 1000 results for the search and sort criteria. The page value can be only between 1 to 1000/rows
     * @param facets The comma separated list of fields for which facets are requested. Supported fields are - year, make, model, trim, vehicle_type, car_type, body_type, body_subtype, drivetrain, cylinders, transmission, exterior_color, interior_color, doors, engine_type, engine_aspiration, engine_block. Facets could be requested in addition to the listings for the search. Please note - The API calls with lots of facet fields may take longer to respond.
     * @param stats The list of fields for which stats need to be generated based on the matching listings for the search criteria. Allowed fields are - price, miles, msrp, dom The stats consists of mean, max, average and count of listings based on which the stats are calculated for the field. Stats could be requested in addition to the listings for the search. Please note - The API calls with the stats fields may take longer to respond.
     * @param country Filter on Country, by default US. Search available on US (United States) and CA (Canada)
     * @param plot If plot has value true results in around 25k coordinates with limited fields to plot respective graph
     * @param nodedup If nodedup is set to true then will give results using is_searchable
     * @param state Filter listsings on State
     * @param city Filter listings on city
     * @param dealerName Filter listings on dealer_name
     * @param trimO Filter listings on web scraped trim
     * @param trimR Filter trim on custom possible matches
     * @param domActiveRange Active Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50
     * @param dom180Range Last 180 Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50
     * @param options Tokenizer search on options for multiple options use | as seperator
     * @param features Tokenizer search on features for multiple options use | as seperator
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public search(apiKey?: string, latitude?: number, longitude?: number, radius?: number, carType?: 'new' | 'used' | 'certified', sellerType?: string, year?: string, make?: string, model?: string, trim?: string, dealerId?: string, vin?: string, source?: string, bodyType?: string, bodySubtype?: string, vehicleType?: string, vins?: string, taxonomyVins?: string, ymmt?: string, match?: string, cylinders?: string, transmission?: string, speeds?: string, doors?: string, drivetrain?: string, exteriorColor?: string, interiorColor?: string, engine?: string, engineType?: string, engineAspiration?: string, engineBlock?: string, milesRange?: string, priceRange?: string, domRange?: string, sortBy?: string, sortOrder?: string, rows?: number, start?: number, facets?: string, stats?: string, country?: string, plot?: string, nodedup?: string, state?: string, city?: string, dealerName?: string, trimO?: string, trimR?: string, domActiveRange?: string, dom180Range?: string, options?: string, features?: string, observe?: 'body', reportProgress?: boolean): Observable<SearchResponse>;
    public search(apiKey?: string, latitude?: number, longitude?: number, radius?: number, carType?: 'new' | 'used' | 'certified', sellerType?: string, year?: string, make?: string, model?: string, trim?: string, dealerId?: string, vin?: string, source?: string, bodyType?: string, bodySubtype?: string, vehicleType?: string, vins?: string, taxonomyVins?: string, ymmt?: string, match?: string, cylinders?: string, transmission?: string, speeds?: string, doors?: string, drivetrain?: string, exteriorColor?: string, interiorColor?: string, engine?: string, engineType?: string, engineAspiration?: string, engineBlock?: string, milesRange?: string, priceRange?: string, domRange?: string, sortBy?: string, sortOrder?: string, rows?: number, start?: number, facets?: string, stats?: string, country?: string, plot?: string, nodedup?: string, state?: string, city?: string, dealerName?: string, trimO?: string, trimR?: string, domActiveRange?: string, dom180Range?: string, options?: string, features?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<SearchResponse>>;
    public search(apiKey?: string, latitude?: number, longitude?: number, radius?: number, carType?: 'new' | 'used' | 'certified', sellerType?: string, year?: string, make?: string, model?: string, trim?: string, dealerId?: string, vin?: string, source?: string, bodyType?: string, bodySubtype?: string, vehicleType?: string, vins?: string, taxonomyVins?: string, ymmt?: string, match?: string, cylinders?: string, transmission?: string, speeds?: string, doors?: string, drivetrain?: string, exteriorColor?: string, interiorColor?: string, engine?: string, engineType?: string, engineAspiration?: string, engineBlock?: string, milesRange?: string, priceRange?: string, domRange?: string, sortBy?: string, sortOrder?: string, rows?: number, start?: number, facets?: string, stats?: string, country?: string, plot?: string, nodedup?: string, state?: string, city?: string, dealerName?: string, trimO?: string, trimR?: string, domActiveRange?: string, dom180Range?: string, options?: string, features?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<SearchResponse>>;
    public search(apiKey?: string, latitude?: number, longitude?: number, radius?: number, carType?: 'new' | 'used' | 'certified', sellerType?: string, year?: string, make?: string, model?: string, trim?: string, dealerId?: string, vin?: string, source?: string, bodyType?: string, bodySubtype?: string, vehicleType?: string, vins?: string, taxonomyVins?: string, ymmt?: string, match?: string, cylinders?: string, transmission?: string, speeds?: string, doors?: string, drivetrain?: string, exteriorColor?: string, interiorColor?: string, engine?: string, engineType?: string, engineAspiration?: string, engineBlock?: string, milesRange?: string, priceRange?: string, domRange?: string, sortBy?: string, sortOrder?: string, rows?: number, start?: number, facets?: string, stats?: string, country?: string, plot?: string, nodedup?: string, state?: string, city?: string, dealerName?: string, trimO?: string, trimR?: string, domActiveRange?: string, dom180Range?: string, options?: string, features?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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
        if (carType !== undefined) {
            queryParameters = queryParameters.set('car_type', <any>carType);
        }
        if (sellerType !== undefined) {
            queryParameters = queryParameters.set('seller_type', <any>sellerType);
        }
        if (year !== undefined) {
            queryParameters = queryParameters.set('year', <any>year);
        }
        if (make !== undefined) {
            queryParameters = queryParameters.set('make', <any>make);
        }
        if (model !== undefined) {
            queryParameters = queryParameters.set('model', <any>model);
        }
        if (trim !== undefined) {
            queryParameters = queryParameters.set('trim', <any>trim);
        }
        if (dealerId !== undefined) {
            queryParameters = queryParameters.set('dealer_id', <any>dealerId);
        }
        if (vin !== undefined) {
            queryParameters = queryParameters.set('vin', <any>vin);
        }
        if (source !== undefined) {
            queryParameters = queryParameters.set('source', <any>source);
        }
        if (bodyType !== undefined) {
            queryParameters = queryParameters.set('body_type', <any>bodyType);
        }
        if (bodySubtype !== undefined) {
            queryParameters = queryParameters.set('body_subtype', <any>bodySubtype);
        }
        if (vehicleType !== undefined) {
            queryParameters = queryParameters.set('vehicle_type', <any>vehicleType);
        }
        if (vins !== undefined) {
            queryParameters = queryParameters.set('vins', <any>vins);
        }
        if (taxonomyVins !== undefined) {
            queryParameters = queryParameters.set('taxonomy_vins', <any>taxonomyVins);
        }
        if (ymmt !== undefined) {
            queryParameters = queryParameters.set('ymmt', <any>ymmt);
        }
        if (match !== undefined) {
            queryParameters = queryParameters.set('match', <any>match);
        }
        if (cylinders !== undefined) {
            queryParameters = queryParameters.set('cylinders', <any>cylinders);
        }
        if (transmission !== undefined) {
            queryParameters = queryParameters.set('transmission', <any>transmission);
        }
        if (speeds !== undefined) {
            queryParameters = queryParameters.set('speeds', <any>speeds);
        }
        if (doors !== undefined) {
            queryParameters = queryParameters.set('doors', <any>doors);
        }
        if (drivetrain !== undefined) {
            queryParameters = queryParameters.set('drivetrain', <any>drivetrain);
        }
        if (exteriorColor !== undefined) {
            queryParameters = queryParameters.set('exterior_color', <any>exteriorColor);
        }
        if (interiorColor !== undefined) {
            queryParameters = queryParameters.set('interior_color', <any>interiorColor);
        }
        if (engine !== undefined) {
            queryParameters = queryParameters.set('engine', <any>engine);
        }
        if (engineType !== undefined) {
            queryParameters = queryParameters.set('engine_type', <any>engineType);
        }
        if (engineAspiration !== undefined) {
            queryParameters = queryParameters.set('engine_aspiration', <any>engineAspiration);
        }
        if (engineBlock !== undefined) {
            queryParameters = queryParameters.set('engine_block', <any>engineBlock);
        }
        if (milesRange !== undefined) {
            queryParameters = queryParameters.set('miles_range', <any>milesRange);
        }
        if (priceRange !== undefined) {
            queryParameters = queryParameters.set('price_range', <any>priceRange);
        }
        if (domRange !== undefined) {
            queryParameters = queryParameters.set('dom_range', <any>domRange);
        }
        if (sortBy !== undefined) {
            queryParameters = queryParameters.set('sort_by', <any>sortBy);
        }
        if (sortOrder !== undefined) {
            queryParameters = queryParameters.set('sort_order', <any>sortOrder);
        }
        if (rows !== undefined) {
            queryParameters = queryParameters.set('rows', <any>rows);
        }
        if (start !== undefined) {
            queryParameters = queryParameters.set('start', <any>start);
        }
        if (facets !== undefined) {
            queryParameters = queryParameters.set('facets', <any>facets);
        }
        if (stats !== undefined) {
            queryParameters = queryParameters.set('stats', <any>stats);
        }
        if (country !== undefined) {
            queryParameters = queryParameters.set('country', <any>country);
        }
        if (plot !== undefined) {
            queryParameters = queryParameters.set('plot', <any>plot);
        }
        if (nodedup !== undefined) {
            queryParameters = queryParameters.set('nodedup', <any>nodedup);
        }
        if (state !== undefined) {
            queryParameters = queryParameters.set('state', <any>state);
        }
        if (city !== undefined) {
            queryParameters = queryParameters.set('city', <any>city);
        }
        if (dealerName !== undefined) {
            queryParameters = queryParameters.set('dealer_name', <any>dealerName);
        }
        if (trimO !== undefined) {
            queryParameters = queryParameters.set('trim_o', <any>trimO);
        }
        if (trimR !== undefined) {
            queryParameters = queryParameters.set('trim_r', <any>trimR);
        }
        if (domActiveRange !== undefined) {
            queryParameters = queryParameters.set('dom_active_range', <any>domActiveRange);
        }
        if (dom180Range !== undefined) {
            queryParameters = queryParameters.set('dom_180_range', <any>dom180Range);
        }
        if (options !== undefined) {
            queryParameters = queryParameters.set('options', <any>options);
        }
        if (features !== undefined) {
            queryParameters = queryParameters.set('features', <any>features);
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

        return this.httpClient.get<SearchResponse>(`${this.basePath}/search`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
