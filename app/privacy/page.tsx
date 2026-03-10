"use client";

import React, { useState } from "react";

const PrivacyPolicy = () => {
  const [isRevealed, setIsRevealed] = useState(false); // phone number mask toggle
  const phoneNumber = "519-216-7638";
  const maskedNumber = "519-xxx-xx38";

  // Prevent "tel:" link from firing on first click
  const handleToggle = (e: React.MouseEvent) => {
    if (!isRevealed) {
      e.preventDefault();
      setIsRevealed(true);
    }
  };

  return (
    <div className="bg-stone-50 p-10 flex flex-col items-center text-center">
      <h1 className="text-4xl font-bold mb-2 text-stone-800/90">
        Privacy Policy
      </h1>
      <p className="text-sm text-stone-700/90 mb-6 italic">
        Effective Date: March 10, 2026
      </p>
      <hr className="mb-8" />

      <section className="space-y-8 text-stone-800/90">
        <div>
          <p>
            At <strong>Katsbooks</strong>, your privacy is a priority. This
            policy outlines how we handle your personal information when you
            visit our site and interact with our bookkeeping services.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">1. Who We Are</h2>
          <p>
            Katsbooks is a professional bookkeeping firm based in Orangeville,
            Ontario, owned and operated by Kathryn Ryan.
          </p>
          <ul className="mt-2 list-none space-y-1 border-l-4 border-orange-500 pl-4">
            <li>
              <strong>Mailing Address:</strong> 39 Carlton Drive, Orangeville,
              ON
            </li>
            <li>
              <strong>Phone:</strong>{" "}
              <a
                href={isRevealed ? `tel:${phoneNumber.replace(/-/g, "")}` : "#"}
                onClick={handleToggle}
                className={`transition-all duration-300 font-medium ${
                  isRevealed
                    ? "cursor-pointer link"
                    : "cursor-help border-b border-dotted border-slate-400"
                }`}
                title={isRevealed ? "Call now" : "Click to reveal phone number"}
              >
                {isRevealed ? phoneNumber : maskedNumber}
              </a>
            </li>
            <li>
              <strong>Email:</strong>{" "}
              <a href="mailto:kat.cutler.ryan@gmail.com">
                kat.cutler.ryan@gmail.com
              </a>
            </li>
          </ul>
        </div>

        <div id="cookies">
          <h2 className="text-2xl font-semibold mb-3">
            2. Information Collection
          </h2>
          <p className="mb-2">
            We may collect information provided voluntarily by you (Name, Email,
            Phone, and financial details for inquiries) and non-personal
            technical data (IP address, browser type) collected via cookies for
            site analytics.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">
            3. How We Use Your Information
          </h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              To respond to bookkeeping inquiries and consultation requests.
            </li>
            <li>To provide professional accounting and tax services.</li>
            <li>To comply with CRA and Canadian regulatory requirements.</li>
            <li>To improve our website performance and user experience.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">4. Sharing & Security</h2>
          <p>
            We <strong>do not sell or rent</strong> your information. Data is
            only shared with authorized personnel or regulatory authorities when
            required by law. While we take reasonable steps to protect your
            data, no internet transmission is 100% secure.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">5. Your Rights</h2>
          <p>
            Under Canadian privacy laws (PIPEDA), you have the right to access,
            correct, or request the deletion of your personal information. To
            exercise these rights, please contact us at the email provided
            above.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">
            6. Changes to This Policy
          </h2>
          <p>
            We may update this policy periodically. Changes will be posted on
            this page with an updated effective date.
          </p>
        </div>

        <div className="bg-stone-800/90 p-6 rounded-xl border border-stone-100/90 text-center">
          <h3 className="font-bold text-lg mb-2 text-slate-100/90">
            Contact Us
          </h3>
          <p>
            If you have questions regarding your data, please contact{" "}
            <a href="mailto:kat.cutler.ryan@gmail.com">
              <strong>Kathryn Ryan</strong>
            </a>{" "}
            at the address or email listed above.
          </p>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
