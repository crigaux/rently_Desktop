import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { FETCH_BASE_URL } from '../../utils/constants.ts'

const baseQuery = fetchBaseQuery({
  baseUrl: FETCH_BASE_URL,
  headers: {
    Authorization: `Bearer ${localStorage?.getItem('token')}`,
    'Content-Type': 'application/json',
  },
})

const appointmentApi = createApi({
  reducerPath: 'appointmentApi',
  baseQuery,
  endpoints: (builder) => ({
    getAppointments: builder.query({
      query: () => 'appointments',
    }),
    getAppointmentById: builder.query({
      query: (id) => `appointments/${id}`,
    }),
    createAppointment: builder.mutation({
      query: (newAppointment) => ({
        url: 'appointments',
        method: 'POST',
        body: newAppointment,
      }),
    }),
    updateAppointment: builder.mutation({
      query: ({ id, ...put }) => ({
        url: `appointments/${id}`,
        method: 'PUT',
        body: put,
      }),
    }),
    deleteAppointment: builder.mutation({
      query: (id) => ({
        url: `appointments/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
})

export const {
  useGetAppointmentsQuery,
  useLazyGetAppointmentsQuery,
  useLazyGetAppointmentByIdQuery,
  useCreateAppointmentMutation,
  useUpdateAppointmentMutation,
  useDeleteAppointmentMutation,
} = appointmentApi

export default appointmentApi
