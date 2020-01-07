let _ = require('lodash');
let async = require('async');
let assert = require('chai').assert;

import { PagingParams } from 'pip-services3-commons-node';

import { LocationV1 } from '../../src/version1/LocationV1';
import { ILocationsClientV1 } from '../../src/version1/ILocationsClientV1';

let LOCATION1: LocationV1 = {
    id: '1',
    org_id: '1',
    name: 'Location 1',
    pos: { type: 'Point', coordinates: [32, -110] }
};
let LOCATION2: LocationV1 = {
    id: '2',
    org_id: '1',
    name: 'Location 2',
    pos: { type: 'Point', coordinates: [33, -110] }
};

export class LocationsClientFixtureV1 {
    private _client: ILocationsClientV1;
    
    constructor(client: ILocationsClientV1) {
        this._client = client;
    }
        
    public testCrudOperations(done) {
        let location1, location2;

        async.series([
        // Create one location
            (callback) => {
                this._client.createLocation(
                    null,
                    LOCATION1,
                    (err, location) => {
                        assert.isNull(err);

                        assert.isObject(location);
                        assert.equal(location.name, LOCATION1.name);
                        assert.equal(location.org_id, LOCATION1.org_id);
                        assert.isNotNull(location.pos);
                    
                        location1 = location;

                        callback();
                    }
                );
            },
        // Create another location
            (callback) => {
                this._client.createLocation(
                    null,
                    LOCATION2,
                    (err, location) => {
                        assert.isNull(err);

                        assert.isObject(location);
                        assert.equal(location.name, LOCATION2.name);
                        assert.equal(location.org_id, LOCATION2.org_id);
                        assert.isNotNull(location.pos);

                        location2 = location;

                        callback();
                    }
                );
            },
        // Get all locations
            (callback) => {
                this._client.getLocations(
                    null,
                    null,
                    new PagingParams(0,5,false),
                    (err, locations) => {
                        assert.isNull(err);

                        assert.isObject(locations);
                        assert.isTrue(locations.data.length >= 2);

                        callback();
                    }
                );
            },
        // Update the location
            (callback) => {
                location1.name = 'Updated location 1';

                this._client.updateLocation(
                    null,
                    location1,
                    (err, location) => {
                        assert.isNull(err);

                        assert.isObject(location);
                        assert.equal(location.name, 'Updated location 1');
                        assert.equal(location.id, location1.id);

                        location1 = location;

                        callback();
                    }
                );
            },
        // Delete location
            (callback) => {
                this._client.deleteLocationById(
                    null,
                    location1.id,
                    (err) => {
                        assert.isNull(err);

                        callback();
                    }
                );
            },
        // Try to get delete location
            (callback) => {
                this._client.getLocationById(
                    null,
                    location1.id,
                    (err, location) => {
                        assert.isNull(err);
                        
                        assert.isNull(location || null);

                        callback();
                    }
                );
            }
        ], done);
    }
}
