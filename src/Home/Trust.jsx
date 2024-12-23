const trustData = [
  {
    title: "Customer-first always",
    description:
      "That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.",
  },
  {
    title: "No spam or gimmicks",
    description:
      "No gimmicks, spam, gamification, or annoying push notifications. High quality apps that you use at your pace, the way you like.",
  },
  {
    title: "The Zerodha universe",
    description:
      "Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.",
  },
  {
    title: "Do better with money",
    description:
      "With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.",
  },
];

const Trust = () => {
  return (
    <div className="container my-5">
      <div className="row">
        {/* Left Column */}
        <div className="col-12 col-md-6 text-start">
          <h2 className="fw-normal mb-4">Trust with confidence</h2>
          {trustData.map((item, index) => (
            <div key={index} className="mb-4">
              <h5>{item.title}</h5>
              <p
                className="text-muted w-75"
                style={{
                  lineHeight: "35px",
                  textAlign: "justify",
                }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center">
          <img
            src="https://zerodha.com/static/images/ecosystem.png"
            alt="Zerodha ecosystem illustration"
            className="img-fluid"
          />
          <div className="d-flex justify-content-between gap-3 mt-2">
            <a href="#" className="text-decoration-none">
              Explore Our Products
            </a>
            <a href="#" className="text-decoration-none">
              Try Kids De mo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trust;
