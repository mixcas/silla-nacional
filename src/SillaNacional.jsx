import { useState, useEffect } from 'react';
import useFetch from 'use-http';

import ConfesionesList from './ConfesionesList';
import ConfesionesForm from './ConfesionesForm';

const BASE_URL = 'https://sheetdb.io/api/v1/6t5hqm28vps0c';
const LIMIT = 20;

function SillaNacional() {
  const [limit, setLimit] = useState(LIMIT)
  const [confesiones, setConfesiones] = useState([])
  const { get, response, loading, error, post } = useFetch(`${BASE_URL}`);

  const getConfesiones = async () => {
    await get(`/?sort_by=id&sort_order=desc&limit=${LIMIT}`);
    const data = await response.json();
    if (data) {
      setConfesiones(data);
    }
  }

  const createConfesion = async (confesion) => {
    await post('/', {
      ...confesion,
      id: 'INCREMENT',
      date: Date.now()
    });
    location.reload();
  }

  useEffect(() => {
    getConfesiones();
  }, []);

  return(
    <div>
      <ConfesionesList confesiones={confesiones} />
      <ConfesionesForm handleOnSubmit={createConfesion} />
    </div>

  );
}

export default SillaNacional;
