export default function FeaturesSection() {
    return (
      <section className="py-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          <div className="text-center">
            <img src="/feature1.png" alt="Feature 1" className="mx-auto w-40" />
            <h3 className="text-xl font-semibold mt-4">Connect Accounts</h3>
            <p className="text-gray-500 mt-2">
              Connect your brokerage accounts and get access to trading insights.
            </p>
          </div>
  
          <div className="text-center">
            <img src="/feature2.png" alt="Feature 2" className="mx-auto w-40" />
            <h3 className="text-xl font-semibold mt-4">Track Net Worth</h3>
            <p className="text-gray-500 mt-2">
              Track your net worth automatically with real-time updates.
            </p>
          </div>
        </div>
      </section>
    );
  }
  