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
    AppointmentSerializerPost,
    AppointmentSerializerPostFromJSON,
    AppointmentSerializerPostToJSON,
    AppointmentSerializerPut,
    AppointmentSerializerPutFromJSON,
    AppointmentSerializerPutToJSON,
    AppointmentSerializerRead,
    AppointmentSerializerReadFromJSON,
    AppointmentSerializerReadToJSON,
} from '../models';

export interface AppointmentsCreateAppointmentRequest {
    appointmentSerializerPost: AppointmentSerializerPost;
}

export interface AppointmentsDeleteAppointmentRequest {
    id: number;
}

export interface AppointmentsGetAppointmentByIdRequest {
    id: number;
}

export interface AppointmentsGetAppointmentsByFilterRequest {
    userId1?: number;
    userId2?: number;
}

export interface AppointmentsGetAppointmentsByUserIdRequest {
    id: number;
}

export interface AppointmentsUpdateAppointmentRequest {
    id: number;
    appointmentSerializerPut?: AppointmentSerializerPut;
}


/**
 * Create a new appointment
 */
function appointmentsCreateAppointmentRaw<T>(requestParameters: AppointmentsCreateAppointmentRequest, requestConfig: runtime.TypedQueryConfig<T, AppointmentSerializerRead> = {}): QueryConfig<T> {
    if (requestParameters.appointmentSerializerPost === null || requestParameters.appointmentSerializerPost === undefined) {
        throw new runtime.RequiredError('appointmentSerializerPost','Required parameter requestParameters.appointmentSerializerPost was null or undefined when calling appointmentsCreateAppointment.');
    }

    let queryParameters = null;


    const headerParameters : runtime.HttpHeaders = {};

    headerParameters['Content-Type'] = 'application/json';


    const { meta = {} } = requestConfig;

    meta.authType = ['bearer'];
    const config: QueryConfig<T> = {
        url: `${runtime.Configuration.basePath}/appointments`,
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
        body: queryParameters || AppointmentSerializerPostToJSON(requestParameters.appointmentSerializerPost),
    };

    const { transform: requestTransform } = requestConfig;
    if (requestTransform) {
        config.transform = (body: ResponseBody, text: ResponseBody) => requestTransform(AppointmentSerializerReadFromJSON(body), text);
    }

    return config;
}

/**
* Create a new appointment
*/
export function appointmentsCreateAppointment<T>(requestParameters: AppointmentsCreateAppointmentRequest, requestConfig?: runtime.TypedQueryConfig<T, AppointmentSerializerRead>): QueryConfig<T> {
    return appointmentsCreateAppointmentRaw(requestParameters, requestConfig);
}

/**
 * Delete a appointment by its id
 */
