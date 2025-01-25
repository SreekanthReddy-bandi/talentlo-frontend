import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
  isOpen: boolean;
}

const faqs: FAQItem[] = [
  {
    question: 'How does the hiring process work for freelancers?',
    answer:
      "Once your profile is set up, companies can send you invitations for projects. You'll have the option to accept, decline, or negotiate. Track your interview progress and feedback, all from your dashboard.",
    isOpen: false,
  },
  {
    question: 'How does this platform work overall?',
    answer:
      "For clients, it's about finding the right talent for your needs. For freelancers, it's about showcasing your expertise and building rewarding connections.",
    isOpen: false,
  },
  {
    question: 'What happens after I complete my company profile?',
    answer: 'This is a placeholder answer for now.',
    isOpen: false,
  },
];

const Launching: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<'client' | 'freelancer'>('freelancer');
  const [faqItems, setFaqItems] = useState<FAQItem[]>(faqs);

  const toggleFAQ = (index: number) => {
    setFaqItems((prevFaqs) =>
      prevFaqs.map((faq, i) =>
        i === index ? { ...faq, isOpen: !faq.isOpen } : faq
      )
    );
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="lg:w-1/2">
          <div className="flex items-center mb-6">
            <span className="text-2xl font-bold">TalentLo.</span>
          </div>
          <p className="text-3xl font-bold mb-4">WELCOME TO TALENTLO</p>
          <h1 className="text-2xl font-semibold mb-6">Join Our Community</h1>

          <div>
            {faqItems.map((faq, index) => (
              <div key={index} className="mb-4 border rounded p-4">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-medium">{faq.question}</span>
                  <span>{faq.isOpen ? '-' : '+'}</span>
                </div>
                {faq.isOpen && <p className="mt-2 text-gray-700">{faq.answer}</p>}
              </div>
            ))}
          </div>
        </div>
        <div className="lg:w-1/2">
          <div className="border rounded p-6">
            <div className="mb-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio h-5 w-5 text-blue-600"
                  value="client"
                  checked={selectedRole === 'client'}
                  onChange={() => setSelectedRole('client')}
                />
                <span className="ml-2">
                  For Clients<br />
                  <span className="text-sm text-gray-600">Looking to hire skilled contract workers for your next project?</span>
                </span>
              </label>
            </div>
            <div>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio h-5 w-5 text-blue-600"
                  value="freelancer"
                  checked={selectedRole === 'freelancer'}
                  onChange={() => setSelectedRole('freelancer')}
                />
                <span className="ml-2">
                  For Freelancers<br />
                  <span className="text-sm text-gray-600">Ready to offer your expertise on a part-time basis and take on new projects?</span>
                </span>
              </label>
            </div>
            <button className="w-full bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6">
              Apply as a Freelancer
            </button>
            <p className="mt-4 text-center text-black">Already have an account? <a href="#" className="text-blue-600">Log in</a></p>
          </div>
        </div>
      </div>
       <div className="mt-8 text-center text-gray-500 text-sm">
        <a href="#" className="mr-4">Terms of Service</a>
        <a href="#">Privacy Policy</a>
      </div>
    </div>
  );
};

export default Launching;