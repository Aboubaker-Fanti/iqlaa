import { useEffect, useState } from "react";
import { getIqlaaData, updateIqlaaData } from "./api/filestore"; // ✅ Correct file name

export default function Filename() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getIqlaaData();
      setData(result);
      setLoading(false);
    };
    fetchData();
  }, []);

  const handleUpdate = async () => {
    const newVisites = (data?.visites || 0) + 1; // Example: Increment visit count
    const newStartPool = (data?.start_pool || 0) + 5;
    // await updateIqlaaData(newVisites, newStartPool);
    await updateIqlaaData({ visites: newVisites, start_pool: newStartPool });

    setData({ ...data, visites: newVisites, start_pool: newStartPool }); // Update state
  };

  return (
    <div>
      <h1>Iqlaa Data</h1>
      {loading ? (
        <p>Loading...</p>
      ) : data ? (
        <>
          <p>Visites: {data.visites}</p>
          <p>Start Pool: {data.start_pool}</p>
        </>
      ) : (
        <p>No data found</p>
      )}
      <button onClick={handleUpdate}>Update Data</button>
    </div>
  );
}