function appointmentsDeleteAppointmentRaw<T>(requestParameters: AppointmentsDeleteAppointmentRequest, requestConfig: runtime.TypedQueryConfig<T, void> = {}): QueryConfig<T> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
        throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling appointmentsDeleteAppointment.');
    }

    let queryParameters = null;


    const headerParameters : runtime.HttpHeaders = {};


    const { meta = {} } = requestConfig;

    meta.authType = ['bearer'];
    const config: QueryConfig<T> = {
        url: `${runtime.Configuration.basePath}/appointments/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
        meta,
        update: requestConfig.update,
        queryKey: requestConfig.queryKey,
        optimisticUpdate: requestConfig.optimisticUpdate,
        force: requestConfig.force,
        rollback: requestConfig.rollback,
        options: {
            method: 'DELETE',
            headers: headerParameters,
        },
        body: queryParameters,
    };

    const { transform: requestTransform } = requestConfig;
    if (requestTransform) {
    }

    return config;
}

/**
* Delete a appointment by its id
*/
export function appointmentsDeleteAppointment<T>(requestParameters: AppointmentsDeleteAppointmentRequest, requestConfig?: runtime.TypedQueryConfig<T, void>): QueryConfig<T> {
    return appointmentsDeleteAppointmentRaw(requestParameters, requestConfig);
}

/**
 * Return a list of all appointments
 */
function appointmentsGetAllAppointmentsRaw<T>( requestConfig: runtime.TypedQueryConfig<T, Array<AppointmentSerializerRead>> = {}): QueryConfig<T> {
    let queryParameters = null;


    const headerParameters : runtime.HttpHeaders = {};


    const { meta = {} } = requestConfig;

    meta.authType = ['bearer'];
    const config: QueryConfig<T> = {
        url: `${runtime.Configuration.basePath}/appointments`,
        meta,
        update: requestConfig.update,
        queryKey: requestConfig.queryKey,
        optimisticUpdate: requestConfig.optimisticUpdate,
        force: requestConfig.force,
        rollback: requestConfig.rollback,
        options: {
            method: 'GET',
            headers: headerParameters,
        },
        body: queryParameters,
    };

    const { transform: requestTransform } = requestConfig;
    if (requestTransform) {
        config.transform = (body: ResponseBody, text: ResponseBody) => requestTransform(body.map(AppointmentSerializerReadFromJSON), text);
    }

    return config;
}

/**
* Return a list of all appointments
*/
export function appointmentsGetAllAppointments<T>( requestConfig?: runtime.TypedQueryConfig<T, Array<AppointmentSerializerRead>>): QueryConfig<T> {
    return appointmentsGetAllAppointmentsRaw( requestConfig);
}

/**
 * Return a appointment by his id
 */
function appointmentsGetAppointmentByIdRaw<T>(requestParameters: AppointmentsGetAppointmentByIdRequest, requestConfig: runtime.TypedQueryConfig<T, AppointmentSerializerRead> = {}): QueryConfig<T> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
        throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling appointmentsGetAppointmentById.');
    }

    let queryParameters = null;


    const headerParameters : runtime.HttpHeaders = {};


    const { meta = {} } = requestConfig;

    meta.authType = ['bearer'];
    const config: QueryConfig<T> = {
        url: `${runtime.Configuration.basePath}/appointments/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
        meta,
        update: requestConfig.update,
        queryKey: requestConfig.queryKey,
        optimisticUpdate: requestConfig.optimisticUpdate,
        force: requestConfig.force,
        rollback: requestConfig.rollback,
        options: {
            method: 'GET',
            headers: headerParameters,
        },
        body: queryParameters,
    };

    const { transform: requestTransform } = requestConfig;
    if (requestTransform) {
        config.transform = (body: ResponseBody, text: ResponseBody) => requestTransform(AppointmentSerializerReadFromJSON(body), text);
    }

    return config;
}

/**
* Return a appointment by his id
*/
export function appointmentsGetAppointmentById<T>(requestParameters: AppointmentsGetAppointmentByIdRequest, requestConfig?: runtime.TypedQueryConfig<T, AppointmentSerializerRead>): QueryConfig<T> {
    return appointmentsGetAppointmentByIdRaw(requestParameters, requestConfig);
}

/**
 * Return a list of appointments by filter
 */
function appointmentsGetAppointmentsByFilterRaw<T>(requestParameters: AppointmentsGetAppointmentsByFilterRequest, requestConfig: runtime.TypedQueryConfig<T, Array<AppointmentSerializerRead>> = {}): QueryConfig<T> {
    let queryParameters = null;

    queryParameters = {};


    if (requestParameters.userId1 !== undefined) {
        queryParameters['user_id_1'] = requestParameters.userId1;
    }


    if (requestParameters.userId2 !== undefined) {
        queryParameters['user_id_2'] = requestParameters.userId2;
    }

    const headerParameters : runtime.HttpHeaders = {};


    const { meta = {} } = requestConfig;

    meta.authType = ['bearer'];
    const config: QueryConfig<T> = {
        url: `${runtime.Configuration.basePath}/appointments/appointments_filter`,
        meta,
        update: requestConfig.update,
        queryKey: requestConfig.queryKey,
        optimisticUpdate: requestConfig.optimisticUpdate,
        force: requestConfig.force,
        rollback: requestConfig.rollback,
        options: {
            method: 'GET',
            headers: headerParameters,
        },
        body: queryParameters,
    };

    const { transform: requestTransform } = requestConfig;
    if (requestTransform) {
        config.transform = (body: ResponseBody, text: ResponseBody) => requestTransform(body.map(AppointmentSerializerReadFromJSON), text);
    }

    return config;
}

