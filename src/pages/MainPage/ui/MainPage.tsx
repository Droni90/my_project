import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

const MainPage = () => {
  const { t } = useTranslation('mainPage');
  return (
    <Page>
      {/* <RatingCard */}
      {/*   title="КАК ВАС СТАТЬЯ" */}
      {/*   feedBackTitle="Оставьте отзыв о статье" */}
      {/*   hasFeedback */}
      {/* /> */}
    </Page>
  );
};

export default MainPage;
