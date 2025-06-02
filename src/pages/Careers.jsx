import React, { useState } from 'react';

const Careers = () => {
  const [status, setStatus] = useState('idle'); // ✅ Correct for .jsx
const [page, setPage] = useState(0);          // (optional: remove if unused)
const [loading, setLoading] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/yourFormID', {
        method: 'POST',
        body: data,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        form.reset();
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-slate-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center mb-12 mt-12">
        <h2 className="text-4xl font-bold text-slate-800 mb-4">Careers at Bluewave</h2>
        <p className="text-slate-600 text-lg">
          Submit your application to join our team. We’ll review and reach out if you're a match!
        </p>
      </div>

      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-8">
        {status === 'success' && (
          <div className="text-green-600 text-center font-medium mb-6">
            ✅ Thank you! Your application has been submitted.
          </div>
        )}
        {status === 'error' && (
          <div className="text-red-600 text-center font-medium mb-6">
            ❌ Something went wrong. Please try again later.
          </div>
        )}

        <form onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-700">Full Name</label>
            <input
              type="text"
              name="name"
              required
              className="mt-1 block w-full border border-slate-300 rounded-md shadow-sm py-2 px-3 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700">Email</label>
            <input
              type="email"
              name="email"
              required
              className="mt-1 block w-full border border-slate-300 rounded-md shadow-sm py-2 px-3 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700">Message</label>
            <textarea
              name="message"
              rows={4}
              className="mt-1 block w-full border border-slate-300 rounded-md shadow-sm py-2 px-3 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Write a brief message or cover letter..."
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700">Upload Resume (PDF, DOC)</label>
            <input
              type="file"
              name="resume"
              accept=".pdf,.doc,.docx"
              required
              className="mt-1 block w-full text-slate-700"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
            >
              {loading ? 'Sending...' : 'Submit Application'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Careers;