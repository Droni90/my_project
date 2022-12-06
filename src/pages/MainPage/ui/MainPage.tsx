import { useTranslation } from 'react-i18next';
import { ListBox } from 'shared/ui/Popups/ui/ListBox/ListBox';
import { Page } from 'widgets/Page/Page';

const MainPage = () => {
  const { t } = useTranslation('mainPage');
  return (
    <Page>
      <ListBox
        defaultValue="Выберите значение"
        onChange={(value: string) => {}}
        value={undefined}
        items={[
          { value: '1', content: '123' },
          { value: '2', content: '124' },
        ]}
      />
    </Page>
  );
};

export default MainPage;
