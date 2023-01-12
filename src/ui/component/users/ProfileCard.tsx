const ProfileCard = ({ user }: any) => {
  const { image, name, email, job } = user;

  return (
    <div className="min-h-screen w-full">
      <div className="border-1 mx-4 mt-20 max-w-screen-md rounded-lg bg-white px-10 py-6 shadow md:mx-auto">
        <div className="m-auto flex w-full flex-col items-start sm:flex-row">
          <div className="mx-auto flex sm:m-0 sm:mr-10">
            <div className="m-auto mr-4 h-20 w-20 items-center justify-center sm:h-32 sm:w-32">
              <img
                alt="profil"
                src={image}
                className="mx-auto h-20 w-20 rounded-full object-cover sm:h-32 sm:w-32"
              />
            </div>
          </div>
          <div className="m-auto flex flex-col pt-4 sm:mx-0 sm:pt-0">
            <div className="mx-auto flex flex-col sm:mx-0 sm:flex-row ">
              <h2 className="flex pr-4 text-xl font-light text-gray-900 sm:text-3xl"></h2>
              <div className="flex">
                <a className="flex items-center rounded border border-gray-600 bg-transparent px-1 text-sm font-medium text-gray-900 outline-none hover:border-blue-700 hover:bg-blue-600 hover:text-white focus:outline-none sm:ml-2">
                  Edit profile
                </a>
                <a
                  className="ml-2 cursor-pointer rounded-full border-transparent p-1 text-gray-700 hover:text-blue-600 focus:text-gray-600 focus:outline-none"
                  aria-label="Notifications"
                >
                  <svg
                    className="h-4 w-4 sm:h-8 sm:w-8"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="mt-3 flex items-center justify-between space-x-2">
              <div className="flex">
                <span className="mr-1 font-semibold">55 </span> Post
              </div>
              <div className="flex">
                <span className="mr-1 font-semibold">10k </span> Follower
              </div>
              <div className="flex">
                <span className="mr-1 font-semibold">20</span> Following
              </div>
            </div>
          </div>
        </div>
        <div className="w-full pt-5">
          <h1 className="text-lg font-semibold text-gray-800 sm:text-xl">
            {name}{' '}
          </h1>
          <p className="text-sm text-gray-500 md:text-base">{job}</p>
          <p className="text-sm text-gray-800 md:text-base">{email} </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
