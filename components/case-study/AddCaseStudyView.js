import DashboardWrapper from '../dashboard/wrapper/Wrapper';
import Tiptap from '../text-editor/Editor';
import styles from './AddCaseStudyView.module.scss';
import Input from '../ui/input/Input';

const AddCaseStudyView = function () {
  return (
    <div className={styles.view}>
      <DashboardWrapper>
        <div className={styles.view__header}>
          <h1 className={styles.view__heading}>New Case Study</h1>
        </div>
        <form action='' className={styles.view__form}>
          <div className={styles.view__group}>
            <div className={styles.view__wrapper}>
              <label htmlFor='case-study-title' className={styles.view__label}>
                Title
              </label>
              <Input
                className={styles.view__input}
                placeholder='Enter Title'
                type='text'
                name='case-study-title'
                id='case-study-title'
              />
            </div>
          </div>
          <div className={styles.view__group}>
            <div className={styles.view__wrapper}>
              <label htmlFor='case-study-type' className={styles.view__label}>
                Project Type
              </label>
              <Input
                className={styles.view__input}
                placeholder='Enter Project Type'
                type='text'
                name='case-study-type'
                id='case-study-type'
              />
            </div>
          </div>
          <div className={styles.view__group}>
            <div className={styles.view__wrapper}>
              <label
                htmlFor='case-study-duration'
                className={styles.view__label}
              >
                Duration
              </label>
              <Input
                className={styles.view__input}
                placeholder='Enter Project Duration'
                type='text'
                name='case-study-duration'
                id='case-study-duration'
              />
            </div>
          </div>
        </form>
        {/* <Tiptap /> */}
      </DashboardWrapper>
    </div>
  );
};

export default AddCaseStudyView;
