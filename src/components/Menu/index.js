import {IoHome, IoPerson, IoHeart} from 'react-icons/io5';
import { MenuItem } from './MenuItem';
import { MenuWrapper } from './styles';

const MenuItems = [
    {
        icon: IoHome,
        label: 'Inicio',
        path: '/'
    },
    {
        icon: IoHeart,
        label: 'Favoritos',
        path: '/favorites'
    },
    {
        icon: IoPerson,
        label: 'Perfil',
        path: '/account'
    }
]

export const Menu = () => (
    <MenuWrapper>
        {
            MenuItems.map( item => <MenuItem {...item}/>)
        }
        
    </MenuWrapper>
)