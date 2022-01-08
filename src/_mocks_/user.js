import Chance from 'chance';
import { sample } from 'lodash';
// utils
import { mockImgAvatar } from '../utils/mockImages';

// ----------------------------------------------------------------------
const chance = new Chance();

const users = [...Array(24)].map((_, index) => ({
  id: chance.guid(),
  avatarUrl: mockImgAvatar(index + 1),
  name: chance.name(),
  company: chance.company(),
  isVerified: chance.bool(),
  status: sample(['active', 'banned']),
  role: sample([
    'Leader',
    'Hr Manager',
    'UI Designer',
    'UX Designer',
    'UI/UX Designer',
    'Project Manager',
    'Backend Developer',
    'Full Stack Designer',
    'Front End Developer',
    'Full Stack Developer'
  ])
}));

export default users;
