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

/**
 * The DisableRequest model module.
 * @module model/DisableRequest
 * @version 0.3.0
 */
class DisableRequest {
    /**
     * Constructs a new <code>DisableRequest</code>.
     * @alias module:model/DisableRequest
     */
    constructor() { 
        
        DisableRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DisableRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DisableRequest} obj Optional instance to populate.
     * @return {module:model/DisableRequest} The populated <code>DisableRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DisableRequest();

            if (data.hasOwnProperty('identity')) {
                obj['identity'] = ApiClient.convertToType(data['identity'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DisableRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DisableRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['identity'] && !(typeof data['identity'] === 'string' || data['identity'] instanceof String)) {
            throw new Error("Expected the field `identity` to be a primitive type in the JSON string but got " + data['identity']);
        }

        return true;
    }


}



/**
 * @member {String} identity
 */
DisableRequest.prototype['identity'] = undefined;






export default DisableRequest;
