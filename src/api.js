const getData = async url => {
  const response = await fetch(url, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
  return await response.json();
};

export default getData;
