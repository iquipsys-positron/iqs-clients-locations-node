let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services3-commons-node';
import { ConfigParams } from 'pip-services3-commons-node';
import { References } from 'pip-services3-commons-node';
import { ConsoleLogger } from 'pip-services3-components-node';

import { LocationsMemoryPersistence } from 'iqs-services-locations-node';
import { LocationsController } from 'iqs-services-locations-node';
import { LocationsHttpServiceV1 } from 'iqs-services-locations-node';
import { ILocationsClientV1 } from '../../src/version1/ILocationsClientV1';
import { LocationsHttpClientV1 } from '../../src/version1/LocationsHttpClientV1';
import { LocationsClientFixtureV1 } from './LocationsClientFixtureV1';

var httpConfig = ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 3000
);

suite('LocationsRestClientV1', ()=> {
    let service: LocationsHttpServiceV1;
    let client: LocationsHttpClientV1;
    let fixture: LocationsClientFixtureV1;

    suiteSetup((done) => {
        let logger = new ConsoleLogger();
        let persistence = new LocationsMemoryPersistence();
        let controller = new LocationsController();

        service = new LocationsHttpServiceV1();
        service.configure(httpConfig);

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('iqs-services-locations', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('iqs-services-locations', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('iqs-services-locations', 'service', 'http', 'default', '1.0'), service
        );
        controller.setReferences(references);
        service.setReferences(references);

        client = new LocationsHttpClientV1();
        client.setReferences(references);
        client.configure(httpConfig);

        fixture = new LocationsClientFixtureV1(client);

        service.open(null, (err) => {
            client.open(null, done);
        });
    });
    
    suiteTeardown((done) => {
        client.close(null);
        service.close(null, done);
    });

    test('CRUD Operations', (done) => {
        fixture.testCrudOperations(done);
    });

});
