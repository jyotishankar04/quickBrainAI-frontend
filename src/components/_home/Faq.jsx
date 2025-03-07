import React from "react";

const Faq = () => {
    const toggleFaq = (id) => {
        const answer = document.getElementById(`faq-answer-${id}`);
        const icon = document.getElementById(`faq-icon-${id}`);
        if (answer.classList.contains("hidden")) {
          answer.classList.remove("hidden");
          icon.classList.add("rotate-180");
        } else {
          answer.classList.add("hidden");
          icon.classList.remove("rotate-180");
        }
      };
    
  return (
    <div className="mt-20 max-w-4xl mx-auto" id="faq">
      <h3 className="text-2xl font-bold text-center mb-8">
        Frequently Asked Questions
      </h3>
      <div className="space-y-4">
        {/* FAQ Item 1 */}
        <div className="border border-gray-200 rounded-lg overflow-hidden animate__animated animate__fadeIn">
          <button
            className="flex justify-between items-center w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors"
            onClick={() => toggleFaq(1)}
          >
            <span className="font-medium text-gray-800">
              Can I change plans later?
            </span>
            <svg
              id="faq-icon-1"
              className="h-5 w-5 text-gray-500 transform transition-transform"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <div
            id="faq-answer-1"
            className="hidden px-6 py-4 bg-gray-50 border-t border-gray-100"
          >
            <p className="text-gray-600">
              Yes, you can upgrade or downgrade your plan at any time. When
              upgrading, you'll be charged the prorated amount for the remainder
              of your billing cycle. When downgrading, the new rate will apply
              at the start of your next billing period.
            </p>
          </div>
        </div>

        {/* FAQ Item 2 */}
        <div className="border border-gray-200 rounded-lg overflow-hidden animate__animated animate__fadeIn animate__delay-1s">
          <button
            className="flex justify-between items-center w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors"
            onClick={() => toggleFaq(2)}
          >
            <span className="font-medium text-gray-800">
              Is there a free trial available?
            </span>
            <svg
              id="faq-icon-2"
              className="h-5 w-5 text-gray-500 transform transition-transform"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <div
            id="faq-answer-2"
            className="hidden px-6 py-4 bg-gray-50 border-t border-gray-100"
          >
            <p className="text-gray-600">
              Yes, we offer a 14-day free trial for the Pro plan. No credit card
              is required to start your trial. You'll receive a notification
              before your trial expires with options to continue with a paid
              subscription or downgrade to the Free plan.
            </p>
          </div>
        </div>

        {/* FAQ Item 3 */}
        <div className="border border-gray-200 rounded-lg overflow-hidden animate__animated animate__fadeIn animate__delay-2s">
          <button
            className="flex justify-between items-center w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors"
            onClick={() => toggleFaq(3)}
          >
            <span className="font-medium text-gray-800">
              What payment methods do you accept?
            </span>
            <svg
              id="faq-icon-3"
              className="h-5 w-5 text-gray-500 transform transition-transform"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <div
            id="faq-answer-3"
            className="hidden px-6 py-4 bg-gray-50 border-t border-gray-100"
          >
            <p className="text-gray-600">
              We accept all major credit cards (Visa, Mastercard, American
              Express, Discover), PayPal, and for Business plans, we also
              support invoicing and bank transfers. All payments are securely
              processed and your payment information is never stored on our
              servers.
            </p>
          </div>
        </div>

        {/* FAQ Item 4 */}
        <div className="border border-gray-200 rounded-lg overflow-hidden animate__animated animate__fadeIn animate__delay-3s">
          <button
            className="flex justify-between items-center w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors"
            onClick={() => toggleFaq(4)}
          >
            <span className="font-medium text-gray-800">
              Can I cancel my subscription anytime?
            </span>
            <svg
              id="faq-icon-4"
              className="h-5 w-5 text-gray-500 transform transition-transform"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <div
            id="faq-answer-4"
            className="hidden px-6 py-4 bg-gray-50 border-t border-gray-100"
          >
            <p className="text-gray-600">
              Yes, you can cancel your subscription at any time from your
              account settings. When you cancel, you'll continue to have access
              to your paid features until the end of your current billing
              period. After that, your account will automatically switch to the
              Free plan.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
