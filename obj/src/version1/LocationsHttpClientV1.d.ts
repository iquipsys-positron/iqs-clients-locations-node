import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { CommandableHttpClient } from 'pip-services3-rpc-node';
import { LocationV1 } from './LocationV1';
import { ILocationsClientV1 } from './ILocationsClientV1';
export declare class LocationsHttpClientV1 extends CommandableHttpClient implements ILocationsClientV1 {
    constructor(config?: any);
    getLocations(correlationId: string, filter: FilterParams, paging: PagingParams, callback: (err: any, page: DataPage<LocationV1>) => void): void;
    getLocationById(correlationId: string, locationId: string, callback: (err: any, location: LocationV1) => void): void;
    createLocation(correlationId: string, location: LocationV1, callback: (err: any, location: LocationV1) => void): void;
    updateLocation(correlationId: string, location: LocationV1, callback: (err: any, location: LocationV1) => void): void;
    deleteLocationById(correlationId: string, locationId: string, callback: (err: any, location: LocationV1) => void): void;
}
