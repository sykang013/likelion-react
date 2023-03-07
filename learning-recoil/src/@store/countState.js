//아톰을 컴포넌트가 아닌 여기서 관리하려고.
import { atom } from 'recoil';

export const countState = atom({
  key: 'countState',
  default: 0,
});