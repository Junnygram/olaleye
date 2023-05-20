import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useState } from 'react';
import PrimaryInput from '@/utils/PrimaryInput';
import DisabledInput from '@/utils/DisableInput';
import SubmitButton from '@/utils/SubmitButton';
// import { InitiateResetModel, PasswordReset, UserService } from 'src/services';
import { useRouter } from 'next/router';
import { Carousel } from 'react-responsive-carousel';
import Link from 'next/link';

const schema = yup.object().shape({
  newPassword: yup
    .string()
    .min(8, 'Password must be at least 8 characters')
    .required('New password is required'),
});

const CompleteReset = ({ code }: { code: string }) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<any>({
    resolver: yupResolver(schema),
    defaultValues: { code },
    mode: 'all',
  });

  const [retypePassword, setretypePassword] = useState<boolean>(false);
  const [confirmpassword, setConfirmPassword] = useState<string>();
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const changeInputType = () => {
    setPasswordVisible(!passwordVisible);
  };
  //   const onSubmit = async (data: PasswordReset) => {
  const onSubmit = async (data: any) => {
    if (data.newPassword != confirmpassword) {
      //   toast.error('Password do not match', { className: 'loginToast' });
      return;
    }
    try {
      //   const result = await UserService.completeReset({ requestBody: data });
      const result = await data.completeReset({ requestBody: data });
      if (result.status) {
        // toast.success(
        //   'Password reset successful, you will be redirected to login',
        //   { className: 'loginToast' }
        // );
        // router.push('/login');
        // return;
      }
      //   toast.error(result.message as string, { className: 'loginToast' });
    } catch (error: any) {
      //   toast.error(error.message || error.body.message, {
      //     className: 'loginToast',
      //   });
    }
  };

  return (
    <section className=" md:grid md:grid-cols-2 divide-x  ">
      <div className=" hidden  md:grid  border-r-2 w-full h=full ">
        <Carousel
          showStatus={false}
          autoPlay
          infiniteLoop
          animationHandler="fade"
          useKeyboardArrows
          showArrows={false}
          showThumbs={false}
          showIndicators={false}
          stopOnHover={false}
          interval={1000}
        >
          <Image
            src="/assets/012.jpeg"
            alt="any"
            width={1000}
            height={1000}
            style={{
              maxWidth: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />

          <Image
            src="/assets/005.jpeg"
            alt="any"
            width={1000}
            height={1000}
            style={{
              maxWidth: '100%',
              height: '50rem',
              objectFit: 'cover',
            }}
          />

          <Image
            src="/assets/006.jpeg"
            alt="any"
            width={1000}
            height={1000}
            style={{
              maxWidth: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </Carousel>
      </div>
      <div>
        <div className="flex flex-col items-center  justify-center px-6 py-8  h-screen ">
          <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 "
          >
            <Image
              className="w-8 mr-2"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
              alt="logo"
              width={10}
              height={10}
            />
            Olaleye
          </a>
          <div className="w-full bg-white rounded-lg shadow   sm:max-w-md  ">
            <div className="p-6">
              <h1 className="text-xl flex justify-center font-sm   text-gray-900 md:text-2xl ">
                Change your password
              </h1>
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* <PrimaryInput<PasswordReset> */}
                <PrimaryInput
                  label="New Password"
                  name="newPassword"
                  //   error={errors.newPassword}
                  register={register}
                  placeholder="Enter your password"
                  type={passwordVisible ? 'text' : 'password'}
                  icon={true}
                  passwordVisible={passwordVisible}
                  changeVisibility={changeInputType}
                />
                <DisabledInput<any>
                  label="Confirm Password"
                  type={retypePassword ? 'text' : 'password'}
                  icon={true}
                  passwordVisible={retypePassword}
                  changeVisibility={() => setretypePassword((prev) => !prev)}
                  placeholder="Enter your new password"
                  defaultValue={''}
                  onChange={(e: any) => setConfirmPassword(e.target.value)}
                />
                <SubmitButton
                  textContent="Change Password"
                  isLoading={isSubmitting}
                />
              </form>

              {/* <div className="text-sm flex justify-center">
                Don&apos;t have an account? You can
                <Link href="/register">
                  <span className="text-blue-600 hover:text-blue-800 ">
                    {' '}
                    &nbsp;signup here.
                  </span>
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </div>{' '}
    </section>
  );
};

export default CompleteReset;
