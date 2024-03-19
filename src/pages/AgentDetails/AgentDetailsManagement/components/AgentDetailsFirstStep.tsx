import { useFormikContext } from 'formik'
import { useRef } from 'react'
import { toast } from 'sonner'
import {
  CountryModelRead,
  RoleSerializerRead,
  UserSerializerRead,
} from '../../../../api'
import Button from '../../../../components/atoms/Button'
import Typography from '../../../../components/atoms/Typography'
import FormikTextField from '../../../../components/molecules/core/FormikTextField'
import { useCreateAddressMutation } from '../../../../features/address/addressApi'
import { useGetCountriesQuery } from '../../../../features/country/countryApi'
import { useGetRolesQuery } from '../../../../features/role/roleApi'
import {
  useCreateUserMutation,
  useUpdateUserMutation,
} from '../../../../features/user/userApi'
import { setSelectedUserId } from '../../../../features/user/userSlice'
import { useAppDispatch } from '../../../../store/store'
import useGeneratePassword from '../../../../hooks/useGeneratePassword'
import useFormikValidator from '../../../../hooks/useFormikValidator'
import { useResetPasswordMailMutation } from '../../../../features/mail/mailApi'

export default function AgentDetailsFirstStep({ agent }: { agent: any }) {
  const dispatch = useAppDispatch()

  const uploadInputRef = useRef<HTMLInputElement>(null)

  const formikContext = useFormikContext<any>()
  const { values } = formikContext

  const formikValidator = useFormikValidator(formikContext)

  const password = useGeneratePassword()

  const currentUser = JSON.parse(
    localStorage.getItem('user') ?? '{}',
  ) as UserSerializerRead

  const currentAgency = JSON.parse(
    localStorage.getItem('user') as string,
  ).agency_id

  const userRoles = useGetRolesQuery({}).data || []

  const userRole = userRoles.find(
    (role: RoleSerializerRead) => role.name === 'AGENT',
  )?.role_id

  const countryList = useGetCountriesQuery({}).data || []
  const country = countryList.find(
    (country: CountryModelRead) => country.name === 'France',
  )?.country_id

  const [updateUser] = useUpdateUserMutation()
  const [createUser] = useCreateUserMutation()
  const [createAddress] = useCreateAddressMutation()
  const [resetPasswordMail] = useResetPasswordMailMutation()

  const patchUser = async () => {
    const response = (await updateUser({
      id: agent.user_id,
      name: values.name,
      firstname: values.firstname,
      mail: values.mail,
      phone: values.phone,
      role_id: userRole,
      agency_id: currentAgency,
    })) as any

    if (response?.error) {
      toast.error(response?.error?.data?.message)
      return false
    }

    if (currentUser.user_id === agent.user_id) {
      localStorage.setItem('user', JSON.stringify(response?.data))
    }

    return true
  }

  const getCoordonates = async () => {
    const response = await fetch(
      `https://api-adresse.data.gouv.fr/search/?q=${values.way} ${values.zipcode} ${values.city}`,
    )
    const result = await response.json()
    const features = result.features
    const coordinates = features[0].geometry.coordinates
    return coordinates
  }

  const postUser = async () => {
    const coordonates = await getCoordonates()

    const addressResponse = await createAddress({
      address: values.way,
      city: values.city,
      zipcode: values.zipcode,
      longitude: coordonates?.[0] ?? 0,
      latitude: coordonates?.[1] ?? 0,
    }).unwrap()

    if (!addressResponse) return false

    const response = (await createUser({
      name: values.name,
      firstname: values.firstname,
      mail: values.mail,
      password: password,
      phone: values.phone,
      role_id: userRole,
      agency_id: currentAgency,
      address_id: addressResponse.address_id,
      newsletter: false,
      country_id: country,
    })) as any

    if (response?.error) {
      toast.error(response?.error?.data?.message)
      return false
    }

    await resetPasswordMail({
      id: response?.data?.user_id,
    })

    toast.success("Création de l'utilisateur réussie, un mail a été envoyé")
    return true
  }

  const handleFileChange = (event: any) => {
    const file = event.target.files[0]

    const reader = new FileReader()

    const formData = new FormData()

    reader.onloadend = () => {
      const renamedFile = new File([file], 'avatar.png', { type: file.type })

      formData.append('file', renamedFile)
      fetch(
        `https://back-rently.mathieudacheux.fr/file/img/agent/${agent.user_id}`,
        {
          method: 'POST',
          body: formData,
        },
      )
    }

    reader.readAsDataURL(file)
  }

  return (
    <>
      <div className='w-11/12 flex flex-col items-start my-4'>
        <div className='w-full flex'>
          <div className='w-[80%] flex flex-col items-start'>
            <Typography variant='h1' className='w-full'>
              Profil utilisateur
            </Typography>
            <div className='flex flex-wrap justify-between w-[70%]'>
              <div className='mt-4 w-[45%]'>
                <FormikTextField
                  name='firstname'
                  label='Prénom'
                  placeholder='Prénom...'
                />
              </div>
              <div className='mt-4 w-[45%]'>
                <FormikTextField name='name' label='Nom' placeholder='Nom...' />
              </div>
              <div className='mt-4 w-[45%]'>
                <FormikTextField
                  name='phone'
                  label='Téléphone'
                  placeholder='Téléphone...'
                />
              </div>
              <div className='mt-4 w-[45%]'>
                <FormikTextField
                  name='mail'
                  label='Mail'
                  placeholder='jeandupont@mail.fr...'
                />
              </div>
            </div>
          </div>
          <div
            className='h-[250px] w-[250px] p-1 rounded-md cursor-pointer'
            onClick={() => {
              uploadInputRef.current?.click()
            }}
          >
            <img
              src={`https://back-rently.mathieudacheux.fr/public/img/agent/${agent.user_id}/resized-avatar.png`}
              onError={({ currentTarget }) => {
                currentTarget.onerror = null
                currentTarget.src =
                  'https://back-rently.mathieudacheux.fr/public/img/agent/none/avatar.png'
              }}
              key={agent.user_id}
              className='agent-image h-full w-full object-top rounded-md'
            />
            <input
              type='file'
              ref={uploadInputRef}
              className='hidden'
              onChange={handleFileChange}
              accept='.jpg,.jpeg,.png'
            />
          </div>
        </div>
        <div className=' flex flex-col justify-center w-full h-full pt-5 mt-4'>
          <div className='w-[70%] mt-4 flex flex-col items-start'>
            <Typography variant='h1' className='text-center'>
              Adresse
            </Typography>
            <div className='flex justify-between w-full mb-4'>
              <div className='w-[45%] mt-4'>
                <FormikTextField
                  name='way'
                  label='Adresse'
                  placeholder='12 rue de la paix'
                />
              </div>
              <div className='w-[12%] mt-4'>
                <FormikTextField
                  name='zipcode'
                  label='Code postal'
                  placeholder='75000'
                />
              </div>
              <div className='w-[23%] mt-4'>
                <FormikTextField
                  name='city'
                  label='Ville'
                  placeholder='Paris'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex w-2/12 justify-between mt-2'>
        <Button
          text='Quitter'
          onClick={() => dispatch(setSelectedUserId({ selectedUserId: null }))}
        />
        <Button
          text='Sauvegarder'
          onClick={async () => {
            const isValid = await formikValidator(values)

            if (!isValid) return

            const isSaved = agent.user_id ? await patchUser() : await postUser()
            if (!isSaved) return
            dispatch(setSelectedUserId({ selectedUserId: null }))
          }}
        />
      </div>
    </>
  )
}
