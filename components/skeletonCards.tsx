import ContentLoader from 'react-content-loader';
import style from '@/styles/skeletonCards.module.css';

export default function SkeletonCard({count}:{count:number}) {
    return (
        <>
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} style={cardStyle}>
          <ContentLoader
            // className={style.cardStyle}
            speed={2}
            width={280}
            height={425}
            viewBox="0 0 280 425"
            backgroundColor="#e0e0e0"
            foregroundColor="#f5f5f5"
          >
            {/* Image area */}
            <rect x="0" y="0" rx="10" ry="10" width="280" height="300" />
            {/* Price */}
            <rect x="15" y="315" rx="4" ry="4" width="60" height="30" />
            {/* Title */}
            <rect x="15" y="355" rx="4" ry="4" width="200" height="15" />
            {/* Ratings */}
            <rect x="15" y="380" rx="4" ry="4" width="100" height="15" />
            <rect x="130" y="380" rx="10" ry="10" width="40" height="15" />
          </ContentLoader>
        </div>
      ))}
    </>
    );
};


// Styles for card
const cardStyle = {
//   width: '300px',
//   padding: '20px',
  borderRadius: '5px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
  marginBottom: '20px',
  margin: '20px'
};
