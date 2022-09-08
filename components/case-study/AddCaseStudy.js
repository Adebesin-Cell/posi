import DashboardWrapper from '../dashboard/wrapper/Wrapper';
import Topbar from '../topbar/Topbar';
import styles from './AddCaseStudy.module.scss';
import { useRouter } from 'next/router';
import { PlusIcon } from '../../utils/icons/Icons';

const AddCaseStudy = function () {
  const router = useRouter();

  const addCaseHandler = function () {
    router.push('case-study/add');
  };

  return (
    <div className={styles.view}>
      <DashboardWrapper>
        <Topbar title='Case Studies' />
        <div className={styles.view__wrapper}>
          <div className={styles.view__add} onClick={addCaseHandler}>
            <PlusIcon />
          </div>
        </div>
      </DashboardWrapper>
    </div>
  );
};

export default AddCaseStudy;
