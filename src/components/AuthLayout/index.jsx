import media from '~/assets/login.webp'
import { useWindowSize } from 'react-use'
import { Logo, Spring } from '~/components'


function AuthLayout({ children }) {
  const { width } = useWindowSize()

  return (
    <div className='flex-1 grid grid-cols-1 lg:grid-cols-2 4xl:grid-cols-[minmax(0,_1030px)_minmax(0,_1fr)]'>
      {
        width >= 1024 &&
        <div className='flex flex-col justify-center items-center lg:p-[60px]'>
          <Logo imgClassName='w-[60px]' textClassName='text-[28px]' />
          <p className="text-center tracking-[0.2px] font-semibold text-lg leading-6 max-w-[540px] my-7 mx-auto">
            Gain data-based insights, view progress at a glance, and manage your organization smarter
          </p>
          <img className="max-w-[520px]" src={media} alt="media"/>
        </div>
      }

      <div className='bg-widget px-4 py-10 lg:p-[60px] flex justify-center items-center'>
        <Spring className='max-w-[460px] w-full' type='slideUp' duration={400} delay={300} >
          {children}
        </Spring>
      </div>
    </div>
  )
}

export default AuthLayout
