export default function Arrow({
  rotate,
  color,
}: {
  rotate?: boolean
  color?: string
}): JSX.Element {
  return (
    <svg
      width='20'
      height='20'
      viewBox='0 0 25 25'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={rotate ? 'transform rotate-180' : ''}
    >
      <path
        d='M12.4987 2.08301C18.2383 2.08301 22.9154 6.74967 22.9154 12.4997C22.9154 18.2393 18.2383 22.9163 12.4987 22.9163C6.7487 22.9163 2.08203 18.2393 2.08203 12.4997C2.08203 6.74967 6.7487 2.08301 12.4987 2.08301ZM9.4362 10.4476C9.13412 10.1351 8.63412 10.1351 8.33203 10.4372C8.01953 10.7497 8.01953 11.2393 8.33203 11.5413L11.9466 15.1768C12.0924 15.3226 12.2904 15.4059 12.4987 15.4059C12.707 15.4059 12.9049 15.3226 13.0508 15.1768L16.6654 11.5413C16.8216 11.3955 16.8945 11.1976 16.8945 10.9997C16.8945 10.7913 16.8216 10.5934 16.6654 10.4372C16.3529 10.1351 15.8633 10.1351 15.5612 10.4476L12.4987 13.5205L9.4362 10.4476Z'
        fill={color ? color : '#4A43EC'}
      />
    </svg>
  )
}
