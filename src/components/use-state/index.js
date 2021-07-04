import React, { useEffect, useState } from 'react';

function StateDemo() {
  const [data, dataSet] = useState({
    first: {},
    second: {}
  })

  const fetchData = (count = 10, cb) => {
    fetch(`https://api.randomuser.me/?results=${count}`)
      .then(response => response.json())
      .then(parsedResponse =>
        parsedResponse.results.map(user => ({
          email: user.email,
        }))
      )
      .then(contacts => cb(contacts))
      .catch(() => { })
  }

  useEffect(() => {
    fetchData(5, (contacts) => dataSet({ ...data, first: contacts }))
    fetchData(11, (contacts) => dataSet({ ...data, second: contacts }))
  }, []);

  console.log(data)

  const results = (
    <div className="App">
      first: {JSON.stringify(data.first)}
      <div>--- </div>
      second: {JSON.stringify(data.second)}
    </div>
  );

  return results;
}

export default StateDemo