/**
* Return a list of appointments by filter
*/
export function appointmentsGetAppointmentsByFilter<T>(requestParameters: AppointmentsGetAppointmentsByFilterRequest, requestConfig?: runtime.TypedQueryConfig<T, Array<AppointmentSerializerRead>>): QueryConfig<T> {
    return appointmentsGetAppointmentsByFilterRaw(requestParameters, requestConfig);
}

/**
 * Return a list of appointments by user id
 */
function appointmentsGetAppointmentsByUserIdRaw<T>(requestParameters: AppointmentsGetAppointmentsByUserIdRequest, requestConfig: runtime.TypedQueryConfig<T, Array<object>> = {}): QueryConfig<T> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
        throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling appointmentsGetAppointmentsByUserId.');
    }

    let queryParameters = null;


    const headerParameters : runtime.HttpHeaders = {};


    const { meta = {} } = requestConfig;

    meta.authType = ['bearer'];
    const config: QueryConfig<T> = {
        url: `${runtime.Configuration.basePath}/appointments/user/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
        meta,
        update: requestConfig.update,
        queryKey: requestConfig.queryKey,
        optimisticUpdate: requestConfig.optimisticUpdate,
        force: requestConfig.force,
        rollback: requestConfig.rollback,
        options: {
            method: 'GET',
            headers: headerParameters,
        },
        body: queryParameters,
    };

    const { transform: requestTransform } = requestConfig;
    if (requestTransform) {
    }

    return config;
}

/**
* Return a list of appointments by user id
*/
export function appointmentsGetAppointmentsByUserId<T>(requestParameters: AppointmentsGetAppointmentsByUserIdRequest, requestConfig?: runtime.TypedQueryConfig<T, Array<object>>): QueryConfig<T> {
    return appointmentsGetAppointmentsByUserIdRaw(requestParameters, requestConfig);
}

/**
 * Update a appointment by its id
 */
function appointmentsUpdateAppointmentRaw<T>(requestParameters: AppointmentsUpdateAppointmentRequest, requestConfig: runtime.TypedQueryConfig<T, AppointmentSerializerRead> = {}): QueryConfig<T> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
        throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling appointmentsUpdateAppointment.');
    }

    let queryParameters = null;


    const headerParameters : runtime.HttpHeaders = {};

    headerParameters['Content-Type'] = 'application/json';


    const { meta = {} } = requestConfig;

    meta.authType = ['bearer'];
    const config: QueryConfig<T> = {
        url: `${runtime.Configuration.basePath}/appointments/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
        meta,
        update: requestConfig.update,
        queryKey: requestConfig.queryKey,
        optimisticUpdate: requestConfig.optimisticUpdate,
        force: requestConfig.force,
        rollback: requestConfig.rollback,
        options: {
            method: 'PUT',
            headers: headerParameters,
        },
        body: queryParameters || AppointmentSerializerPutToJSON(requestParameters.appointmentSerializerPut),
    };

    const { transform: requestTransform } = requestConfig;
    if (requestTransform) {
        config.transform = (body: ResponseBody, text: ResponseBody) => requestTransform(AppointmentSerializerReadFromJSON(body), text);
    }

    return config;
}

/**
* Update a appointment by its id
*/
export function appointmentsUpdateAppointment<T>(requestParameters: AppointmentsUpdateAppointmentRequest, requestConfig?: runtime.TypedQueryConfig<T, AppointmentSerializerRead>): QueryConfig<T> {
    return appointmentsUpdateAppointmentRaw(requestParameters, requestConfig);
}

