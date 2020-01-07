"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_components_node_1 = require("pip-services3-components-node");
const LocationsDirectClientV1_1 = require("../version1/LocationsDirectClientV1");
const LocationsHttpClientV1_1 = require("../version1/LocationsHttpClientV1");
const LocationsLambdaClientV1_1 = require("../version1/LocationsLambdaClientV1");
class LocationsClientFactory extends pip_services3_components_node_1.Factory {
    constructor() {
        super();
        this.registerAsType(LocationsClientFactory.DirectClientV1Descriptor, LocationsDirectClientV1_1.LocationsDirectClientV1);
        this.registerAsType(LocationsClientFactory.HttpClientV1Descriptor, LocationsHttpClientV1_1.LocationsHttpClientV1);
        this.registerAsType(LocationsClientFactory.LambdaClientV1Descriptor, LocationsLambdaClientV1_1.LocationsLambdaClientV1);
    }
}
exports.LocationsClientFactory = LocationsClientFactory;
LocationsClientFactory.Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-locations', 'factory', 'default', 'default', '1.0');
LocationsClientFactory.DirectClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-locations', 'client', 'direct', 'default', '1.0');
LocationsClientFactory.HttpClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-locations', 'client', 'http', 'default', '1.0');
LocationsClientFactory.LambdaClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-locations', 'client', 'lambda', 'default', '1.0');
//# sourceMappingURL=LocationsClientFactory.js.map