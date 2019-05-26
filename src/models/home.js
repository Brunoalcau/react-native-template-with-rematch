import Immutable from 'seamless-immutable';
// import { Location, Permissions } from 'expo';

const initialState = Immutable({
  description: 'template react native - rematch'
});

const home = {
  name: 'home',
  state: initialState,
  reducers: {
    foo() {}
  }
};

export default home;
