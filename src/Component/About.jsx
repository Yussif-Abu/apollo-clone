import React from 'react'

const About = () => {
  return (
    <section className="flex py-10 ">
    <div className="container ">
      {/* Introduction Section */}
      <div className="mb-8">
        <h1 className="text-md font-bold mb-4">
          Apollo 24|7 - Your Most Trusted Healthcare Brand
        </h1>
        <p className="text-gray-600 leading-relaxed">
          Apollo 24|7 is the largest multi-channel digital healthcare platform
          in India, created with a vision of eliminating flexibility blockages
          from the healthcare industry. We believe in making healthcare
          affordable to everyone by combining analytic excellence, affordable
          cost, and extensive research with advanced technology. Apollo 24|7
          is a single online platform where you have access to a wide range
          of services such as <strong>online pharmacy</strong>,{" "}
          <strong>on-the-doctor consultations</strong>, and{" "}
          <strong>diagnostic lab tests at home</strong>. We also provide
          expert solutions for chronic conditions and COVID-care with a
          secured digital vault, where you can safely upload all your medical
          reports.
        </p>
      </div>

      {/* Why Choose Apollo Section */}
      <div className="mb-8">
        <h2 className="text-md font-semibold text-gray-800 mb-4">
          The Smart Choice for Your Health is Here
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Make the best decision for your health by choosing Apollo 24|7.
          Here’s why you can count on us:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          <li>40 years of legacy in the healthcare industry</li>
          <li>24x7 availability of doctors</li>
          <li>More than 10 million diagnostic tests each year</li>
          <li>2000+ collection centers and 100+ laboratories</li>
          <li>High-quality diagnostic solutions</li>
          <li>Fast and accurate test report results</li>
          <li>Several medical specialties under one roof</li>
          <li>
            Order medicines and book tests online with ease
          </li>
          <li>Digitized health queries</li>
        </ul>
      </div>

      {/* Online Doctor Consultation Section */}
      <div className="mb-8">
        <h2 className="text-md font-semibold text-gray-800 mb-4">
          Ask a Doctor Online 24|7
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Online doctor consultations take place through online doctor chat,
          call, or video call. This helps you talk to doctors online from the
          comfort of your home by simply choosing a doctor from different
          specialties. Avail personalized solutions for any health problem
          with prompt online doctor consultation with Apollo 24|7.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          <li>Safe and secure platform</li>
          <li>Video and chat options</li>
        </ul>
      </div>

      {/* Benefits Section */}
      <div className="mb-8">
        <h2 className="text-md font-semibold text-gray-800 mb-4">
          Benefits of Choosing Online Doctor Consultations
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          <li>Save time, money, and effort</li>
          <li>No need to travel</li>
          <li>
            Most convenient option to choose from, and helps in early
            diagnosis
          </li>
          <li>Online doctor consultations are confidential and safe</li>
          <li>No risks of infections</li>
        </ul>
      </div>

      {/* Apollo Hospitals Section */}
      <div className="mb-8">
        <h2 className="text-md font-semibold text-gray-800 mb-4">
          Apollo Hospitals
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Apollo 24|7 is a part of Apollo Hospitals. Apollo Hospitals was
          established in 1983 by Dr. Prathap C. Reddy. It incorporates over
          10,000 beds across 70 hospitals, over 4000 pharmacies, 172 primary
          care and diagnostic clinics, and 148 telemedicine facilities spread
          across 13 countries. Apollo Hospitals has touched billions of lives
          by offering exceptional clinical outcomes.
        </p>
        <p className="text-gray-600 leading-relaxed mt-4">
          <strong>Milestones of Apollo Hospitals:</strong>
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          <li>40 Years of legacy and credibility in the healthcare industry</li>
          <li>
            NABH certified multi-channel digital healthcare platform
          </li>
          <li>World’s best medical specialists</li>
          <li>Largest & trusted branded healthcare network</li>
          <li>Advanced healthcare technology</li>
        </ul>
      </div>
    </div>
  </section>
  )
}

export default About