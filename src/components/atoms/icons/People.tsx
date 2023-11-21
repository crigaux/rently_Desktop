export default function People({ color }: { color?: string }): JSX.Element {
  return (
    <svg
      width='30'
      height='30'
      viewBox='0 0 50 50'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M46.875 43.75C46.875 43.75 50 43.75 50 40.625C50 37.5 46.875 28.125 34.375 28.125C21.875 28.125 18.75 37.5 18.75 40.625C18.75 43.75 21.875 43.75 21.875 43.75H46.875ZM21.9437 40.625C21.9207 40.6218 21.8977 40.6176 21.875 40.6125C21.8781 39.7875 22.3969 37.3938 24.25 35.2375C25.975 33.2156 29.0062 31.25 34.375 31.25C39.7406 31.25 42.7719 33.2187 44.5 35.2375C46.3531 37.3938 46.8687 39.7906 46.875 40.6125L46.85 40.6188C46.8355 40.6212 46.8209 40.6233 46.8062 40.625H21.9437ZM34.375 21.875C36.0326 21.875 37.6223 21.2165 38.7944 20.0444C39.9665 18.8723 40.625 17.2826 40.625 15.625C40.625 13.9674 39.9665 12.3777 38.7944 11.2056C37.6223 10.0335 36.0326 9.375 34.375 9.375C32.7174 9.375 31.1277 10.0335 29.9556 11.2056C28.7835 12.3777 28.125 13.9674 28.125 15.625C28.125 17.2826 28.7835 18.8723 29.9556 20.0444C31.1277 21.2165 32.7174 21.875 34.375 21.875ZM43.75 15.625C43.75 16.8561 43.5075 18.0752 43.0364 19.2127C42.5652 20.3501 41.8747 21.3836 41.0041 22.2541C40.1336 23.1247 39.1001 23.8152 37.9627 24.2864C36.8252 24.7575 35.6061 25 34.375 25C33.1439 25 31.9248 24.7575 30.7873 24.2864C29.6499 23.8152 28.6164 23.1247 27.7459 22.2541C26.8753 21.3836 26.1848 20.3501 25.7136 19.2127C25.2425 18.0752 25 16.8561 25 15.625C25 13.1386 25.9877 10.754 27.7459 8.99587C29.504 7.23772 31.8886 6.25 34.375 6.25C36.8614 6.25 39.246 7.23772 41.0041 8.99587C42.7623 10.754 43.75 13.1386 43.75 15.625ZM21.675 29C20.4249 28.6064 19.1364 28.3476 17.8312 28.2281C17.0979 28.1584 16.3616 28.124 15.625 28.125C3.125 28.125 0 37.5 0 40.625C0 42.7094 1.04063 43.75 3.125 43.75H16.3C15.8367 42.7744 15.6057 41.7048 15.625 40.625C15.625 37.4688 16.8031 34.2437 19.0313 31.55C19.7906 30.6312 20.675 29.7719 21.675 29ZM15.375 31.25C13.5255 34.029 12.5264 37.2869 12.5 40.625H3.125C3.125 39.8125 3.6375 37.4063 5.5 35.2375C7.20313 33.25 10.1625 31.3125 15.375 31.2531V31.25ZM4.6875 17.1875C4.6875 14.7011 5.67522 12.3165 7.43337 10.5584C9.19153 8.80022 11.5761 7.8125 14.0625 7.8125C16.5489 7.8125 18.9335 8.80022 20.6916 10.5584C22.4498 12.3165 23.4375 14.7011 23.4375 17.1875C23.4375 19.6739 22.4498 22.0585 20.6916 23.8166C18.9335 25.5748 16.5489 26.5625 14.0625 26.5625C11.5761 26.5625 9.19153 25.5748 7.43337 23.8166C5.67522 22.0585 4.6875 19.6739 4.6875 17.1875ZM14.0625 10.9375C12.4049 10.9375 10.8152 11.596 9.64308 12.7681C8.47098 13.9402 7.8125 15.5299 7.8125 17.1875C7.8125 18.8451 8.47098 20.4348 9.64308 21.6069C10.8152 22.779 12.4049 23.4375 14.0625 23.4375C15.7201 23.4375 17.3098 22.779 18.4819 21.6069C19.654 20.4348 20.3125 18.8451 20.3125 17.1875C20.3125 15.5299 19.654 13.9402 18.4819 12.7681C17.3098 11.596 15.7201 10.9375 14.0625 10.9375Z'
        fill={color}
      />
    </svg>
  )
}
