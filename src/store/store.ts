// eslint-disable-next-line import/named
import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import addressApi from '../features/address/addressApi.ts'
import agencyApi from '../features/agency/agencyApi.ts'
import agencySlice from '../features/agency/agencySlice.ts'
import appointmentApi from '../features/appointment/appointmentApi.ts'
import appointmentTagApi from '../features/appointmentTag/appointmentTagApi.ts'
import articleApi from '../features/article/articleApi.ts'
import articleSlice from '../features/article/articleSlice.ts'
import attachmentApi from '../features/attachment/attachmentApi.ts'
import authApi from '../features/auth/authApi.ts'
import authSlice from '../features/auth/authSlice.ts'
import bookmarkApi from '../features/bookmark/bookmarkApi.ts'
import bookmarkSlice from '../features/bookmark/bookmarkSlice.ts'
import countryApi from '../features/country/countryApi.ts'
import countrySlice from '../features/country/countrySlice.ts'
import mailApi from '../features/mail/mailApi.ts'
import messageSlice from '../features/messages/messageSlice.ts'
import messageApi from '../features/messages/messagesApi.ts'
import propertyApi from '../features/property/propertyApi.ts'
import propertySlice from '../features/property/propertySlice.ts'
import propertyTypeApi from '../features/propertyType/propertyTypeApi.ts'
import roleApi from '../features/role/roleApi.ts'
import roleSlice from '../features/role/roleSlice.ts'
import sectorApi from '../features/sector/sectorApi.ts'
import statusApi from '../features/status/statusApi.ts'
import tagApi from '../features/tag/tagApi.ts'
import userApi from '../features/user/userApi.ts'
import userSlice from '../features/user/userSlice.ts'
import feesApi from '../features/fees/feesApi.ts'

export const store = configureStore({
  reducer: {
    [userSlice.name]: userSlice.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [propertySlice.name]: propertySlice.reducer,
    [propertyApi.reducerPath]: propertyApi.reducer,
    [articleSlice.name]: articleSlice.reducer,
    [articleApi.reducerPath]: articleApi.reducer,
    [addressApi.reducerPath]: addressApi.reducer,
    [authSlice.name]: authSlice.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [bookmarkSlice.name]: bookmarkSlice.reducer,
    [bookmarkApi.reducerPath]: bookmarkApi.reducer,
    [agencySlice.name]: agencySlice.reducer,
    [agencyApi.reducerPath]: agencyApi.reducer,
    [countrySlice.name]: countrySlice.reducer,
    [countryApi.reducerPath]: countryApi.reducer,
    [roleSlice.name]: roleSlice.reducer,
    [roleApi.reducerPath]: roleApi.reducer,
    [sectorApi.reducerPath]: sectorApi.reducer,
    [mailApi.reducerPath]: mailApi.reducer,
    [feesApi.reducerPath]: feesApi.reducer,
    [attachmentApi.reducerPath]: attachmentApi.reducer,
    [tagApi.reducerPath]: tagApi.reducer,
    [propertyTypeApi.reducerPath]: propertyTypeApi.reducer,
    [statusApi.reducerPath]: statusApi.reducer,
    [appointmentApi.reducerPath]: appointmentApi.reducer,
    [appointmentTagApi.reducerPath]: appointmentTagApi.reducer,
    [messageApi.reducerPath]: messageApi.reducer,
    [messageSlice.name]: messageSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
      .concat([userApi.middleware])
      .concat([propertyApi.middleware])
      .concat([articleApi.middleware])
      .concat([addressApi.middleware])
      .concat([authApi.middleware])
      .concat([bookmarkApi.middleware])
      .concat([agencyApi.middleware])
      .concat([countryApi.middleware])
      .concat([roleApi.middleware])
      .concat([sectorApi.middleware])
      .concat([mailApi.middleware])
      .concat([attachmentApi.middleware])
      .concat([tagApi.middleware])
      .concat([propertyTypeApi.middleware])
      .concat([statusApi.middleware])
      .concat([appointmentApi.middleware])
      .concat([appointmentTagApi.middleware])
      .concat([feesApi.middleware])
      .concat([messageApi.middleware]),
  devTools: true,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
