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
 */

import { RequestFile } from './models';

export class ChangePasswordRequest {
    'email'?: string;
    'oldPassword'?: string;
    'newPassword'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "email",
            "baseName": "email",
            "type": "string"
        },
        {
            "name": "oldPassword",
            "baseName": "oldPassword",
            "type": "string"
        },
        {
            "name": "newPassword",
            "baseName": "newPassword",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ChangePasswordRequest.attributeTypeMap;
    }
}
