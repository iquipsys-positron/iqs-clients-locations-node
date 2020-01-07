"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_rpc_node_1 = require("pip-services3-rpc-node");
class LocationsDirectClientV1 extends pip_services3_rpc_node_1.DirectClient {
    constructor() {
        super();
        this._dependencyResolver.put('controller', new pip_services3_commons_node_1.Descriptor("iqs-services-locations", "controller", "*", "*", "*"));
    }
    getLocations(correlationId, filter, paging, callback) {
        let timing = this.instrument(correlationId, 'locations.get_locations');
        this._controller.getLocations(correlationId, filter, paging, (err, page) => {
            timing.endTiming();
            callback(err, page);
        });
    }
    getLocationById(correlationId, locationId, callback) {
        let timing = this.instrument(correlationId, 'locations.get_location_by_id');
        this._controller.getLocationById(correlationId, locationId, (err, location) => {
            timing.endTiming();
            callback(err, location);
        });
    }
    createLocation(correlationId, location, callback) {
        let timing = this.instrument(correlationId, 'locations.create_location');
        this._controller.createLocation(correlationId, location, (err, location) => {
            timing.endTiming();
            callback(err, location);
        });
    }
    updateLocation(correlationId, location, callback) {
        let timing = this.instrument(correlationId, 'locations.update_location');
        this._controller.updateLocation(correlationId, location, (err, location) => {
            timing.endTiming();
            callback(err, location);
        });
    }
    deleteLocationById(correlationId, locationId, callback) {
        let timing = this.instrument(correlationId, 'locations.delete_location_by_id');
        this._controller.deleteLocationById(correlationId, locationId, (err, location) => {
            timing.endTiming();
            callback(err, location);
        });
    }
}
exports.LocationsDirectClientV1 = LocationsDirectClientV1;
//# sourceMappingURL=LocationsDirectClientV1.js.map