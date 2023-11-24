// tslint:disable
/**
 * Api documentation
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface AppointmentTagSerializerRead
 */
export interface AppointmentTagSerializerRead  {
    /**
     * 
     * @type {number}
     * @memberof AppointmentTagSerializerRead
     */
    appointment_tag_id?: number;
    /**
     * 
     * @type {string}
     * @memberof AppointmentTagSerializerRead
     */
    label?: string;
}

export function AppointmentTagSerializerReadFromJSON(json: any): AppointmentTagSerializerRead {
    return {
        'appointment_tag_id': !exists(json, 'appointment_tag_id') ? undefined : json['appointment_tag_id'],
        'label': !exists(json, 'label') ? undefined : json['label'],
    };
}

export function AppointmentTagSerializerReadToJSON(value?: AppointmentTagSerializerRead): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'appointment_tag_id': value.appointment_tag_id,
        'label': value.label,
    };
}


