import React, { useEffect, useState } from "react";


const HomePanel = () => {

  const [returnedData, updateData] = useState(undefined);

  async function fetchData() {
    let response = await fetch('https://front-end-test-bvhzjr6b6a-uc.a.run.app/');
    let data = await response.json();
    return data;
  }

  async function getData() {
    const data = await fetchData();
    updateData(data);
  }

  useEffect(() => {
    getData();
  }, [returnedData]);

  return (
    <div>
      {Array.isArray(returnedData) && returnedData.map((item, idx) => <p key={idx}>{item.price}</p>)}
    </div>
  );
};


export default HomePanel;