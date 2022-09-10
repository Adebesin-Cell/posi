/* eslint-disable @next/next/no-img-element */
import DashboardWrapper from '../dashboard/wrapper/Wrapper';
import Tiptap from '../text-editor/Editor';
import styles from './AddCaseStudyView.module.scss';
import Input from '../ui/input/Input';
import { PlusIcon } from '../../utils/icons/Icons';
import { useEffect, useState } from 'react';

const AddCaseStudyView = function () {
  const [caseStudyCoverImage, setcaseStudyCoverImage] = useState();
  const [imageUrl, setImageUrl] = useState();

  const caseStudyCoverImageUpload = function (e) {
    setcaseStudyCoverImage((prevImage) => {
      return e.target.files[0];
    });
  };

  const getEditorContent = function (html) {
    console.log(html);
  };

  useEffect(() => {
    if (!caseStudyCoverImage) return;
    const CaseStudyImageURL = URL.createObjectURL(caseStudyCoverImage);
    setImageUrl(CaseStudyImageURL);
    console.log(CaseStudyImageURL);
  }, [caseStudyCoverImage]);

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
            <label
              htmlFor='case-study-cover-image'
              className={styles.view__title}
            >
              Cover Image
            </label>
            <div className={styles.view__card}>
              <Input
                type='file'
                name='case-study-image'
                className={styles.view__file}
                id='case-study-cover-image'
                onChange={caseStudyCoverImageUpload}
                accept='image/*'
              />
              <div className={styles.upload}>
                <label htmlFor='case-study-cover-image'>
                  <div className={styles.upload__card}>
                    {!caseStudyCoverImage && (
                      <div className={styles.upload__icon}>
                        <PlusIcon />
                      </div>
                    )}
                    {caseStudyCoverImage && (
                      <img
                        src={imageUrl}
                        alt={caseStudyCoverImage.name}
                        className={styles.upload__image}
                      />
                    )}
                    <div className={styles.upload__details}>
                      <h1 className={styles.upload__name}>
                        {caseStudyCoverImage && caseStudyCoverImage.name}
                        {!caseStudyCoverImage && 'Case Study Image'}
                      </h1>
                      <p className={styles.upload__size}>
                        {caseStudyCoverImage &&
                          `${(caseStudyCoverImage.size / 1000000).toFixed(
                            2
                          )}mb`}

                        {!caseStudyCoverImage && 'Size'}
                      </p>
                    </div>
                  </div>
                </label>
              </div>
            </div>
          </div>
          <div className={styles.view__group}>
            <label htmlFor='case-study-summary' className={styles.view__title}>
              Project Summary
            </label>
            <textarea
              name='case-study-summary'
              id='case-study-summary'
              cols='30'
              rows='10'
              className={styles.view__textarea}
            ></textarea>
          </div>
          <div className={styles.view__group}>
            <label htmlFor='case-study-about' className={styles.view__title}>
              About Project
            </label>
            <Tiptap getEditorContent={getEditorContent} />
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

// export const getServerSideProps = async function () {
//   return {
//     props: {
//       caseStudyCoverImage: {},
//       addCaseStudyCoverImage: function (e) {
//         this.caseStudyCoverImage = e.target.files[0];
//       },
//     },
//   };
// };

export default AddCaseStudyView;
