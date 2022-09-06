import { async } from '@firebase/util';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase/firebase';

const WriteToCloudFirestore = function () {
  const sendData = async function () {
    try {
      const docRef = await addDoc(collection(db, 'lol'), {
        first: 'Alan',
        middle: 'Mathison',
        last: 'Turing',
        born: 1912,
      });

      console.log(`document written in: ${docRef.id}`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <button onClick={sendData}>Send Data</button>
    </>
  );
};

export default WriteToCloudFirestore;
