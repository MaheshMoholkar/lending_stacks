const ContactForm = () => {
  return (
    <div className="m-12 border-2 border-zinc-500 p-4 md:p-8 lg:px-12 lg:mt-56 bg-white shadow-md">
      <h2 className="text-3xl font-bold mb-6 text-center text-zinc-500">
        Contact Form
      </h2>
      <form className="space-y-4">
        <div className="grid grid-cols-2 gap-8">
          <div>
            <label
              htmlFor="firstName"
              className="block font-semibold text-gray-700"
            >
              First Name*
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              className="px-2 mt-1 block w-2/3 rounded-xl bg-zinc-200 border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block font-semibold text-gray-700"
            >
              Last Name*
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              className="px-2 mt-1 block w-2/3 rounded-xl bg-zinc-200 border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <label
              htmlFor="phone"
              className="block font-semibold text-gray-700"
            >
              Phone*
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              className="px-2 mt-1 block w-2/3 rounded-xl bg-zinc-200 border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label htmlFor="iAm" className="block font-semibold text-gray-700">
              I am a...*
            </label>
            <select
              id="iAm"
              name="iAm"
              required
              className="px-2 mt-1 block w-2/3 rounded-xl bg-zinc-200 border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            >
              <option value="">Select...</option>
              <option value="individual">Individual</option>
              <option value="business">Business</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <label
              htmlFor="companyName"
              className="block font-semibold text-gray-700"
            >
              Company Name*
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              required
              className="px-2 mt-1 block w-2/3 rounded-xl bg-zinc-200 border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label
              htmlFor="loanAmount"
              className="block font-semibold text-gray-700"
            >
              Loan Amount*
            </label>
            <input
              type="text"
              id="loanAmount"
              name="loanAmount"
              required
              className="px-2 mt-1 block w-2/3 rounded-xl bg-zinc-200 border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
        </div>
        <div>
          <label htmlFor="email" className="block font-semibold text-gray-700">
            Email*
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="px-2 mt-1 block w-full rounded-xl bg-zinc-200 border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label
            htmlFor="website"
            className="block font-semibold text-gray-700"
          >
            Website
          </label>
          <input
            type="url"
            id="website"
            name="website"
            className="px-2 mt-1 block w-full rounded-xl bg-zinc-200 border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label htmlFor="memo" className="block font-semibold text-gray-700">
            Memo
          </label>
          <textarea
            id="memo"
            name="memo"
            rows={3}
            className="px-2 mt-1 block w-full rounded-xl bg-zinc-200 border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          ></textarea>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
