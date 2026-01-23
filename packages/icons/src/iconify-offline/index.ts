import { createIconifyOfflineIcon } from '@vben-core/icons';

import githubOutlined from '@iconify/icons-ant-design/github-outlined';
import userOutlined from '@iconify/icons-ant-design/user-outlined';
import defaultFileIcon from '@iconify/icons-bx/file';
import sqlIcon from '@iconify/icons-carbon/sql';
import linuxIcon from '@iconify/icons-devicon/linux';
import windowsIcon from '@iconify/icons-devicon/windows8';
import androidIcon from '@iconify/icons-flat-color-icons/android-os';
import folderIcon from '@iconify/icons-flat-color-icons/folder';
import defaultOsIcon from '@iconify/icons-ic/outline-computer';
import vueIcon from '@iconify/icons-logos/vue';
import iphoneIcon from '@iconify/icons-majesticons/iphone-x-apps-line';
import menuIcon from '@iconify/icons-material-symbols/menu';
import okButtonIcon from '@iconify/icons-mdi/button-pointer';
import dingdingFill from '@iconify/icons-ri/dingding-fill';
import giteeIcon from '@iconify/icons-simple-icons/gitee';
import javaIcon from '@iconify/icons-skill-icons/java-light';
import tsIcon from '@iconify/icons-skill-icons/typescript';
import xmlIcon from '@iconify/icons-tabler/file-type-xml';
import osxIcon from '@iconify/icons-wpf/macos';

import './menu-icons';

// 用户 下拉菜单
export const GitHubOutlined = createIconifyOfflineIcon(
  'ant-design:github-outlined',
  githubOutlined,
);

export const UserOutlined = createIconifyOfflineIcon(
  'ant-design:user-outlined',
  userOutlined,
);

// 第三方登录相关图标
export const DingdingIcon = createIconifyOfflineIcon(
  'ri:dingding-fill',
  dingdingFill,
);
export const GiteeIcon = createIconifyOfflineIcon(
  'simple-icons:gitee',
  giteeIcon,
);

// 系统相关图标
export const WindowsIcon = createIconifyOfflineIcon(
  'devicon:windows8',
  windowsIcon,
);
export const LinuxIcon = createIconifyOfflineIcon('devicon:linux', linuxIcon);
export const OSXIcon = createIconifyOfflineIcon('wpf:macos', osxIcon);
export const AndroidIcon = createIconifyOfflineIcon(
  'flat-color-icons:android-os',
  androidIcon,
);
export const IPhoneIcon = createIconifyOfflineIcon(
  'majesticons:iphone-x-apps-line',
  iphoneIcon,
);
// 上面图标没找到 默认图标
export const DefaultOsIcon = createIconifyOfflineIcon(
  'ic:outline-computer',
  defaultOsIcon,
);

// 菜单类型 目录/按钮/菜单
export const FolderIcon = createIconifyOfflineIcon(
  'flat-color-icons:folder',
  folderIcon,
);
export const OkButtonIcon = createIconifyOfflineIcon(
  'mdi:button-pointer',
  okButtonIcon,
);
export const MenuIcon = createIconifyOfflineIcon(
  'material-symbols:menu',
  menuIcon,
);

export const JavaIcon = createIconifyOfflineIcon(
  'skill-icons:java-light',
  javaIcon,
);
export const XmlIcon = createIconifyOfflineIcon(
  'tabler:file-type-xml',
  xmlIcon,
);
export const SqlIcon = createIconifyOfflineIcon('carbon:sql', sqlIcon);
export const TsIcon = createIconifyOfflineIcon(
  'skill-icons:typescript',
  tsIcon,
);
export const VueIcon = createIconifyOfflineIcon('logos:vue', vueIcon);
export const DefaultFileIcon = createIconifyOfflineIcon(
  'flat-color-icons:folder',
  defaultFileIcon,
);
