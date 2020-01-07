import { Descriptor } from 'pip-services3-commons-node';
import { Factory } from 'pip-services3-components-node';

import { LocationsDirectClientV1 } from '../version1/LocationsDirectClientV1';
import { LocationsHttpClientV1 } from '../version1/LocationsHttpClientV1';
import { LocationsLambdaClientV1 } from '../version1/LocationsLambdaClientV1';

export class LocationsClientFactory extends Factory {
	public static Descriptor: Descriptor = new Descriptor('iqs-services-locations', 'factory', 'default', 'default', '1.0');
	public static DirectClientV1Descriptor = new Descriptor('iqs-services-locations', 'client', 'direct', 'default', '1.0');
	public static HttpClientV1Descriptor = new Descriptor('iqs-services-locations', 'client', 'http', 'default', '1.0');
	public static LambdaClientV1Descriptor = new Descriptor('iqs-services-locations', 'client', 'lambda', 'default', '1.0');
	
	constructor() {
		super();

		this.registerAsType(LocationsClientFactory.DirectClientV1Descriptor, LocationsDirectClientV1);
		this.registerAsType(LocationsClientFactory.HttpClientV1Descriptor, LocationsHttpClientV1);
		this.registerAsType(LocationsClientFactory.LambdaClientV1Descriptor, LocationsLambdaClientV1);
	}
	
}
