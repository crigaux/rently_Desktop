export default function Profil({
  primary = false,
}: {
  primary?: boolean
}): JSX.Element {
  return (
    <svg
      width='23'
      height='22'
      viewBox='0 0 32 40'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M31.68 32.3868C31.68 38.9788 22.64 39.7408 15.842 39.7408L15.3555 39.7404C11.0244 39.7299 0 39.4564 0 32.3468C0 25.8893 8.6767 25.0263 15.423 24.9938L16.3285 24.9932C20.6593 25.0037 31.68 25.2772 31.68 32.3868ZM15.842 27.9928C7.32 27.9928 3 29.4568 3 32.3468C3 35.2628 7.32 36.7408 15.842 36.7408C24.362 36.7408 28.68 35.2768 28.68 32.3868C28.68 29.4708 24.362 27.9928 15.842 27.9928ZM15.842 0C21.698 0 26.46 4.764 26.46 10.62C26.46 16.476 21.698 21.238 15.842 21.238H15.778C9.934 21.22 5.2 16.454 5.21994 10.614C5.21994 4.764 9.984 0 15.842 0ZM15.842 2.856C11.56 2.856 8.07596 6.338 8.07596 10.62C8.062 14.888 11.52 18.368 15.784 18.384L15.842 19.812V18.384C20.122 18.384 23.604 14.9 23.604 10.62C23.604 6.338 20.122 2.856 15.842 2.856Z'
        fill={primary ? '#4A43EC' : '#F4A74B'}
      />
    </svg>
  )
}
