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


import ApiClient from "../ApiClient";
import DisableRequest from '../model/DisableRequest';
import EnableRequest from '../model/EnableRequest';
import EnableResponse from '../model/EnableResponse';

/**
* Environment service.
* @module api/EnvironmentApi
* @version 0.3.0
*/
export default class EnvironmentApi {

    /**
    * Constructs a new EnvironmentApi. 
    * @alias module:api/EnvironmentApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/DisableRequest} [body] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    disableWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['body'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['key'];
      let contentTypes = ['application/zrok.v1+json'];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/disable', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/DisableRequest} opts.body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    disable(opts) {
      return this.disableWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/EnableRequest} [body] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EnableResponse} and HTTP response
     */
    enableWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['body'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['key'];
      let contentTypes = ['application/zrok.v1+json'];
      let accepts = ['application/zrok.v1+json'];
      let returnType = EnableResponse;
      return this.apiClient.callApi(
        '/enable', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/EnableRequest} opts.body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EnableResponse}
     */
    enable(opts) {
      return this.enableWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}