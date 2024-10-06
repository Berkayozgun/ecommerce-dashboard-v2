import React, { useState } from 'react';

const Help = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How do I add a new product?",
      answer: "To add a new product, go to the 'Products' section in your dashboard and click on 'Add Product'. Fill in the required details and save."
    },
    {
      question: "How can I track my orders?",
      answer: "You can track your orders from the 'Orders' section. Here, you can see the status of each order and manage them accordingly."
    },
    {
      question: "What should I do if a customer has a complaint?",
      answer: "If a customer has a complaint, you can respond to them through the 'Messages' section. Make sure to address their concerns promptly."
    },
    {
      question: "How can I manage my inventory?",
      answer: "You can manage your inventory from the 'Inventory' section. Here, you can update stock levels and receive notifications for low stock."
    },
    {
      question: "How do I view my sales reports?",
      answer: "To view your sales reports, navigate"
    },
    {
      question: "What is your refund policy?",
      answer: "We offer a full refund for items returned within 30 days of delivery."
    },
    {
      question: "How long does shipping take?",
      answer: "Shipping times vary depending on your location. Please allow 3-7 business days for domestic delivery and 7-14 business days for international delivery."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we ship worldwide. Please note that international shipping rates and delivery times may vary."
    },
  ];

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">Help Center</h1>
      <p className="mt-2 text-gray-600">Find answers to your questions and get support.</p>

      <div className="mt-4 space-y-2">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-lg shadow-md">
            <button
              className="w-full text-left p-4 font-semibold focus:outline-none flex items-center justify-between"
              onClick={() => toggleAccordion(index)}
            >
              <span>{faq.question}</span>
              <span className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                &#9660; {/* Aşağı ok simgesi */}
              </span>
            </button>
            {openIndex === index && (
              <div className="p-4 border-t">
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Help;
