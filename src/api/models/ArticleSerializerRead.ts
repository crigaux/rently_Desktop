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
 * @interface ArticleSerializerRead
 */
export interface ArticleSerializerRead  {
    /**
     * 
     * @type {number}
     * @memberof ArticleSerializerRead
     */
    article_id?: number;
    /**
     * 
     * @type {string}
     * @memberof ArticleSerializerRead
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof ArticleSerializerRead
     */
    content?: string;
    /**
     * 
     * @type {number}
     * @memberof ArticleSerializerRead
     */
    tag_id?: number;
    /**
     * 
     * @type {number}
     * @memberof ArticleSerializerRead
     */
    user_id?: number;
}

export function ArticleSerializerReadFromJSON(json: any): ArticleSerializerRead {
    return {
        'article_id': !exists(json, 'article_id') ? undefined : json['article_id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'content': !exists(json, 'content') ? undefined : json['content'],
        'tag_id': !exists(json, 'tag_id') ? undefined : json['tag_id'],
        'user_id': !exists(json, 'user_id') ? undefined : json['user_id'],
    };
}

export function ArticleSerializerReadToJSON(value?: ArticleSerializerRead): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'article_id': value.article_id,
        'name': value.name,
        'content': value.content,
        'tag_id': value.tag_id,
        'user_id': value.user_id,
    };
}


