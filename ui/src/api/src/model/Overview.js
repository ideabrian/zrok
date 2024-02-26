/**
 * zrok
 * zrok client access
 *
 * The version of the OpenAPI document: 0.3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import EnvironmentAndResources from './EnvironmentAndResources';

/**
 * The Overview model module.
 * @module model/Overview
 * @version 0.3.0
 */
class Overview {
    /**
     * Constructs a new <code>Overview</code>.
     * @alias module:model/Overview
     */
    constructor() { 
        
        Overview.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Overview</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Overview} obj Optional instance to populate.
     * @return {module:model/Overview} The populated <code>Overview</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Overview();

            if (data.hasOwnProperty('accountLimited')) {
                obj['accountLimited'] = ApiClient.convertToType(data['accountLimited'], 'Boolean');
            }
            if (data.hasOwnProperty('environments')) {
                obj['environments'] = ApiClient.convertToType(data['environments'], [EnvironmentAndResources]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Overview</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Overview</code>.
     */
    static validateJSON(data) {
        if (data['environments']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['environments'])) {
                throw new Error("Expected the field `environments` to be an array in the JSON data but got " + data['environments']);
            }
            // validate the optional field `environments` (array)
            for (const item of data['environments']) {
                EnvironmentAndResources.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {Boolean} accountLimited
 */
Overview.prototype['accountLimited'] = undefined;

/**
 * @member {Array.<module:model/EnvironmentAndResources>} environments
 */
Overview.prototype['environments'] = undefined;






export default Overview;
