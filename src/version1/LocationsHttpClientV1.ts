import { ConfigParams } from 'pip-services3-commons-node';
import { IReferences } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { CommandableHttpClient } from 'pip-services3-rpc-node';

import { LocationV1 } from './LocationV1';
import { ILocationsClientV1 } from './ILocationsClientV1';

export class LocationsHttpClientV1 extends CommandableHttpClient implements ILocationsClientV1 {       
    
    constructor(config?: any) {
        super('v1/locations');

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }
                
    public getLocations(correlationId: string, filter: FilterParams, paging: PagingParams,
        callback: (err: any, page: DataPage<LocationV1>) => void): void {
        this.callCommand( 
            'get_locations', 
            correlationId,
            {
                filter: filter,
                paging: paging
            }, 
            callback
        );
    }

    public getLocationById(correlationId: string, locationId: string,
        callback: (err: any, location: LocationV1) => void): void {
        this.callCommand( 
            'get_location_by_id',
            correlationId,
            {
                location_id: locationId
            }, 
            callback
        );        
    }

    public createLocation(correlationId: string, location: LocationV1,
        callback: (err: any, location: LocationV1) => void): void {
        this.callCommand(
            'create_location',
            correlationId,
            {
                location: location
            }, 
            callback
        );
    }

    public updateLocation(correlationId: string, location: LocationV1,
        callback: (err: any, location: LocationV1) => void): void {
        this.callCommand(
            'update_location', 
            correlationId,
            {
                location: location
            }, 
            callback
        );
    }

    public deleteLocationById(correlationId: string, locationId: string,
        callback: (err: any, location: LocationV1) => void): void {
        this.callCommand(
            'delete_location_by_id', 
            correlationId,
            {
                location_id: locationId
            }, 
            callback
        );
    }
    
}
