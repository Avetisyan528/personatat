import CrisisAlertIcon from '@mui/icons-material/CrisisAlert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import LanguageIcon from '@mui/icons-material/Language';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

type MuiIcon = OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
  muiName: string;
};

export const IconMap: Record<string, MuiIcon> = {
    crisisAlert: CrisisAlertIcon, 
    favorite: FavoriteIcon,       
    checkCircle: CheckCircleIcon, 

    whatshot: WhatshotIcon,       
    language: LanguageIcon,       
    accountBalance: AccountBalanceIcon, 

};