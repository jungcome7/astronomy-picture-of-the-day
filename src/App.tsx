import React, { useEffect, useState } from 'react';
import * as api from './redux/API';

const App = () => {
  const [data, setData] = useState<any>();
  const period = { startDate: '2021-01-20', endDate: '2021-01-21' };
  useEffect(() => {
    const getData = async () => {
      const { data } = await api.getByPeriod(period);
      setData(data);
    };
    getData();
  }, []);
  console.log(data);

  return <div>dasfasf</div>;
};

export default App;
