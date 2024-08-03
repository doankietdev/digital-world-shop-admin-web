import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { AuthLayout, DocumentTitle, PasswordInput, TextInput } from '~/components'


function Login() {

  const schema = yup.object({
    email: yup.string().required('Please enter your email'),
    password: yup.string().required('Please enter password!')
  })

  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors, isDirty, isSubmitting }
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      email: '',
      password: ''
    },
    resolver: yupResolver(schema)
  })

  const onSubmit = (data) => {
    // eslint-disable-next-line no-console
    console.log(data)
  }

  return (
    <>
      <DocumentTitle title='Login' />
      <AuthLayout>
        <div className='flex flex-col gap-2.5 text-center'>
          <h1>Welcome back!</h1>
          <p className="lg:max-w-[300px] m-auto 4xl:max-w-[unset]">
            Enter login information to manage shop
          </p>
        </div>

        <form className='mt-5' onSubmit={handleSubmit(onSubmit)}>
          <div className='flex flex-col gap-5'>
            <TextInput
              id='email'
              label='Email'
              placeholder='Enter your email'
              {...register('email')}
              error={errors?.email?.message}
              onInput={() => clearErrors('email')}
            />

            <PasswordInput
              id="password"
              placeholder="Enter password"
              {...register('password')}
              error={errors?.password?.message}
              onInput={() => clearErrors('password')}
            />
          </div>

          <div className='flex flex-col items-center gap-6 mt-4'>
            <button className='text-btn'>
              Forgot Password?
            </button>

            <button className='btn btn--primary w-full' disabled={isSubmitting || !isDirty}>Login</button>
          </div>
        </form>
      </AuthLayout>
    </>
  )
}

export default Login
