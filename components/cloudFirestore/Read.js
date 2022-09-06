import { async } from '@firebase/util';
import { collection, getDocs, onSnapshot } from 'firebase/firestore';
import { useState, useEffect, useCallback } from 'react';
import { db } from '../../firebase/firebase';

const ReadCloudFirestore = function () {
  const [data, setData] = useState([]);

  const getData = useCallback(async function () {
    const querySnapShot = await getDocs(collection(db, 'lol'));
    let datas = [];

    querySnapShot.forEach((doc) => {
      datas.push(doc.data());
    });

    setData([...datas]);
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <>
      <button onClick={getData}>get data</button>
      {data.map((info, i) => {
        return (
          <li key={i} className=''>
            {info.last}
          </li>
        );
      })}
    </>
  );
};

export default ReadCloudFirestore;
