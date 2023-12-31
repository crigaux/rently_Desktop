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


import { HttpMethods, QueryConfig, ResponseBody, ResponseText } from 'redux-query';
import * as runtime from '../runtime';
import {
    MailsConfirmAccountMailRequest,
    MailsConfirmAccountMailRequestFromJSON,
    MailsConfirmAccountMailRequestToJSON,
    MailsSubscribeNewsletterRequest,
    MailsSubscribeNewsletterRequestFromJSON,
    MailsSubscribeNewsletterRequestToJSON,
} from '../models';

export interface MailsConfirmAccountMailRequest {
    mailsConfirmAccountMailRequest?: MailsConfirmAccountMailRequest;
}

export interface MailsResetPasswordMailRequest {
    mailsConfirmAccountMailRequest?: MailsConfirmAccountMailRequest;
}

export interface MailsSubscribeNewsletterRequest {
    mailsSubscribeNewsletterRequest?: MailsSubscribeNewsletterRequest;
}


/**
 * Send a mail with sendingblue
 */
function mailsConfirmAccountMailRaw<T>(requestParameters: MailsConfirmAccountMailRequest, requestConfig: runtime.TypedQueryConfig<T, object> = {}): QueryConfig<T> {
    let queryParameters = null;


    const headerParameters : runtime.HttpHeaders = {};

    headerParameters['Content-Type'] = 'application/json';


    const { meta = {} } = requestConfig;

    meta.authType = ['bearer'];
    const config: QueryConfig<T> = {
        url: `${runtime.Configuration.basePath}/mail/mail_confirm`,
        meta,
        update: requestConfig.update,
        queryKey: requestConfig.queryKey,
        optimisticUpdate: requestConfig.optimisticUpdate,
        force: requestConfig.force,
        rollback: requestConfig.rollback,
        options: {
            method: 'POST',
            headers: headerParameters,
        },
        body: queryParameters || MailsConfirmAccountMailRequestToJSON(requestParameters.mailsConfirmAccountMailRequest),
    };

    const { transform: requestTransform } = requestConfig;
    if (requestTransform) {
    }

    return config;
}

/**
* Send a mail with sendingblue
*/
export function mailsConfirmAccountMail<T>(requestParameters: MailsConfirmAccountMailRequest, requestConfig?: runtime.TypedQueryConfig<T, object>): QueryConfig<T> {
    return mailsConfirmAccountMailRaw(requestParameters, requestConfig);
}

/**
 * Send a mail with sendingblue
 */
function mailsResetPasswordMailRaw<T>(requestParameters: MailsResetPasswordMailRequest, requestConfig: runtime.TypedQueryConfig<T, object> = {}): QueryConfig<T> {
    let queryParameters = null;


    const headerParameters : runtime.HttpHeaders = {};

    headerParameters['Content-Type'] = 'application/json';


    const { meta = {} } = requestConfig;

    meta.authType = ['bearer'];
    const config: QueryConfig<T> = {
        url: `${runtime.Configuration.basePath}/mail/reset_password`,
        meta,
        update: requestConfig.update,
        queryKey: requestConfig.queryKey,
        optimisticUpdate: requestConfig.optimisticUpdate,
        force: requestConfig.force,
        rollback: requestConfig.rollback,
        options: {
            method: 'POST',
            headers: headerParameters,
        },
        body: queryParameters || MailsConfirmAccountMailRequestToJSON(requestParameters.mailsConfirmAccountMailRequest),
    };

    const { transform: requestTransform } = requestConfig;
    if (requestTransform) {
    }

    return config;
}

/**
* Send a mail with sendingblue
*/
export function mailsResetPasswordMail<T>(requestParameters: MailsResetPasswordMailRequest, requestConfig?: runtime.TypedQueryConfig<T, object>): QueryConfig<T> {
    return mailsResetPasswordMailRaw(requestParameters, requestConfig);
}

/**
 * Subscribe to newsletter
 */
function mailsSubscribeNewsletterRaw<T>(requestParameters: MailsSubscribeNewsletterRequest, requestConfig: runtime.TypedQueryConfig<T, object> = {}): QueryConfig<T> {
    let queryParameters = null;


    const headerParameters : runtime.HttpHeaders = {};

    headerParameters['Content-Type'] = 'application/json';


    const { meta = {} } = requestConfig;

    meta.authType = ['bearer'];
    const config: QueryConfig<T> = {
        url: `${runtime.Configuration.basePath}/mail/subscribe_newsletter`,
        meta,
        update: requestConfig.update,
        queryKey: requestConfig.queryKey,
        optimisticUpdate: requestConfig.optimisticUpdate,
        force: requestConfig.force,
        rollback: requestConfig.rollback,
        options: {
            method: 'POST',
            headers: headerParameters,
        },
        body: queryParameters || MailsSubscribeNewsletterRequestToJSON(requestParameters.mailsSubscribeNewsletterRequest),
    };

    const { transform: requestTransform } = requestConfig;
    if (requestTransform) {
    }

    return config;
}

/**
* Subscribe to newsletter
*/
export function mailsSubscribeNewsletter<T>(requestParameters: MailsSubscribeNewsletterRequest, requestConfig?: runtime.TypedQueryConfig<T, object>): QueryConfig<T> {
    return mailsSubscribeNewsletterRaw(requestParameters, requestConfig);
}

