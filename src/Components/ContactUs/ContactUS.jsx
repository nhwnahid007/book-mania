

const ContactUS = () => {
    return (
        <div>
          <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="info-card">
          <h2 className="text-xl font-bold mb-4">Contact Information</h2>
          <ul className="list-none space-y-2">
            <li className="flex items-center">
              <svg className="h-6 w-6 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l4 4L19 6" />
              </svg>
              <span>Email: info@bookmania.com</span>
            </li>
            <li className="flex items-center">
              <svg className="h-6 w-6 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21v-2a1 1 0 0 0-1-1h-7a1 1 0 0 0-1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2a1 1 0 0 1-1 1z" />
              </svg>
              <span>Phone: 01784051122</span>
            </li>
            <li>
              <a href="#" className="text-blue-500 hover:underline">Follow us on Social Media</a>
            </li>
          </ul>
        </div>
        <form className="contact-form">
          <h2 className="text-xl font-bold mb-4">Send Us a Message</h2>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 mb-2">
              Your Name
            </label>
            <input type="text" id="name" name="name" className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">
              Your Email
            </label>
            <input type="email" id="email" name="email" className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 mb-2">
              Message
            </label>
            <textarea id="message" name="message" rows="5" className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"></textarea>
          </div>
          <button type="submit" className="inline-flex items-center px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-md font-bold">
            Send Message
          </button>
        </form>
      </div>
    </div>  
        </div>
    );
};

export default ContactUS;