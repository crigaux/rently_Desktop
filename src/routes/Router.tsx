import { APP_ROUTES } from './routes.ts'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home.tsx'
import Login from '../pages/Login/Login.tsx'
import ForgetPassword from '../pages/ForgetPassword/ForgetPassword.tsx'
import Properties from '../pages/Properties/Properties.tsx'
import Gestion from '../pages/Gestion/Gestion.tsx'
import MyAccount from '../pages/MyAccount/MyAccount.tsx'
import Blog from '../pages/Blog/Blog.tsx'
import BlogDetail from '../pages/BlogDetail/BlogDetail.tsx'
import Why from '../pages/Why/Why.tsx'
import Target from '../pages/Target/Target.tsx'
import PropertyDetails from '../pages/PropertyDetails/PropertyDetails.tsx'
import Agency from '../pages/Agency/Agency.tsx'

export default function RouterElement(): JSX.Element {
  return (
    <>
      <Routes>
        <Route path={APP_ROUTES.HOME} element={<Home />} />
        <Route path={APP_ROUTES.LOGIN} element={<Login />} />
        <Route path={APP_ROUTES.FORGOT_PASSWORD} element={<ForgetPassword />} />
        <Route path={APP_ROUTES.PROPERTIES} element={<Properties />} />
        <Route
          path={`${APP_ROUTES.PROPERTIES_DETAILS}/:property_name/:property_id`}
          element={<PropertyDetails />}
        />
        <Route path={APP_ROUTES.GESTION} element={<Gestion />} />
        <Route path={APP_ROUTES.ACCOUNT} element={<MyAccount />} />
        <Route path={APP_ROUTES.BLOG} element={<Blog />} />
        <Route
          path={`${APP_ROUTES.BLOG_DETAIL}/:id`}
          element={<BlogDetail />}
        />
        <Route path={APP_ROUTES.WHYRENTLY} element={<Why />} />
        <Route path={APP_ROUTES.OBJECTIF} element={<Target />} />
        <Route path={APP_ROUTES.AGENCY} element={<Agency />} />
      </Routes>
    </>
  )
}
