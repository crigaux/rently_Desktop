export default function Properties({ color }: { color?: string }): JSX.Element {
  return (
    <svg
      width='30'
      height='30'
      viewBox='0 0 50 50'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M43.7507 39.5833H47.9173V43.75H2.08398V39.5833H6.25065V8.33333C6.25065 7.7808 6.47014 7.25089 6.86085 6.86019C7.25155 6.46949 7.78145 6.25 8.33398 6.25H29.1673C29.7199 6.25 30.2498 6.46949 30.6405 6.86019C31.0312 7.25089 31.2507 7.7808 31.2507 8.33333V39.5833H39.584V22.9167H35.4173V18.75H41.6673C42.2199 18.75 42.7498 18.9695 43.1405 19.3602C43.5312 19.7509 43.7507 20.2808 43.7507 20.8333V39.5833ZM10.4173 10.4167V39.5833H27.084V10.4167H10.4173ZM14.584 22.9167H22.9173V27.0833H14.584V22.9167ZM14.584 14.5833H22.9173V18.75H14.584V14.5833Z'
        fill={color}
      />
    </svg>
  )
}
