
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Results = () => {
  const data = [
    {
      name: 'Bounce Rate',
      before: 58,
      after: 23,
      unit: '%',
      description: 'Lower is better'
    },
    {
      name: 'Leads Captured',
      before: 15,
      after: 50,
      unit: '/mo',
      description: 'Monthly average'
    },
    {
      name: 'eComm Sales',
      before: 120000,
      after: 250000,
      unit: '₹',
      description: 'Monthly revenue'
    },
    {
      name: 'Ad ROI',
      before: 1.4,
      after: 3.6,
      unit: 'x',
      description: 'Return on ad spend'
    }
  ];

  return (
    <section id="results" className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-primary-light rounded-full mb-4">
            <span className="text-primary font-medium">📊 Real Results</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Real Results from Businesses Like Yours
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            See the difference Chateleon makes for businesses across industries
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16">
          <div className="p-8">
            <div className="max-w-4xl mx-auto">
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="px-4 py-4 text-left font-semibold text-gray-700">✅ Metric</th>
                      <th className="px-4 py-4 text-left font-semibold text-gray-700">💡 Before Chateleon</th>
                      <th className="px-4 py-4 text-left font-semibold text-gray-700">🚀 After Chateleon</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-4 font-medium">Bounce Rate</td>
                      <td className="px-4 py-4">58% avg</td>
                      <td className="px-4 py-4 text-green-600 font-medium">↓ 23% avg</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-4 font-medium">Leads Captured</td>
                      <td className="px-4 py-4">15/month</td>
                      <td className="px-4 py-4 text-green-600 font-medium">↑ 40–60/month</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-4 font-medium">eComm Sales</td>
                      <td className="px-4 py-4">₹1.2L/mo</td>
                      <td className="px-4 py-4 text-green-600 font-medium">↑ ₹2.1–3L/mo</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-4 font-medium">Ad ROI</td>
                      <td className="px-4 py-4">1.4x</td>
                      <td className="px-4 py-4 text-green-600 font-medium">↑ 3–4.2x</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        
        <div className="h-80 mb-16">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip 
                formatter={(value, name) => {
                  const item = data.find(item => (name === 'before' && item.before === value) || (name === 'after' && item.after === value));
                  return [`${value}${item?.unit || ''}`, name === 'before' ? 'Before Chateleon' : 'After Chateleon'];
                }}
              />
              <Bar dataKey="before" name="Before Chateleon" fill="#94a3b8" />
              <Bar dataKey="after" name="After Chateleon" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
};

export default Results;
