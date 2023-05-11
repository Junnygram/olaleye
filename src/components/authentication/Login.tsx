import React, { useEffect, useState } from 'react';
import PrimaryInput from '@/utils/PrimaryInput';
import { LoginModel } from '@/services/models/LoginModel';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Cookies from 'js-cookie';
import YupPassword from 'yup-password';
import Image from 'next/image';
import Link from 'next/link';
import SubmitButton from '@/utils/SubmitButton';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; //requires a loader
import { Carousel } from 'react-responsive-carousel';
YupPassword(yup);

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().password(),
});

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const changeInputType = () => {
    setPasswordVisible(!passwordVisible);
  };
  const [terms, setTerms] = useState<boolean>(false);
  const [loggedIn, setLoggedIn] = useState<any>({});
  useEffect(() => {
    if (Cookies.get('hash') !== undefined) {
      setLoggedIn(JSON.parse(Cookies.get('hash') as string));
    }
  }, []);
  console.log({ loggedIn });
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<LoginModel>({
    resolver: yupResolver(schema),
    mode: 'all',
  });

  const onSubmit = async (data: LoginModel) => {
    const logged = {
      email: data.email,
      password: data.password,
    };
    //   try {
    //     const result = await UserService.loginUser({ requestBody: data });
    //     if (result.status) {
    //       toast.success("Login Successful!");
    //       Cookies.set("user", JSON.stringify(result.data));
    //       if (terms) {
    //         Cookies.set("hash", JSON.stringify(logged), {
    //           expires: 10,
    //         });
    //       }
    //       window.location.href = "";
    //       return;
    //     }
    //     toast.error(result.message as string);
    //     return;
    //   } catch (err: any) {
    //     toast.error(err.message || err.body.message);
    //   }
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
                  Sign in to your account
                </h1>

                <form onSubmit={handleSubmit(onSubmit)}>
                  <PrimaryInput<LoginModel>
                    label="Email Address"
                    type="text"
                    placeholder="Enter your email"
                    name="email"
                    error={errors.email}
                    register={register}
                    defaultValue={loggedIn.email}
                  />
                  <PrimaryInput<LoginModel>
                    label="Password"
                    type={passwordVisible ? 'text' : 'password'}
                    icon={true}
                    changeVisibility={changeInputType}
                    passwordVisible={passwordVisible}
                    placeholder="Enter your password"
                    name="password"
                    error={errors.password}
                    register={register}
                    defaultValue={loggedIn.password}
                  />
                  <SubmitButton
                    textContent="sign in"
                    isLoading={isSubmitting}
                  />
                </form>

                <div className="text-sm flex justify-center">
                  Don&apos;t have an account? You can
                  <Link href="/register">
                    <span className="text-blue-600 hover:text-blue-800 ">
                      {' '}
                      &nbsp;signup here.
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>{' '}
      </section>
    </>
  );
};

export default Login;
