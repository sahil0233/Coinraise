
import { createCampaign,abt, dashboard, logout, payment, profile, withdraw,logo } from '../assets';
export const navlinks = [
  {
    name: 'Home',
    link: '/',
    imgUrl:dashboard,
  },
  {
    name: 'Create a Campaign',
    link: '/create-campaign',
    imgUrl: createCampaign,
  },
  {
    name: 'Contribute',
    link: '/contribute',
    imgUrl: logo,
    disabled: true,
  },
  {
    name: 'AboutUs',
    link: '/AboutUs',
    imgUrl: abt,
  },
  {
    name: 'Terms&Conditions',
    link: '/terms&conditions',
    imgUrl: payment,
  },
  {
    name: 'My Campaigns',
    link: '/mycampaigns',
    imgUrl: profile,
  },
];
