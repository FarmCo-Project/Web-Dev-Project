import React from "react";

const About = () => (
  <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
    <div className="container mx-auto px-6 py-16">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-green-800 mb-6">About FarmCo App</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Connecting local farmers with customers for a sustainable future
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-2xl shadow-xl p-12 mb-12">
          <h2 className="text-3xl font-bold text-green-700 mb-6">Our Mission</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            At FarmCo App, we believe in the power of local agriculture to strengthen communities and provide fresh, 
            nutritious food. Our mission is to create a direct bridge between farmers and consumers, eliminating 
            unnecessary intermediaries and ensuring fair prices for both parties.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            We're committed to supporting sustainable farming practices and helping local farmers thrive in an 
            increasingly competitive market while providing customers with access to the freshest, highest-quality 
            produce available.
          </p>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🌱</span>
            </div>
            <h3 className="text-xl font-bold text-green-700 mb-3">Sustainability</h3>
            <p className="text-gray-600">
              Promoting environmentally conscious farming practices and reducing food waste through direct connections.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🤝</span>
            </div>
            <h3 className="text-xl font-bold text-green-700 mb-3">Community</h3>
            <p className="text-gray-600">
              Building stronger local communities by supporting small-scale farmers and fostering direct relationships.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">💚</span>
            </div>
            <h3 className="text-xl font-bold text-green-700 mb-3">Quality</h3>
            <p className="text-gray-600">
              Ensuring the highest standards of freshness and quality through our trusted network of local farmers.
            </p>
          </div>
        </div>

        {/* Story Section */}
        <div className="bg-white rounded-2xl shadow-xl p-12 mb-12">
          <h2 className="text-3xl font-bold text-green-700 mb-6">Our Story</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            FarmCo App was born from a simple observation: local farmers were struggling to reach customers, 
            while consumers were looking for fresh, local produce but couldn't easily find it. We saw an opportunity 
            to use technology to solve this age-old problem.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            What started as a small project to connect a few local farmers with their community has grown into 
            a comprehensive platform that serves hundreds of farmers and thousands of customers across multiple regions.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Today, we're proud to be part of the movement towards more sustainable, community-focused food systems, 
            and we're excited to continue growing and serving more communities in the future.
          </p>
        </div>

        {/* Team Section */}
        <div className="bg-white rounded-2xl shadow-xl p-12">
          <h2 className="text-3xl font-bold text-green-700 mb-6">Our Team</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            We're a diverse team of farmers, technologists, and food enthusiasts who are passionate about 
            creating positive change in our food system. Our combined experience in agriculture, technology, 
            and community development drives everything we do.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">👨‍🌾</span>
              </div>
              <h3 className="text-xl font-bold text-green-700 mb-2">Agricultural Experts</h3>
              <p className="text-gray-600">
                Experienced farmers and agricultural professionals who understand the challenges and opportunities in local farming.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💻</span>
              </div>
              <h3 className="text-xl font-bold text-green-700 mb-2">Technology Innovators</h3>
              <p className="text-gray-600">
                Skilled developers and designers creating intuitive, reliable technology solutions for the agricultural community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;

/*
=== ABOUT.JS - THE ABOUT US PAGE ===

This is the "about us" page that tells the story of our FarmCo App!
It's where users can learn more about who we are, what we do, and why we do it.

WHAT IT DOES:
- Introduces users to our company and mission
- Explains our values and what drives us
- Tells our story and how we got started
- Introduces our team and their expertise
- Builds trust and credibility with users

THE SECTIONS:
1. HEADER: Big title and tagline
2. MISSION: What we're trying to achieve
3. VALUES: Our core principles (Sustainability, Community, Quality)
4. STORY: How we got started and grew
5. TEAM: Who we are and our expertise

THE DESIGN:
- Clean, professional layout
- Consistent with the rest of the app
- Easy to read and navigate
- Builds trust through transparency

This page is important for building user confidence and explaining our value proposition!
*/ 