import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Select from 'react-select';

export default function BookingForm() {
  const [destFrom, setDestFrom] = useState('');
  const [destTo, setDestTo] = useState('');
  const [doj, setDoj] = useState('');
  const [dor, setDor] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cityOptions, setCityOptions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:8000/api/view-Route');

        // Extract unique "from" and "to" values from the API response
        const fromOptions = [...new Set(response.data.map(route => route.from))];
        const toOptions = [...new Set(response.data.map(route => route.to))];

        // Combine "from" and "to" options
        const combinedOptions = [...fromOptions, ...toOptions];

        // Create Select options
        const selectOptions = combinedOptions.map(option => ({ value: option, label: option }));

        // Set the options state
        setCityOptions(selectOptions);

        // Filter the results based on "from" and "to" cities
        const filteredResults = response.data.filter(
          route =>
            route.from.toLowerCase().startsWith(destFrom.toLowerCase()) &&
            route.to.toLowerCase().startsWith(destTo.toLowerCase())
        );

        // Update search results with the filtered data
        setSearchResults(filteredResults);
      } catch (error) {
        console.error('Error searching routes:', error);
      } finally {
        setLoading(false);
      }
    };

    // Use a timer to debounce the API calls for better performance
    const delayTimer = setTimeout(() => {
      fetchData();
    }, 300); // Debounce time (adjust as needed)

    // Cleanup function to clear the timer on component unmount or input change
    return () => clearTimeout(delayTimer);
  }, [destFrom, destTo, doj, dor]);
  // Function to handle the search button click
  const handleSearch = () => {
    // Navigate to the search results page with the updated search results
    navigate('/search_results', {
      state: { searchResults },

    });
  };
  return (
    <div>
      <div className="form-group flex-fill bd-highlight ms-5 text-start fw-bold" style={{ marginTop: '10px' }}>
        <div className="h1">Bus Booking Form</div>
        <label htmlFor="dest_from">To reserve seats, please complete and submit the booking form.</label>
        <hr />
        <br />

        <label htmlFor="dest_from">From</label>
        <Select
          value={cityOptions.find(option => option.value === destFrom)}
          onChange={selectedOption => setDestFrom(selectedOption.value)}
          options={cityOptions}
        />

        <label htmlFor="dest_to">To</label>
        <Select
          value={cityOptions.find(option => option.value === destTo)}
          onChange={selectedOption => setDestTo(selectedOption.value)}
          options={cityOptions}
        />

        <div className="form-group">
          <label htmlFor="doj">Date of Journey</label><br />
          <input
            value={doj}
            onChange={e => setDoj(e.target.value)}
            type="date"
            className="form-control"
            id="doj"
            name="doj"
            data-date-format="dd/mm/yyyy"
            required
          />

          <label htmlFor="dor">Date of Return<span> (Optional)</span></label>
          <input
            value={dor}
            onChange={e => setDor(e.target.value)}
            type="date"
            className="form-control"
            id="dor"
            name="dor"
            data-date-format="dd/mm/yyyy"
          />
        </div>

        <button
          type="button"
          className="mt-3 btn btn-success"
          onClick={handleSearch}
          disabled={loading}
        >
          {loading ? 'Searching...' : 'Search Buses'}
        </button>
      </div>
    </div>
  );
}
