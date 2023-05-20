import React, { useEffect, useState } from 'react';
import PrimaryInput from '@/utils/PrimaryInput';
import { RegisterModel } from '@/services/models/RegisterModel';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Cookies from 'js-cookie';
import YupPassword from 'yup-password';
import Image from 'next/image';
import Link from 'next/link';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; //requires a loader
import SubmitButton from '@/utils/SubmitButton';
import { Carousel } from 'react-responsive-carousel';
YupPassword(yup);

const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().password(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), ''], 'Passwords must match'),
});

const Register = () => {
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const changeInputType = () => {
    setPasswordVisible(!passwordVisible);
  };
  const [terms, setTerms] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  console.log({ terms });

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<RegisterModel>({
    resolver: yupResolver(schema),
    mode: 'all',
  });

  const onSubmitRegister = async (data: RegisterModel) => {
    // if (!terms) {
    //   toast.error('You have not accepted the terms and conditions');
    //   return;
    // }
    // // console.log({ data });
    // try {
    //   const result = await UserService.create({ requestBody: data });
    //   console.log({ result });
    //   if (result.status) {
    //     toast.success(result.message as string);
    //     setSuccess(true);
    //     return;
    //   }
    //   toast.error(result.message as string);
    //   return;
    // } catch (error: any) {
    //   toast.error(error?.body?.message || error?.message);
    // }
  };

  return (
    <>
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
        <div className="flex flex-col items-center  justify-center px-6 py-8  h-screen lg:py-0">
          <div>
            <Image src="/assets/logo.jpeg" alt="logo" height={50} width={50} />
          </div>
          <div className="w-full bg-white rounded-lg shadow   sm:max-w-md  ">
            <div className="p-6">
              <h1 className="text-xl flex justify-center font-sm   text-gray-900 md:text-2xl ">
                Create your account
              </h1>

              <form onSubmit={handleSubmit(onSubmitRegister)}>
                <PrimaryInput<RegisterModel>
                  label="First Name"
                  type="text"
                  placeholder="Enter your email"
                  name="firstName"
                  error={errors.firstName}
                  register={register}
                />
                <PrimaryInput<RegisterModel>
                  label="Last Name"
                  placeholder="Enter your password"
                  name="lastName"
                  error={errors.lastName}
                  register={register}
                />
                <PrimaryInput<RegisterModel>
                  label="Email"
                  placeholder="Enter your password"
                  name="email"
                  error={errors.email}
                  register={register}
                />
                <PrimaryInput<RegisterModel>
                  label=" Password"
                  icon={true}
                  placeholder="Enter your password"
                  name="password"
                  passwordVisible={passwordVisible}
                  type={passwordVisible ? 'text' : 'password'}
                  changeVisibility={changeInputType}
                  error={errors.password}
                  register={register}
                />
                <PrimaryInput<RegisterModel>
                  label="Confirm Password"
                  icon={true}
                  placeholder="confirm your password"
                  type={passwordVisible ? 'text' : 'password'}
                  passwordVisible={passwordVisible}
                  changeVisibility={changeInputType}
                  name="confirmPassword"
                  error={errors.confirmPassword}
                  register={register}
                />
                <div className="flex items-center mb-4">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    onChange={(e) => setTerms(e.target.checked)}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded  "
                  />
                  <label className="ml-2 text-sm font-sm text-gray-500">
                    {' '}
                    I have read, undrestood and accept the
                    <span className="text-blue-500"> Terms and Conditions</span>
                  </label>
                </div>

                <SubmitButton textContent="sign up" isLoading={isSubmitting} />
              </form>
              <div className="text-sm flex justify-center">
                Already have an account? You can
                <Link href="/login">
                  <span className="text-blue-600 hover:text-blue-800 ">
                    {' '}
                    &nbsp;sign in.
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
