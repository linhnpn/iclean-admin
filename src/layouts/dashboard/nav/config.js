// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Payment History',
    path: '/dashboard/user',
    icon: icon('ic_user'),
  },
  {
    title: 'User List',
    path: '/dashboard/user-list',
    icon: icon('ic_user'),
  },
];

export default navConfig;
