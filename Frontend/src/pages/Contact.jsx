const Contact = () => {
  return (
    <div className="mx-auto my-10 w-5/6 bg-slate-50 py-10 text-gray-800">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-semibold text-blue-700">
              Get in Touch
            </h2>
            <p className="mb-4 leading-relaxed text-gray-600">
              Reach out to us via phone, email, or by filling out the contact
              form. We're always happy to assist you!
            </p>
            <ul className="space-y-4">
              <li>
                <span className="font-bold text-gray-700">Phone:</span>{" "}
                +1-212-456-7890
              </li>
              <li>
                <span className="font-bold text-gray-700">Email:</span>{" "}
                contact@prescripto.com
              </li>
              <li>
                <span className="font-bold text-gray-700">Address:</span> 123
                Healthcare Lane, Wellness City, USA
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-semibold text-blue-700">
              Send a Message
            </h2>
            <form className="space-y-6">
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  placeholder="Your Message"
                  rows="5"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-blue-700 px-4 py-2 text-white hover:bg-blue-800"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
