
import React from 'react';

export default function BusSearchResults({ location  }) {
    const searchResults = location?.state?.searchResults || [];
    console.log('Search Results:', searchResults);
  return (

    <div className="mt-3">
      <h3>Search Results</h3>
     
      <div className="container">

      <div className="row">
          {/* Check if searchResults is defined and has items before mapping */}
          {searchResults && searchResults.length > 0 ? (
            <>
              {/* Display operator names */}
              <div className="col-12 col-md-4">
                <div className="row">
                  <div className="col-12">Operator</div>
                  <div className="col-12">
                    <div className="row">
                      {searchResults.map((route) => (
                        <div className="col-12" key={route.id}>
                           {route.operator !== null && route.operator !== undefined ? route.operator : 'N/A'}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {/* Display search results in a table */}
              <div className="col-12 col-md-8">
                <div className="row">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Operator (Bus Type)</th>
                        <th scope="col">Departure Time</th>
                        <th scope="col">Arrival Time</th>
                        <th scope="col">Seat Available</th>
                        <th scope="col">Fare</th>
                      </tr>
                    </thead>
                    {searchResults.length > 0 ? (
                    <tbody>
                      {searchResults.map((route) => (
                        <tr key={route.id}>
                          <th scope="row">
                            {route.bus}
                            <br />
                            <b>Route: </b>
                            {route.from} to {route.to}
                            <br />
                            <b>Starting Point: </b>
                            {route.from} <br />
                            <b>Ending Point:</b> {route.to}
                          </th>
                          <td>{route.departure_time}</td>
                          <td>{route.arrival_time}</td>
                          <td>{route.seat_available}</td>
                          <td>TK {route.cost}</td>
                        </tr>
                      ))}
                    </tbody>
                     ) : (
                        <div>
                        <p>No search results found. Please refine your search criteria.</p>
                        {/* You can add more suggestions or information here */}
                      </div>
                    )}
                  </table>
                </div>
              </div>
            </>
          ) : (
            // Display a message if no search results are found
            <div className="col-12">No search results found.</div>
          )}
        </div>  


      </div>
    </div>
  );
}


