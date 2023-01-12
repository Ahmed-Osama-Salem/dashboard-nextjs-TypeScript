import { motion } from 'framer-motion';
import { BsCheckCircleFill } from 'react-icons/bs';
import { FaCircle, FaUserEdit } from 'react-icons/fa';
import { RiUserFollowFill } from 'react-icons/ri';

import DynamicButton from '../toggleBtn/DynamicButton';

const UserProfile = ({ user }: any) => {
  const { image, name, email, job, role } = user;
  return (
    <section className="flex w-full flex-col-reverse items-center justify-center lg:flex-row lg:items-center lg:justify-start ">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.8,
          type: 'spring',
          stiffness: 200,
          delay: 0.3,
        }}
        className="lg:w-[13%]"
      >
        <h2 className="invisible text-red-600 lg:visible lg:pl-11 lg:text-3xl">
          Profile
        </h2>

        {role && role === 'Admin' ? (
          <div className="flex gap-2 lg:flex-col lg:pl-11">
            <div className="flex items-center gap-3 ">
              <RiUserFollowFill
                size={23}
                className="text-red-500 dark:text-red-600"
              />
              <p className="capitalize dark:text-white lg:text-xl ">
                role:{''}
                <span className="text-gray-600 dark:text-white/70"> admin</span>
              </p>
            </div>
            <div className="flex items-center gap-4 ">
              <FaCircle
                size={20}
                className="rounded-full text-green-500 shadow-lg shadow-green-300/60"
              />
              <p className="capitalize dark:text-white lg:text-xl ">
                <span className="text-gray-600 dark:text-white/70">
                  {' '}
                  online
                </span>
              </p>
            </div>
            <div className="flex items-center gap-4 ">
              <BsCheckCircleFill
                size={20}
                className="rounded-full text-green-500"
              />
              <p className="capitalize dark:text-white/70 lg:text-lg ">
                email vrefied
              </p>
            </div>
          </div>
        ) : (
          <div className="flex gap-2 pl-4 lg:flex-col lg:pl-11">
            <div className="flex items-center gap-3 ">
              <FaUserEdit
                size={26}
                className="text-red-500 dark:text-red-600"
              />
              <p className="capitalize dark:text-white lg:text-xl ">
                role:{''}
                <span className="text-gray-600 dark:text-white/70">
                  {' '}
                  editor
                </span>
              </p>
            </div>
            <div className="flex items-center gap-4 ">
              <FaCircle
                size={20}
                className="rounded-full text-green-500 shadow-lg shadow-green-300/60"
              />
              <p className="capitalize dark:text-white lg:text-xl ">
                <span className="text-gray-600 dark:text-white/70">
                  {' '}
                  online
                </span>
              </p>
            </div>
            <div className="flex items-center gap-4 ">
              <BsCheckCircleFill
                size={20}
                className="rounded-full text-green-500"
              />
              <p className="capitalize dark:text-white/70 lg:text-lg ">
                email vrefied
              </p>
            </div>
          </div>
        )}
      </motion.div>
      <div className="flex flex-col items-center justify-start gap-5 lg:w-[80%] lg:flex-row lg:items-center lg:justify-center">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            type: 'spring',
            stiffness: 200,
            delay: 0.3,
          }}
        >
          <img
            src={image}
            alt=""
            className="w-[9rem] rounded-full shadow-2xl lg:w-[10rem]"
          />
        </motion.div>
        <div className="text-center lg:text-start">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.5,
              type: 'spring',
              stiffness: 200,
              delay: 0.3,
            }}
          >
            <p className="font-bold capitalize dark:text-white  lg:text-2xl">
              {name}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              type: 'spring',
              stiffness: 200,
              delay: 0.4,
            }}
          >
            <p className=" capitalize text-gray-600 dark:text-white lg:text-lg">
              {job}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              type: 'spring',
              stiffness: 200,
              delay: 0.6,
            }}
          >
            <p className=" dark:text-white  lg:text-lg">{email}</p>
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 1,
          type: 'spring',
          stiffness: 200,
          delay: 0.6,
        }}
        className="hidden lg:block"
      >
        <DynamicButton label={'Edit'} type="button" width="lg:w-[100px] " />
      </motion.div>
    </section>
  );
};

export default UserProfile;
