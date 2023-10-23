import './keyFeatures.container.css'
import PropTypes from "prop-types";

const KeyFeature = ({ title, description, imageSrc }) => {
  return (
    <div className="custom-card">
      <img src={imageSrc} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

KeyFeature.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
};

const Features = () => {
  return (
    <div className="features-container">
      <h1>Features</h1>
      <p>
        Start working with Tailwind CSS that can provide everything you need <br />
        to generate awareness, drive traffic, connect.
      </p>
      <div className="features-grid">
        <KeyFeature
          imageSrc="https://templatekit.tokomoo.com/paymentkit2/wp-content/uploads/sites/112/2022/11/feature-1.png"
          title="Grow Your Business"
          description="If the distribution of letters and words is random, the reader will not be distracted from making."
        />
        <KeyFeature
          imageSrc="https://templatekit.tokomoo.com/paymentkit2/wp-content/uploads/sites/112/2022/11/feature-icon-v2-05.png"
          title="Grow Your Business"
          description="If the distribution of letters and words is random, the reader will not be distracted from making."
        />
        <KeyFeature
          imageSrc="https://templatekit.tokomoo.com/paymentkit2/wp-content/uploads/sites/112/2022/11/feature-icon-v2-02.png"
          title="Grow Your Business"
          description="If the distribution of letters and words is random, the reader will not be distracted from making."
        />
        <KeyFeature
          imageSrc="https://templatekit.tokomoo.com/paymentkit2/wp-content/uploads/sites/112/2022/11/feature-1.png"
          title="Grow Your Business"
          description="If the distribution of letters and words is random, the reader will not be distracted from making."
        />
        <KeyFeature
          imageSrc="https://templatekit.tokomoo.com/paymentkit2/wp-content/uploads/sites/112/2022/11/feature-icon-v2-05.png"
          title="Grow Your Business"
          description="If the distribution of letters and words is random, the reader will not be distracted from making."
        />
        <KeyFeature
          imageSrc="https://templatekit.tokomoo.com/paymentkit2/wp-content/uploads/sites/112/2022/11/feature-icon-v2-02.png"
          title="Grow Your Business"
          description="If the distribution of letters and words is random, the reader will not be distracted from making."
        />
      </div>
    </div>
  );
};



export  {Features};
