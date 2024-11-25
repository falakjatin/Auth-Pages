export const metadata = {
  title: 'Auth-Pages',
  description: 'Auth pages with theme switch',
}

const AuthLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <div className="sm:w-96 w-11/12 shadow-modalLightShadow dark:shadow-modalDarkShadow rounded-lg m-auto py-6 px-10 dark:bg-sky-950 text-center">
      {children}
    </div>
  )
}

export default AuthLayout
