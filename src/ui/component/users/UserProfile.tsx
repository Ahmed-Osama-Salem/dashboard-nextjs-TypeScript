import { motion } from 'framer-motion';
import { BsCheckCircleFill } from 'react-icons/bs';
import { FaCircle, FaUserEdit } from 'react-icons/fa';
import { RiUserFollowFill } from 'react-icons/ri';

import DynamicButton from '../toggleBtn/DynamicButton';

const UserProfile = ({ user }: any) => {
  const { image, name, email, job, role } = user;
  return (
    <section className="flex w-full items-center justify-start ">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.8,
          type: 'spring',
          stiffness: 200,
          delay: 0.3,
        }}
        className="w-[13%]"
      >
        <h2 className="pl-11 text-3xl text-red-600 ">Profile</h2>

        {role && role === 'Admin' ? (
          <div className="flex flex-col gap-2 pl-11">
            <div className="flex items-center gap-3 ">
              <RiUserFollowFill
                size={23}
                className="text-red-500 dark:text-red-600"
              />
              <p className="text-xl capitalize dark:text-white ">
                role:{''}
                <span className="text-gray-600 dark:text-white/70"> admin</span>
              </p>
            </div>
            <div className="flex items-center gap-4 ">
              <FaCircle
                size={20}
                className="rounded-full text-green-500 shadow-lg shadow-green-300/60"
              />
              <p className="text-xl capitalize dark:text-white ">
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
              <p className="text-lg capitalize dark:text-white/70 ">
                email vrefied
              </p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-2 pl-11">
            <div className="flex items-center gap-3 ">
              <FaUserEdit
                size={26}
                className="text-red-500 dark:text-red-600"
              />
              <p className="text-xl capitalize dark:text-white ">
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
              <p className="text-xl capitalize dark:text-white ">
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
              <p className="text-lg capitalize dark:text-white/70 ">
                email vrefied
              </p>
            </div>
          </div>
        )}
      </motion.div>
      <div className="flex w-[80%] items-center justify-center gap-5">
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
            className="w-[10rem] rounded-full shadow-2xl"
          />
        </motion.div>
        <div>
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
            <p className="text-2xl font-bold capitalize  dark:text-white">
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
            <p className=" text-lg capitalize text-gray-600 dark:text-white">
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
            <p className=" text-lg  dark:text-white">{email}</p>
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
      >
        <DynamicButton label={'Edit'} type="button" width="w-[100px]" />
      </motion.div>
    </section>
  );
};

export default UserProfile;
