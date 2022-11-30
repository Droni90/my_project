import { componentRender } from 'shared/lib/tests/componentRender/ComponentRender';
import { Profile } from 'entities/Profile';
import { CurrencyEnum } from 'entities/Currency';
import { CountryEnum } from 'entities/Country';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import { $api } from 'shared/api/api';
import { EditableProfileCard } from './EditableProfileCard';
import { profileReducer } from '../../model/slice/profileSlice';

const profile: Profile = {
  id: '1',
  first: 'admin',
  lastname: 'admin',
  age: 29,
  currency: CurrencyEnum.RUB,
  country: CountryEnum.RUSSIA,
  city: 'Moscow',
  username: 'admin123',
};

const options = {
  initialState: {
    profile: { data: profile, readonly: true, form: profile },
    user: { authData: { id: '1', username: 'admin' } },
  },
  asyncReducers: { profile: profileReducer },
};

describe('features/EditableProfileCard', () => {
  test('readonly must be false', async () => {
    componentRender(<EditableProfileCard id="1" />, options);
    await userEvent.click(
      screen.getByTestId('EditableProfileCardHeader.EditButton')
    );
    expect(
      screen.getByTestId('EditableProfileCardHeader.CancelButton')
    ).toBeInTheDocument();
  });

  test('by cancel must return default values', async () => {
    componentRender(<EditableProfileCard id="1" />, options);
    await userEvent.click(
      screen.getByTestId('EditableProfileCardHeader.EditButton')
    );

    await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));
    await userEvent.clear(screen.getByTestId('ProfileCard.lastname'));

    await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'user');
    await userEvent.type(screen.getByTestId('ProfileCard.lastname'), 'user');

    expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('user');
    expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('user');

    await userEvent.click(
      screen.getByTestId('EditableProfileCardHeader.CancelButton')
    );

    expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('admin');
    expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('admin');
  });

  test('validate, mast be error', async () => {
    componentRender(<EditableProfileCard id="1" />, options);
    await userEvent.click(
      screen.getByTestId('EditableProfileCardHeader.EditButton')
    );

    await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));
    await userEvent.click(
      screen.getByTestId('EditableProfileCardHeader.SaveButton')
    );

    expect(
      screen.getByTestId('EditableProfileCard.Error.Paragraph')
    ).toBeInTheDocument();
  });

  test('Success pending', async () => {
    const mockPutReq = jest.spyOn($api, 'put');
    componentRender(<EditableProfileCard id="1" />, options);
    await userEvent.click(
      screen.getByTestId('EditableProfileCardHeader.EditButton')
    );
    await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'user');
    await userEvent.click(
      screen.getByTestId('EditableProfileCardHeader.SaveButton')
    );

    expect(mockPutReq).toHaveBeenCalled();
  });
});
