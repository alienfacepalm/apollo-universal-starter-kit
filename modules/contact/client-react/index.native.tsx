import React from 'react';
import { createStackNavigator, NavigationScreenConfigProps } from 'react-navigation';

import { translate } from '@module/i18n-client-react';
import { HeaderTitle, IconButton } from '../../../packages/client/src/modules/common/components/native';
import Contact from './containers/Contact';
import resources from './locales';

import ClientModule from '@module/module-client-react-native';

const HeaderTitleWithI18n = translate('contact')(HeaderTitle);

export default new ClientModule({
  drawerItem: [
    {
      Contact: {
        screen: createStackNavigator({
          Contact: {
            screen: Contact,
            navigationOptions: ({ navigation }: NavigationScreenConfigProps) => ({
              headerTitle: <HeaderTitleWithI18n i18nKey="title" style="subTitle" />,
              headerLeft: (
                <IconButton iconName="menu" iconSize={32} iconColor="#0275d8" onPress={() => navigation.openDrawer()} />
              ),
              headerStyle: { backgroundColor: '#fff' }
            })
          }
        }),
        navigationOptions: {
          drawerLabel: <HeaderTitleWithI18n />
        }
      }
    }
  ],
  localization: [{ ns: 'contact', resources }]
});
