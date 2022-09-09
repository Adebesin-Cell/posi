import DashboardWrapper from '../dashboard/wrapper/Wrapper';
import Topbar from '../topbar/Topbar';
import styles from './AddCaseStudy.module.scss';
import { useRouter } from 'next/router';
import { PlusIcon, ThrashIcon } from '../../utils/icons/Icons';
import Image from 'next/image';
import caseStudy from '../../assets/images/caseStudy--0.png';
import caseStudyOne from '../../assets/images/caseStudy--main.png';
import caseStudyTwo from '../../assets/images/caseStudy--2.png';
import caseStudyThree from '../../assets/images/caseStudy--3.png';
import Button from '../ui/button/Button';

const AddCaseStudy = function () {
  const router = useRouter();

  const addCaseHandler = function () {
    router.push('case-study/add');
  };

  const gotoCaseStudyHandler = function (id) {
    router.push(`case-study/view/${id}`);
  };

  const deleteItemHandler = function (e, id) {
    e.stopPropagation();
    console.log(id);
  };

  return (
    <div className={styles.view}>
      <DashboardWrapper>
        <Topbar title='Case Studies' />
        <div className={styles.view__wrapper}>
          <div className={styles.view__add} onClick={addCaseHandler}>
            <PlusIcon />
          </div>
          <div
            className={styles.view__card}
            onClick={() => gotoCaseStudyHandler(1)}
          >
            <div className={styles['view__image-box']}>
              <Image
                src={caseStudy}
                alt='Case Study'
                className={styles.view__image}
              />
            </div>
            <div className={styles.view__body}>
              <h1 className={styles.view__title}>Shop Easy</h1>
              <Button
                className={styles.view__button}
                onClick={(e) => deleteItemHandler(e, 1)}
              >
                <ThrashIcon />
              </Button>
            </div>
          </div>
          <div
            className={styles.view__card}
            onClick={() => gotoCaseStudyHandler(2)}
          >
            <div className={styles['view__image-box']}>
              <Image
                src={caseStudyOne}
                alt='Case Study'
                className={styles.view__image}
              />
            </div>
            <div className={styles.view__body}>
              <h1 className={styles.view__title}>Slay and Co</h1>
              <Button
                className={styles.view__button}
                onClick={(e) => deleteItemHandler(e, 2)}
              >
                <ThrashIcon />
              </Button>
            </div>
          </div>
          <div
            className={styles.view__card}
            onClick={() => gotoCaseStudyHandler(3)}
          >
            <div className={styles['view__image-box']}>
              <Image
                src={caseStudyTwo}
                alt='Case Study'
                className={styles.view__image}
              />
            </div>
            <div className={styles.view__body}>
              <h1 className={styles.view__title}>Nezko</h1>
              <Button
                className={styles.view__button}
                onClick={(e) => deleteItemHandler(e, 3)}
              >
                <ThrashIcon />
              </Button>
            </div>
          </div>
          <div
            className={styles.view__card}
            onClick={() => gotoCaseStudyHandler(4)}
          >
            <div className={styles['view__image-box']}>
              <Image
                src={caseStudyThree}
                alt='Case Study'
                className={styles.view__image}
              />
            </div>
            <div className={styles.view__body}>
              <h1 className={styles.view__title}>NFT Cards</h1>
              <Button
                className={styles.view__button}
                onClick={(e) => deleteItemHandler(e, 4)}
              >
                <ThrashIcon />
              </Button>
            </div>
          </div>
        </div>
      </DashboardWrapper>
    </div>
  );
};

export default AddCaseStudy;
