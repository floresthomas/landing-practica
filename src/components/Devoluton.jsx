import React from "react";

const Devoluton = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center py-10 px-4 md:px-10">
      <div className="mx-4 mb-8 md:mb-0">
        <h2 className="text-lg md:text-xl font-bold mb-2 text-center md:text-left">
          Got questions about our 30-day money-back guarantee?
        </h2>
        <p className="text-center md:text-left mb-4">Here’s how it works:</p>
      </div>
      <svg
        className="w-12 h-10 mx-auto mb-8 md:ml-8"
        viewBox="0 0 44 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="22" cy="22.2354" r="22" fill="#001D2F"></circle>
        <path
          d="M23.9277 28.7634V13.3057L23.4635 12.9507L18.1653 15.0263V15.5178L20.4593 16.1733V28.7634L18.493 29.9104V30.5112H25.8941V29.9104L23.9277 28.7634Z"
          fill="white"
        ></path>
      </svg>
      <div className="mx-4 mb-8 md:mb-0">
        <h2 className="text-lg md:text-xl font-bold mb-2 text-center md:text-left">
          Sign up and start using
        </h2>
        <p className="text-center md:text-left mb-4">
          Pick our 12-month plan and enjoy all of ExpressVPN’s amazing features
          for just $0.22 a day.
        </p>
      </div>
      <svg
        className="w-12 h-10 mx-auto mb-8 md:ml-8"
        viewBox="0 0 44 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="22" cy="22.2354" r="22" fill="#001D2F"></circle>
        <path
          d="M28.006 26.3327C26.9136 27.3979 26.0397 27.671 23.7456 27.671H19.2121L22.2435 25.4315C26.504 22.2908 28.1153 20.1879 28.1153 17.7573C28.1153 14.9443 26.0397 13.1145 22.9263 13.1145C19.9495 13.1145 17.4915 14.6985 16.0714 17.5934L16.8088 18.0577C18.2016 16.5283 19.7583 15.7636 21.5062 15.7636C23.254 15.7636 24.5649 17.0199 24.5649 18.6858C24.5649 20.2425 23.9368 21.2257 20.6595 24.6668L15.5798 29.9923L15.7983 30.5112H27.2686L28.5522 26.6332L28.006 26.3327Z"
          fill="white"
        ></path>
      </svg>
      <div className="mx-4">
        <h2 className="text-lg md:text-xl font-bold mb-2 text-center md:text-left">
          Not satisfied? No problem!
        </h2>
        <p className="text-center md:text-left mb-4">
          Simply contact Support within the first 30 days, and you’ll all get
          your money back.
        </p>
      </div>
    </div>
  );
};

export default Devoluton;
