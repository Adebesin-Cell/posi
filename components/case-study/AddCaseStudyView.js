/* eslint-disable @next/next/no-img-element */
import DashboardWrapper from '../dashboard/wrapper/Wrapper';
import Tiptap from '../text-editor/Editor';
import styles from './AddCaseStudyView.module.scss';
import Input from '../ui/input/Input';
import { PlusIcon } from '../../utils/icons/Icons';
import useFileUpload from '../../hooks/use-file-upload';
import { useState } from 'react';
import Button from '../ui/button/Button';

const AddCaseStudyView = function () {
  const [colors, setColors] = useState([]);

  const {
    uploadFuntionHandler: uploadCoverImage,
    images: CoverImages,
    imageUrls: CoverImageURLS,
  } = useFileUpload();

  const {
    uploadFuntionHandler: uploadEmpathyImage,
    images: EmpathyImages,
    imageUrls: EmpathyImageURLS,
  } = useFileUpload();

  const {
    uploadFuntionHandler: uploadUserPersonas,
    images: UserPersonas,
    imageUrls: UserPersonasURLS,
  } = useFileUpload();

  const {
    uploadFuntionHandler: uploadUserflow,
    images: userflows,
    imageUrls: userflowURLS,
  } = useFileUpload();

  const {
    uploadFuntionHandler: uploadIdeationImage,
    images: ideationImages,
    imageUrls: ideationImagesURL,
  } = useFileUpload();

  const getEditorContent = function (html) {
    console.log(html);
  };

  const generateNewColorHandler = function () {
    setColors((prevColors) => [
      ...prevColors,
      { id: Date.now().toString(), colorCode: '#ffffff' },
    ]);
  };

  const changeColorHandler = function (e, id) {
    setColors((prevColors) => {
      const currentColorBox = prevColors.find((color) => color.id === id);
      currentColorBox.colorCode = e.target.innerHTML;
      return [...prevColors];
    });
  };

  const deleteColor = function (id) {
    setColors((prevColors) => {
      const updatedColors = prevColors.filter((color) => color.id !== id);
      return [...updatedColors];
    });
  };

  const addFontsHandler = function () {};

  const formSubmitHandler = function (e) {
    e.preventDefault();
    alert('Adding case studies coming soon!');
  };

  const CONVERT_IMAGE_SIZE_MB = 1000000;

  return (
    <div className={styles.view}>
      <DashboardWrapper>
        <div className={styles.view__header}>
          <h1 className={styles.view__heading}>New Case Study</h1>
        </div>
        <form
          action=''
          onSubmit={formSubmitHandler}
          className={styles.view__form}
        >
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
                onChange={uploadCoverImage}
                accept='image/*'
              />
              <div className={styles.upload}>
                <label htmlFor='case-study-cover-image'>
                  <div className={styles.upload__card}>
                    {!CoverImages[0] && (
                      <div className={styles.upload__icon}>
                        <PlusIcon />
                      </div>
                    )}
                    {CoverImages[0] && (
                      <img
                        src={CoverImageURLS[0]}
                        alt={CoverImages[0].name}
                        className={styles.upload__image}
                      />
                    )}
                    <div className={styles.upload__details}>
                      <h1 className={styles.upload__name}>
                        {CoverImages[0] && CoverImages[0].name}
                        {!CoverImages[0] && 'Case Study Image'}
                      </h1>
                      <p className={styles.upload__size}>
                        {CoverImages[0] &&
                          `${(
                            CoverImages[0].size / CONVERT_IMAGE_SIZE_MB
                          ).toFixed(2)}mb`}

                        {!CoverImages[0] && 'Size'}
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
            <label htmlFor='case-study-about' className={styles.view__title}>
              About Project
            </label>
            <Tiptap getEditorContent={getEditorContent} />
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
          <div className={styles.view__group}>
            <div className={styles.view__wrapper}>
              <label htmlFor='case-study-tools' className={styles.view__label}>
                Tools
              </label>
              <Input
                className={styles.view__input}
                placeholder='Enter Tools'
                type='text'
                name='case-study-tools'
                id='case-study-tools'
              />
            </div>
          </div>
          <div className={styles.view__group}>
            <div className={styles.view__wrapper}>
              <label htmlFor='case-study-type' className={styles.view__label}>
                Roles
              </label>
              <Input
                className={styles.view__input}
                placeholder='Enter Roles'
                type='text'
                name='case-study-roles'
                id='case-study-roles'
              />
            </div>
          </div>
          <div className={styles.view__group}>
            <div className={styles.view__card}>
              <Input
                type='file'
                name='case-study-empathy-image'
                className={styles.view__file}
                id='case-study-empathy-image'
                onChange={uploadEmpathyImage}
                accept='image/*'
              />
              <div className={styles.upload}>
                <label htmlFor='case-study-empathy-image'>
                  <div className={styles.upload__card}>
                    {!EmpathyImages[0] && (
                      <div className={styles.upload__icon}>
                        <PlusIcon />
                      </div>
                    )}
                    {EmpathyImages[0] && (
                      <img
                        src={EmpathyImageURLS[0]}
                        alt={EmpathyImages[0].name}
                        className={styles.upload__image}
                      />
                    )}
                    <div className={styles.upload__details}>
                      <h1 className={styles.upload__name}>
                        {EmpathyImages[0] && EmpathyImages[0].name}
                        {!EmpathyImages[0] && 'Add Image'}
                      </h1>
                      <p className={styles.upload__size}>
                        {EmpathyImages[0] &&
                          `${(
                            EmpathyImages[0].size / CONVERT_IMAGE_SIZE_MB
                          ).toFixed(2)}mb`}

                        {!EmpathyImages[0] && 'Size'}
                      </p>
                    </div>
                  </div>
                </label>
              </div>
            </div>
          </div>
          <div className={styles.view__group}>
            <label htmlFor='case-study-empathy' className={styles.view__title}>
              Emphaty
            </label>
            <Tiptap getEditorContent={getEditorContent} />
          </div>
          <div className={styles.view__group}>
            <label
              htmlFor='case-study-user-persona'
              className={styles.view__title}
            >
              User Persona
            </label>
            <Input
              type='file'
              name='case-study-image'
              className={styles.view__file}
              id='case-study-user-persona'
              onChange={uploadUserPersonas}
              accept='image/*'
              multiple
            />
            <label
              htmlFor='case-study-user-persona'
              className={styles.userpersona__label}
            >
              <div className={styles.view__button}>
                <div className={styles.upload__icon}>
                  <PlusIcon />
                </div>
                <p className={styles.view__text}>Add User Persona</p>
              </div>
            </label>
            {UserPersonas.length > 0 && (
              <div
                className={`${styles.upload} ${styles.userpersona__uploads}`}
              >
                {UserPersonas.map((UserPersona, i) => {
                  return (
                    <div
                      key={UserPersona.lastmodified}
                      className={styles.upload__card}
                    >
                      <img
                        key={UserPersonasURLS[i]}
                        src={UserPersonasURLS[i]}
                        alt={UserPersona.name}
                        className={styles.upload__image}
                      />
                      <div className={styles.upload__details}>
                        <h1 className={styles.upload__name}>
                          {UserPersona.name}
                        </h1>
                        <p className={styles.upload__size}>
                          {(UserPersona.size / CONVERT_IMAGE_SIZE_MB).toFixed(
                            2
                          )}
                          mb
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          <div className={styles.view__group}>
            <label htmlFor='case-study-ideation' className={styles.view__title}>
              Ideation
            </label>
            <Tiptap getEditorContent={getEditorContent} />
          </div>
          <div className={styles.view__group}>
            <div className={styles.view__card}>
              <Input
                type='file'
                name='case-study-ideation-image'
                className={styles.view__file}
                id='case-study-cover-ideation-image'
                onChange={uploadIdeationImage}
                accept='image/*'
              />
              <div className={styles.upload}>
                <label htmlFor='case-study-ideation-image'>
                  <div className={styles.upload__card}>
                    {!ideationImages[0] && (
                      <div className={styles.upload__icon}>
                        <PlusIcon />
                      </div>
                    )}
                    {ideationImages[0] && (
                      <img
                        src={ideationImagesURL[0]}
                        alt={ideationImages[0].name}
                        className={styles.upload__image}
                      />
                    )}
                    <div className={styles.upload__details}>
                      <h1 className={styles.upload__name}>
                        {ideationImages[0] && ideationImages[0].name}
                        {!ideationImages[0] && 'Add Image'}
                      </h1>
                      <p className={styles.upload__size}>
                        {ideationImages[0] &&
                          `${(
                            ideationImages[0].size / CONVERT_IMAGE_SIZE_MB
                          ).toFixed(2)}mb`}

                        {!ideationImages[0] && 'Size'}
                      </p>
                    </div>
                  </div>
                </label>
              </div>
            </div>
          </div>
          <div className={styles.view__group}>
            <label htmlFor='case-study-userflow' className={styles.view__title}>
              Userflow
            </label>
            <div className={styles.view__card}>
              <Input
                type='file'
                name='case-study-userflow'
                className={styles.view__file}
                id='case-study-userflow'
                onChange={uploadUserflow}
                accept='image/*'
              />
              <div className={styles.upload}>
                <label htmlFor='case-study-userflow'>
                  <div className={styles.upload__card}>
                    {!userflows[0] && (
                      <div className={styles.upload__icon}>
                        <PlusIcon />
                      </div>
                    )}
                    {userflows[0] && (
                      <img
                        src={userflowURLS[0]}
                        alt={userflows[0].name}
                        className={styles.upload__image}
                      />
                    )}
                    <div className={styles.upload__details}>
                      <h1 className={styles.upload__name}>
                        {userflows[0] && userflows[0].name}
                        {!userflows[0] && 'Case Study Image'}
                      </h1>
                      <p className={styles.upload__size}>
                        {userflows[0] &&
                          `${(
                            userflows[0].size / CONVERT_IMAGE_SIZE_MB
                          ).toFixed(2)}mb`}
                        {!userflows[0] && 'Size'}
                      </p>
                    </div>
                  </div>
                </label>
              </div>
            </div>
          </div>
          <div className={styles.view__group}>
            <label htmlFor='case-study-colors' className={styles.view__title}>
              Colours
            </label>
            <div className={styles.colors}>
              {colors.map((color) => (
                <div key={color.id} className={styles.colors__list}>
                  <div
                    className={styles.colors__box}
                    style={{ background: color.colorCode }}
                    contentEditable
                    onBlur={(e) => changeColorHandler(e, color.id)}
                    onDoubleClick={() => deleteColor(color.id)}
                    title='Double click to delete'
                  ></div>
                  <p className={styles.colors__text}>{color.colorCode}</p>
                </div>
              ))}
              <div className={styles.colors__add}>
                <div
                  className={styles.colors__plus}
                  onClick={generateNewColorHandler}
                >
                  <PlusIcon />
                </div>
                <p className={styles.colors__text}>Add color</p>
              </div>
            </div>
          </div>
          <div className={styles.view__group}>
            <div className={styles.typography}>
              <label htmlFor='' className={styles.view__title}>
                Typography
              </label>
              <Button
                type='button'
                onClick={addFontsHandler}
                className={styles.typography__button}
              >
                <span>
                  <PlusIcon />
                </span>
                <span>Add Font</span>
              </Button>
              <ul className={styles.typography__list}>
                <li className={styles.typography__item}>Poppins</li>
                <li className={styles.typography__item}>Montserrat</li>
                <li className={styles.typography__item}>PT Sans</li>
                <li className={styles.typography__item}>Poppins</li>
                <li className={styles.typography__item}>Montserrat</li>
                <li className={styles.typography__item}>PT Sans</li>
              </ul>
            </div>
          </div>
          <div className={styles.view__group}>
            <Button type='submit' className={styles.view__submit}>
              Save
            </Button>
          </div>
        </form>
      </DashboardWrapper>
    </div>
  );
};

export default AddCaseStudyView;
