import { IReferences } from 'pip-services3-commons-node';
import { Descriptor } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams} from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { DirectClient } from 'pip-services3-rpc-node';

import { ILocationsClientV1 } from './ILocationsClientV1';
//import { ILocationsController } from 'iqs-services-locations-node';
import { LocationV1 } from './LocationV1';

export class LocationsDirectClientV1 extends DirectClient<any> implements ILocationsClientV1 {
            
    public constructor() {
        super();
        this._dependencyResolver.put('controller', new Descriptor("iqs-services-locations", "controller", "*", "*", "*"))
    }

    public getLocations(correlationId: string, filter: FilterParams, paging: PagingParams, 
        callback: (err: any, page: DataPage<LocationV1>) => void): void {
        let timing = this.instrument(correlationId, 'locations.get_locations');
        this._controller.getLocations(correlationId, filter, paging, (err, page) => {
            timing.endTiming();
            callback(err, page);
        });
    }

    public getLocationById(correlationId: string, locationId: string, 
        callback: (err: any, location: LocationV1) => void): void {
        let timing = this.instrument(correlationId, 'locations.get_location_by_id');
        this._controller.getLocationById(correlationId, locationId, (err, location) => {
            timing.endTiming();
            callback(err, location);
        });
    }

    public createLocation(correlationId: string, location: LocationV1, 
        callback: (err: any, location: LocationV1) => void): void {
        let timing = this.instrument(correlationId, 'locations.create_location');
        this._controller.createLocation(correlationId, location, (err, location) => {
            timing.endTiming();
            callback(err, location);
        });
    }

    public updateLocation(correlationId: string, location: LocationV1, 
        callback: (err: any, location: LocationV1) => void): void {
        let timing = this.instrument(correlationId, 'locations.update_location');
        this._controller.updateLocation(correlationId, location, (err, location) => {
            timing.endTiming();
            callback(err, location);
        });
    }

    public deleteLocationById(correlationId: string, locationId: string,
        callback: (err: any, location: LocationV1) => void): void {
        let timing = this.instrument(correlationId, 'locations.delete_location_by_id');
        this._controller.deleteLocationById(correlationId, locationId, (err, location) => {
            timing.endTiming();
            callback(err, location);
        });
    }
}