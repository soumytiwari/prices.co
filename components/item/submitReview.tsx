import { useState } from "react";

export default function SubmitReview({display}:{display:boolean}) {
  const [rating, setRating] = useState(0);
  const [title, setTitle] = useState('');
  const [color, setColor] = useState('');
  const [size, setSize] = useState('');
  const [review, setReview] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

  const handleStarClick = (star:number ) => {
    setRating(star);
  };

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission (e.g., send the review data to the server)
    console.log({
      title,
      rating,
      color,
      size,
      review,
      date,
    });
  };

  return (
    display?
    <div className="review-container" style={styles.container}>
      {/* Star Rating */}
      <div className="stars" style={styles.stars}>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            onClick={() => handleStarClick(star)}
            style={{
              ...styles.star,
              color: star <= rating ? '#f5c518' : '#ccc',
              cursor: 'pointer',
            }}
          >
            ★
          </span>
        ))}
      </div>

      {/* Review Form */}
      <form onSubmit={handleSubmit} style={{display:'flex', flexDirection:'column'}}>
        {/* Title */}
        <div style={{display:'flex', justifyContent:'space-between', marginBottom:'10px'}}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={styles.input}
        />
        <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            style={styles.dateInput}
          />
        </div>
        
        {/* Color and Size Dropdowns */}
        <div style={styles.dropdownContainer}>
          <select
            value={color}
            onChange={(e) => setColor(e.target.value)}
            style={styles.select}
          >
            <option value="">Color</option>
            <option value="Black">Black</option>
            <option value="White">White</option>
            <option value="Blue">Blue</option>
          </select>

          <select
            value={size}
            onChange={(e) => setSize(e.target.value)}
            style={styles.select}
          >
            <option value="">Size</option>
            <option value="S">Small</option>
            <option value="M">Medium</option>
            <option value="L">Large</option>
            <option value="XL">Extra Large</option>
          </select>

          {/* Date */}
          
        </div>

        {/* Review Textarea */}
        <textarea
          placeholder="Write your review..."
          value={review}
          onChange={(e) => setReview(e.target.value)}
          style={styles.textarea}
        ></textarea>

        {/* Submit Button */}
        <button type="submit" style={styles.button}>
          Submit Review
        </button>
      </form>
    </div>:<></>
  );
};

// Inline styles
const styles = {
  container: {
    maxWidth: '600px',
    margin: 'auto',
    marginTop: '40px',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
  },
  stars: {
    display: 'flex',
    justifyContent: 'flex-start',
    marginBottom: '10px',
  },
  star: {
    fontSize: '24px',
    marginRight: '5px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    width: '60%'
  },
  dropdownContainer: {
    display: 'flex',
    justifyContent: 'start',
    marginBottom: '10px',
  },
  select: {
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    width: '30%',
    marginRight: '20px'
  },
  dateInput: {
    padding:'0px 5px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    width: '30%',
  },
  textarea: {
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    minHeight: '100px',
    marginBottom: '10px',
  },
  button: {
    padding: '10px',
    backgroundColor: 'rgb(14,10,30)',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};
