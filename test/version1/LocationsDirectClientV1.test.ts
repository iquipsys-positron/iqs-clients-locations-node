let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services3-commons-node';
import { ConfigParams } from 'pip-services3-commons-node';
import { References } from 'pip-services3-commons-node';
import { ConsoleLogger } from 'pip-services3-components-node';

import { LocationsMemoryPersistence } from 'iqs-services-locations-node';
import { LocationsController } from 'iqs-services-locations-node';
import { ILocationsClientV1 } from '../../src/version1/ILocationsClientV1';
import { LocationsDirectClientV1 } from '../../src/version1/LocationsDirectClientV1';
import { LocationsClientFixtureV1 } from './LocationsClientFixtureV1';

suite('LocationsDirectClientV1', ()=> {
    let client: LocationsDirectClientV1;
    let fixture: LocationsClientFixtureV1;

    suiteSetup((done) => {
        let logger = new ConsoleLogger();
        let persistence = new LocationsMemoryPersistence();
        let controller = new LocationsController();

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('iqs-services-locations', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('iqs-services-locations', 'controller', 'default', 'default', '1.0'), controller,
        );
        controller.setReferences(references);

        client = new LocationsDirectClientV1();
        client.setReferences(references);

        fixture = new LocationsClientFixtureV1(client);

        client.open(null, done);
    });
    
    suiteTeardown((done) => {
        client.close(null, done);
    });

    test('CRUD Operations', (done) => {
        fixture.testCrudOperations(done);
    });

});
