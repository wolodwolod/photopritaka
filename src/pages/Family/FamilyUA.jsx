import FamilyImgGallery from 'components/ImageGalleries/FamilyGallery';
import ButtonUp from 'components/ButtonUp';
import '../pages.scss';

const FamilyUA = () => {
  return (
    <main>
      <section className="page_title">
        <div className="container">
          <p className="page_about">Портфоліо | Сімейне фото</p>
        </div>
      </section>
      <div className="container">
        <FamilyImgGallery />
      </div>
      <ButtonUp lang="ukr" />
    </main>
  );
};

export default FamilyUA;
