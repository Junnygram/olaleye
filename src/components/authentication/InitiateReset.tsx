import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useRouter } from 'next/router';
import { Carousel } from 'react-responsive-carousel';
import PrimaryInput from '@/utils/PrimaryInput';
import SubmitButton from '@/utils/SubmitButton';
import Image from 'next/image';
// import { InitiateResetModel, UserService } from 'src/services';

const schema = yup.object().shape({
  email: yup.string().email().required(),
});

const InitiateReset = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    //   } = useForm<InitiateResetModel>({
  } = useForm<any>({
    resolver: yupResolver(schema),
    mode: 'all',
  });

  const router = useRouter();

  //   const onSubmit = async (data: InitiateResetModel) => {
  const onSubmit = async (data: any) => {
    const logged = {
      email: data.email,
    };
    try {
      //   const result = await UserService.initiateReset({ requestBody: data });
      const result = await data.initiateReset({ requestBody: data });
      if (result.status) {
        // toast.success(result.message as string, { className: 'loginToast' });
        return;
      }
      //   toast.error(result.message as string);
      return;
    } catch (error: any) {
      //   toast.error(error?.body?.message || error?.message);
    }
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
                  Change your password
                </h1>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  style={{ width: '100%' }}
                >
                  {/* <PrimaryInput<InitiateResetModel> */}
                  <PrimaryInput<any>
                    label="Email"
                    name="email"
                    //   error={errors.email}
                    defaultValue=""
                    register={register}
                  />
                  <SubmitButton
                    textContent="Proceed"
                    isLoading={isSubmitting}
                  />
                  {/* {isValid && <p>Reset link has been sent to your email</p>} */}
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
    </>
  );
};

export default InitiateReset;
