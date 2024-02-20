import React from 'react';

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg mb-4">If you have any questions or inquiries, please feel free to contact us using the form below:</p>
      <form className="flex flex-col items-center">
        <label htmlFor="name" className="text-lg mb-2">Name:</label>
        <input type="text" id="name" name="name" className="mb-4 px-4 py-2 rounded-lg border border-gray-700 bg-gray-800 text-white focus:outline-none focus:border-blue-500" />
        <label htmlFor="email" className="text-lg mb-2">Email:</label>
        <input type="email" id="email" name="email" className="mb-4 px-4 py-2 rounded-lg border border-gray-700 bg-gray-800 text-white focus:outline-none focus:border-blue-500" />
        <label htmlFor="message" className="text-lg mb-2">Message:</label>
        <textarea id="message" name="message" rows="4" cols="50" className="mb-4 px-4 py-2 rounded-lg border border-gray-700 bg-gray-800 text-white focus:outline-none focus:border-blue-500"></textarea>
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
