"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let _ = require('lodash');
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_aws_node_1 = require("pip-services3-aws-node");
class LocationsLambdaClientV1 extends pip_services3_aws_node_1.CommandableLambdaClient {
    constructor(config) {
        super('locations');
        if (config != null)
            this.configure(pip_services3_commons_node_1.ConfigParams.fromValue(config));
    }
    getLocations(correlationId, filter, paging, callback) {
        this.callCommand('get_locations', correlationId, {
            filter: filter,
            paging: paging
        }, callback);
    }
    getLocationById(correlationId, locationId, callback) {
        this.callCommand('get_location_by_id', correlationId, {
            location_id: locationId
        }, callback);
    }
    createLocation(correlationId, location, callback) {
        this.callCommand('create_location', correlationId, {
            location: location
        }, callback);
    }
    updateLocation(correlationId, location, callback) {
        this.callCommand('update_location', correlationId, {
            location: location
        }, callback);
    }
    deleteLocationById(correlationId, locationId, callback) {
        this.callCommand('delete_location_by_id', correlationId, {
            location_id: locationId
        }, callback);
    }
}
exports.LocationsLambdaClientV1 = LocationsLambdaClientV1;
//# sourceMappingURL=LocationsLambdaClientV1.js.map