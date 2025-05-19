import React from 'react';

const Holticura = () => {
  return (
    <div className="px-4 py-10 max-w-4xl mx-auto text-gray-800 dark:text-white">
      <h1 className="text-4xl font-bold mb-4">🌱 My First Developer Experience</h1>
      <p className="mb-6 text-lg">
        <strong>Building HOLTICURA: A Smart Monitoring Tool for Ginger Farmers</strong>
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">📍 The Beginning</h2>
        <p>
          In 2021, I experienced a turning point in my journey as a developer—one that began quite unexpectedly.
          Initially, I wasn’t part of the original team for the PKM-PI (Program Kreativitas Mahasiswa – Penerapan IPTEK).
          During one of the early mentoring sessions, our academic supervisor noticed a team member who was no longer actively contributing.
          Out of nowhere, I was asked to step in and take their place—specifically, to take on the role of developer.
        </p>
        <p className="mt-2">
          I was surprised. I wasn’t sure why I was chosen. But perhaps it had something to do with the 98 I scored in my final exam
          for Embedded Systems—a course I had worked really hard on. Whatever the reason, I accepted the challenge, not knowing
          that it would become one of the most formative experiences in my academic life.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">🚜 The Real-World Problem</h2>
        <p>
          Our project focused on helping ginger farmers in Butarbutar Farm, a rural area in North Sumatra. They were facing a sharp
          decline in crop yields, struggling with inconsistent crop care, poor soil quality, and the overwhelming task of managing
          a 3-hectare farm with limited labor.
        </p>
        <p className="mt-2">
          The team had already conceptualized HOLTICURA, a smart farming tool designed to monitor plant growth using affordable technology.
          When I joined, I jumped straight into turning that concept into reality.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">🧑‍💻 My Role</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Designing system components using SolidWorks and Blender</li>
          <li>Programming an Arduino Uno with moisture and pH sensors</li>
          <li>Integrating a water pump system for automatic irrigation</li>
          <li>Creating a mobile interface for real-time monitoring (using Blynk)</li>
          <li>Collaborating remotely via Zoom and WhatsApp</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">🛠️ Key Features of HOLTICURA</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Remote Monitoring: Track soil pH, moisture levels, and irrigation through a smartphone</li>
          <li>Hydrogel Integration: Improve water retention and reduce the need for manual watering</li>
          <li>Low-Cost Build: Designed for affordability, targeting small-scale farmers</li>
          <li>Data-Driven Decision-Making: Farmers could act based on real-time sensor data</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">📈 Results & Achievements</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>A fully working HOLTICURA prototype</li>
          <li>A complete user manual for farmers</li>
          <li>A scientific article (80% complete)</li>
          <li>A progress report (100%) and final report (40%)</li>
          <li>Effective budget management of IDR 9 million, with a surplus for outreach and publishing</li>
          <li>Plans for patent registration and publication</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">💡 What I Learned</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Work under pressure and unfamiliar circumstances</li>
          <li>Communicate technical concepts to non-technical users</li>
          <li>Take initiative in a project I didn’t originally plan to be part of</li>
          <li>Collaborate in a real team, with real expectations and impact</li>
        </ul>
        <p className="mt-2">
          HOLTICURA wasn’t just a project—it was proof that I could step up when called upon, learn fast,
          and make something that truly mattered.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">🧪 Tools & Tech Stack</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Arduino Uno</li>
          <li>Soil Moisture Sensor & pH Meter</li>
          <li>Blynk App</li>
          <li>SolidWorks & Blender</li>
          <li>Zoom, WhatsApp, Google Meet</li>
        </ul>
      </section>

      <div className="text-center">
        <a href="/" className="text-blue-500 hover:underline">← Back to Home</a>
      </div>
    </div>
  );
};

export default Holticura;
