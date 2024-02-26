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
import MetricsSample from './MetricsSample';

/**
 * The Metrics model module.
 * @module model/Metrics
 * @version 0.3.0
 */
class Metrics {
    /**
     * Constructs a new <code>Metrics</code>.
     * @alias module:model/Metrics
     */
    constructor() { 
        
        Metrics.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Metrics</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Metrics} obj Optional instance to populate.
     * @return {module:model/Metrics} The populated <code>Metrics</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Metrics();

            if (data.hasOwnProperty('scope')) {
                obj['scope'] = ApiClient.convertToType(data['scope'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('period')) {
                obj['period'] = ApiClient.convertToType(data['period'], 'Number');
            }
            if (data.hasOwnProperty('samples')) {
                obj['samples'] = ApiClient.convertToType(data['samples'], [MetricsSample]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Metrics</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Metrics</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['scope'] && !(typeof data['scope'] === 'string' || data['scope'] instanceof String)) {
            throw new Error("Expected the field `scope` to be a primitive type in the JSON string but got " + data['scope']);
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        if (data['samples']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['samples'])) {
                throw new Error("Expected the field `samples` to be an array in the JSON data but got " + data['samples']);
            }
            // validate the optional field `samples` (array)
            for (const item of data['samples']) {
                MetricsSample.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {String} scope
 */
Metrics.prototype['scope'] = undefined;

/**
 * @member {String} id
 */
Metrics.prototype['id'] = undefined;

/**
 * @member {Number} period
 */
Metrics.prototype['period'] = undefined;

/**
 * @member {Array.<module:model/MetricsSample>} samples
 */
Metrics.prototype['samples'] = undefined;






export default Metrics;
