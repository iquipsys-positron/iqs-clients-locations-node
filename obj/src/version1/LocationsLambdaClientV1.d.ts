import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { CommandableLambdaClient } from 'pip-services3-aws-node';
import { LocationV1 } from './LocationV1';
import { ILocationsClientV1 } from './ILocationsClientV1';
export declare class LocationsLambdaClientV1 extends CommandableLambdaClient implements ILocationsClientV1 {
    constructor(config?: any);
    getLocations(correlationId: string, filter: FilterParams, paging: PagingParams, callback: (err: any, page: DataPage<LocationV1>) => void): void;
    getLocationById(correlationId: string, locationId: string, callback: (err: any, location: LocationV1) => void): void;
    createLocation(correlationId: string, location: LocationV1, callback: (err: any, location: LocationV1) => void): void;
    updateLocation(correlationId: string, location: LocationV1, callback: (err: any, location: LocationV1) => void): void;
    deleteLocationById(correlationId: string, locationId: string, callback: (err: any, location: LocationV1) => void): void;
}
