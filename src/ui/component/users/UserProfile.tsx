import { motion } from 'framer-motion';

const UserProfile = ({ user }: any) => {
  const { image, name, email, job } = user;
  return (
    <section className="flex w-full items-center gap-5 ">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.8,
          type: 'spring',
          stiffness: 200,
          delay: 0.3,
        }}
      >
        <h2 className="pl-11 text-3xl text-red-600 dark:text-white">Profile</h2>
      </motion.div>
      <div className="flex w-full items-center justify-center gap-5">
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
            <p className=" text-lg capitalize dark:text-white">{name}</p>
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
            <p className=" text-lg  dark:text-white">{email}</p>
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
            <p className=" text-lg capitalize dark:text-white">{job}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
