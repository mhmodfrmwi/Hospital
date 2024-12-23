const About = () => {
  return (
    <div className="mx-auto my-10 w-5/6 bg-slate-50 py-10 text-gray-800">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-semibold text-blue-700">
              Who We Are
            </h2>
            <p className="leading-relaxed text-gray-600">
              At Prescripto, we are committed to providing top-notch healthcare
              solutions. Our platform connects you with trusted doctors, making
              it easy to schedule appointments and receive the care you need.
            </p>
            <p className="mt-4 leading-relaxed text-gray-600">
              With years of experience and a dedicated team, we strive to make
              healthcare accessible and hassle-free for everyone.
            </p>
          </div>

          <div>
            <img
              src="assets/doc-header-img.png"
              alt="About Us"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="mt-16">
          <h2 className="mb-4 text-2xl font-semibold text-blue-700">
            Our Mission
          </h2>
          <p className="leading-relaxed text-gray-600">
            Our mission is to enhance the healthcare experience by providing a
            seamless platform that empowers patients and doctors alike. We
            believe in leveraging technology to bridge the gap and deliver
            quality care to everyone.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
