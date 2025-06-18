import DashboardLayout from "@/components/Layout/DashboardLayout";
import { FormField } from "@/components/ui/form-field";

const ProfileDetails = () => {
  return (
    <DashboardLayout>
      <div className="px-8 py-6">
        {/* Navigation tabs exactly as in Figma */}
        <div className="border-b border-gray-400 pb-6 mb-8">
          <div className="flex items-center gap-8">
            {/* My Account - Active Tab */}
            <div className="flex items-center gap-2">
              <svg
                width="12"
                height="12"
                viewBox="0 0 13 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 h-3"
              >
                <path
                  d="M6.14634 7.2C9.53912 7.2 12.2927 8.456 12.2927 10V12H0V10C0 8.456 2.75356 7.2 6.14634 7.2ZM11.4732 10C11.4732 8.896 9.08839 8 6.14634 8C3.20429 8 0.819512 8.896 0.819512 10V11.2H11.4732V10ZM6.14634 0C6.90706 0 7.63662 0.294999 8.17453 0.820101C8.71244 1.3452 9.01463 2.05739 9.01463 2.8C9.01463 3.54261 8.71244 4.2548 8.17453 4.7799C7.63662 5.305 6.90706 5.6 6.14634 5.6C5.38562 5.6 4.65606 5.305 4.11815 4.7799C3.58024 4.2548 3.27805 3.54261 3.27805 2.8C3.27805 2.05739 3.58024 1.3452 4.11815 0.820101C4.65606 0.294999 5.38562 0 6.14634 0ZM6.14634 0.8C5.60297 0.8 5.08186 1.01071 4.69763 1.38579C4.31341 1.76086 4.09756 2.26957 4.09756 2.8C4.09756 3.33043 4.31341 3.83914 4.69763 4.21421C5.08186 4.58929 5.60297 4.8 6.14634 4.8C6.68971 4.8 7.21083 4.58929 7.59505 4.21421C7.97927 3.83914 8.19512 3.33043 8.19512 2.8C8.19512 2.26957 7.97927 1.76086 7.59505 1.38579C7.21083 1.01071 6.68971 0.8 6.14634 0.8Z"
                  fill="black"
                />
              </svg>
              <span className="text-base font-medium text-black font-helvetica">
                My Account
              </span>
            </div>

            {/* Downloads Tab */}
            <div className="flex items-center gap-2 text-gray-500">
              <svg
                width="12"
                height="12"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 h-3"
              >
                <path
                  d="M0.609375 9.90632V10.6774C0.609375 11.2934 0.85221 11.8842 1.28446 12.3197C1.71671 12.7553 2.30296 13 2.91425 13H10.5972C11.2085 13 11.7947 12.7553 12.227 12.3197C12.6592 11.8842 12.9021 11.2934 12.9021 10.6774V9.90323M6.75572 1V9.51613M6.75572 9.51613L9.44474 6.80645M6.75572 9.51613L4.06669 6.80645"
                  stroke="currentColor"
                  strokeWidth="0.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-base font-medium font-helvetica">
                Downloads
              </span>
            </div>

            {/* Payments Tab */}
            <div className="flex items-center gap-2 text-gray-500">
              <svg
                width="12"
                height="9"
                viewBox="0 0 14 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 h-3"
              >
                <path
                  d="M9.64586 6.75C9.53549 6.75 9.42964 6.78951 9.3516 6.85983C9.27355 6.93016 9.22971 7.02554 9.22971 7.125C9.22971 7.22446 9.27355 7.31984 9.3516 7.39017C9.42964 7.46049 9.53549 7.5 9.64586 7.5H11.3105C11.4209 7.5 11.5267 7.46049 11.6048 7.39017C11.6828 7.31984 11.7267 7.22446 11.7267 7.125C11.7267 7.02554 11.6828 6.93016 11.6048 6.85983C11.5267 6.78951 11.4209 6.75 11.3105 6.75H9.64586ZM0.0742188 2.0625C0.0742188 1.51549 0.315367 0.990886 0.744614 0.604092C1.17386 0.217298 1.75604 0 2.36309 0H11.1024C11.7095 0 12.2916 0.217298 12.7209 0.604092C13.1501 0.990886 13.3913 1.51549 13.3913 2.0625V6.9375C13.3913 7.48451 13.1501 8.00911 12.7209 8.39591C12.2916 8.7827 11.7095 9 11.1024 9H2.36309C1.75604 9 1.17386 8.7827 0.744614 8.39591C0.315367 8.00911 0.0742188 7.48451 0.0742188 6.9375V2.0625ZM2.36309 0.75C1.97679 0.75 1.60631 0.888281 1.33315 1.13442C1.05999 1.38056 0.906536 1.7144 0.906536 2.0625V3H12.559V2.0625C12.559 1.7144 12.4055 1.38056 12.1324 1.13442C11.8592 0.888281 11.4887 0.75 11.1024 0.75H2.36309ZM12.559 3.75H0.906536V6.9375C0.906536 7.662 1.55907 8.25 2.36309 8.25H11.1024C11.4887 8.25 11.8592 8.11172 12.1324 7.86558C12.4055 7.61944 12.559 7.2856 12.559 6.9375V3.75Z"
                  fill="currentColor"
                />
              </svg>
              <span className="text-base font-medium font-helvetica">
                Payments
              </span>
            </div>
          </div>

          {/* Active tab underline - exactly positioned like Figma */}
          <div className="w-[124px] h-0.5 bg-black mt-1"></div>
        </div>

        {/* Profile Details Title - exactly as Figma */}
        <h1 className="text-[32px] font-medium text-black font-helvetica mb-12">
          Profile Details
        </h1>

        {/* Profile Picture Section - exactly as Figma */}
        <div className="flex   items-center  gap-8 mb-12">
          {/* Profile Picture - exactly 96x96 as in Figma */}
          <div className="w-24 h-24 bg-gray-600 rounded-full"></div>

          {/* Upload buttons section */}
          <div className="flex flex-row items-center gap-6">
            <button className="w-auto min-w-[212px] h-10 px-0 py-2 rounded-lg border border-black text-black text-base font-normal font-helvetica hover:bg-gray-50 flex items-center justify-center whitespace-nowrap">
              Upload profile picture
            </button>

            <button className="text-black text-base py-2 font-normal font-helvetica hover:underline self-start">
              Remove
            </button>
          </div>
        </div>

        {/* Form Section - exactly 328px max width as Figma */}
        <div className="max-w-[328px] space-y-8">
          {/* Name Field */}
          <div className="flex flex-col gap-3">
            <label className="text-base font-medium text-black font-montserrat">
              Name
            </label>
            <div className="w-full h-11 rounded-lg border border-gray-300 bg-gray-100"></div>
          </div>

          {/* Username Field */}
          <div className="flex flex-col gap-3">
            <label className="text-base font-medium text-black font-montserrat">
              Username
            </label>
            <div className="w-full h-11 rounded-lg border border-gray-300 bg-gray-100"></div>
          </div>

          {/* Email Field */}
          <div className="flex flex-col gap-3">
            <label className="text-base font-medium text-black font-montserrat">
              Email
            </label>
            <div className="w-full h-11 rounded-lg border border-gray-300 bg-gray-100"></div>
          </div>

          {/* Action Buttons - exactly as Figma */}
          <div className="flex gap-3 pt-4">
            <button className="w-[59px] h-[30px] px-3 py-1.5 rounded border border-gray-300 bg-gray-100 text-black text-xs font-normal font-helvetica hover:bg-gray-200 flex items-center justify-center">
              Cancel
            </button>
            <button className="w-[48px] h-[30px] px-3 py-1.5 rounded bg-gray-800 text-white text-xs font-normal font-helvetica hover:bg-gray-900 flex items-center justify-center">
              Save
            </button>
          </div>
        </div>

        {/* Divider - exactly as Figma */}
        <div className="w-full h-px bg-gray-400 my-12"></div>

        {/* Password Section - exactly as Figma */}
        <div className="max-w-[328px] mb-2 ">
          <h2 className="text-base font-medium text-black font-montserrat mb-3">
            Password
          </h2>
          <button className="w-[188px] h-10 px-0 py-2 rounded-lg border border-black text-black text-base font-normal font-helvetica hover:bg-gray-50 flex items-center justify-center">
            Set new password
          </button>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-400 my-12"></div>

        {/* Connected Accounts Section - exactly as Figma */}
        <div className="max-w-[500px]">
          <h2 className="text-base font-medium text-black font-montserrat mb-8">
            Connected Accounts
          </h2>

          <div className="space-y-4">
            {/* Google Account */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                {/* Google Icon - 30x30 as in Figma */}
                <div className="w-[30px] h-[30px] bg-white rounded flex items-center justify-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                  </svg>
                </div>
                <span className="text-base font-light text-black font-montserrat">
                  Google
                </span>
              </div>
              <span className="text-base font-light text-black font-montserrat">
                Connected as VANSHIKA
              </span>
            </div>

            {/* Apple Account */}
            <div className="flex items-center gap-4">
              {/* Apple Icon - 26x30 as in Figma */}
              <div className="w-[26px] h-[30px] bg-black rounded flex items-center justify-center">
                <svg
                  width="16"
                  height="20"
                  viewBox="0 0 16 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.769 10.5c.014-1.974 1.591-2.925 1.664-2.975-0.906-1.321-2.316-1.502-2.818-1.522-1.2-0.121-2.341 0.707-2.948 0.707s-1.544-0.689-2.536-0.671c-1.305 0.021-2.505 0.759-3.177 1.928-1.353 2.348-0.347 5.826 0.973 7.733 0.645 0.935 1.415 1.985 2.425 1.948 0.973-0.038 1.34-0.629 2.515-0.629s1.514 0.629 2.536 0.609c1.048-0.017 1.721-0.939 2.364-1.877 0.743-1.083 1.049-2.134 1.067-2.187-0.023-0.011-2.045-0.784-2.065-3.114zM10.55 3.508c0.539-0.651 0.903-1.554 0.804-2.455-0.777 0.031-1.719 0.518-2.276 1.17-0.499 0.578-0.936 1.503-0.819 2.389 0.866 0.067 1.751-0.44 2.291-1.104z"
                    fill="white"
                  />
                </svg>
              </div>
              <span className="text-base font-light text-black font-montserrat">
                Apple
              </span>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ProfileDetails;
