import React from 'react';
import { useParams } from 'react-router-dom';
import DentalHygene from './DentalHygene';
import DentalCare from './DentalCare';
import Technology from './Technology';

const SingleBlog = () => {
  const { url } = useParams();

  // Define different components or elements to render based on URL
  const renderContent = () => {
    switch (url) {
      case 'dental-hygiene-for-all-age-to-make-smile':
        return <DentalHygene />;
      case 'regular-dental-care-make-your-smile-brighter':
        return <DentalCare />;
      case 'new-technology-make-for-dental-operation':
        return <Technology/>;
      default:
        return <NotFound />;
    }
  };

  return (
    <div>
      {renderContent()}
    </div>
  );
};

//Sample Components
// const TechBlog = () => <div>Tech Blog Content</div>;
// const LifestyleBlog = () => <div>Lifestyle Blog Content</div>;
// const TravelBlog = () => <div>Travel Blog Content</div>;
const NotFound = () => <div>404 - Not Found</div>;

export default SingleBlog;
