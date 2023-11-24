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
 * @interface MessageSerializerRead
 */
export interface MessageSerializerRead  {
    /**
     * 
     * @type {number}
     * @memberof MessageSerializerRead
     */
    message_id?: number;
    /**
     * 
     * @type {string}
     * @memberof MessageSerializerRead
     */
    content?: string;
    /**
     * 
     * @type {string}
     * @memberof MessageSerializerRead
     */
    created_at?: string;
    /**
     * 
     * @type {number}
     * @memberof MessageSerializerRead
     */
    user_id_1?: number;
    /**
     * 
     * @type {number}
     * @memberof MessageSerializerRead
     */
    user_id_2?: number;
    /**
     * 
     * @type {number}
     * @memberof MessageSerializerRead
     */
    sender_id?: number;
}

export function MessageSerializerReadFromJSON(json: any): MessageSerializerRead {
    return {
        'message_id': !exists(json, 'message_id') ? undefined : json['message_id'],
        'content': !exists(json, 'content') ? undefined : json['content'],
        'created_at': !exists(json, 'created_at') ? undefined : json['created_at'],
        'user_id_1': !exists(json, 'user_id_1') ? undefined : json['user_id_1'],
        'user_id_2': !exists(json, 'user_id_2') ? undefined : json['user_id_2'],
        'sender_id': !exists(json, 'sender_id') ? undefined : json['sender_id'],
    };
}

export function MessageSerializerReadToJSON(value?: MessageSerializerRead): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'message_id': value.message_id,
        'content': value.content,
        'created_at': value.created_at,
        'user_id_1': value.user_id_1,
        'user_id_2': value.user_id_2,
        'sender_id': value.sender_id,
    };
}


