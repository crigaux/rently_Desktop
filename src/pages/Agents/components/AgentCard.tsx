import { useTranslation } from 'react-i18next'
import { UserSerializerRead } from '../../../api'
import Calendar from '../../../components/atoms/icons/Calendar'
import Contact from '../../../components/atoms/icons/Contact'

export default function AgentCard({ agent }: { agent: UserSerializerRead }) {
  const { t } = useTranslation()

  return (
    <div
      className='card flex flex-row w-full h-[180px] justify-between'
      key={agent.user_id}
    >
      <div className='w-1/5 h-full bg-neutral-500 rounded-[20px]'>
        <img
          src={
            `https://back-rently.mathieudacheux.fr/public/img/agent/${agent.user_id}/avatar.png` ||
            'https://back-rently.mathieudacheux.fr/public/img/agent/none/avatar.png'
          }
          alt=''
          className='object-cover w-full h-full object-center rounded-[20px]'
        />
      </div>
      <div className='flex flex-col h-full justify-around w-6/12'>
        <div className='text-primary font-bold text-2xl'>
          {agent.firstname} {agent.name}
        </div>
        <div className='text-lg'>Ancienneté : 2 ans</div>
        <div className='text-lg'>CA : 12 000€</div>
      </div>
      <div className='flex h-full items-center gap-4'>
        <div className='btn-cta btn-contact'>
          <Contact />
          {t('propertyDetails.contact')}
        </div>
        <div className='btn-cta btn-calendar'>
          <Calendar />
          {t('propertyDetails.calendar')}
        </div>
      </div>
    </div>
  )
}
