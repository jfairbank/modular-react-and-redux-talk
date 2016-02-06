import { Children } from 'react';

export const contentMap = Object.freeze({
  NameTagClassApp: [
    ['NameTag', require('!!raw!../subapps/NameTagClass/NameTag.js')],
  ],

  NameTagFunctionApp: [
    ['NameTag', require('!!raw!../subapps/NameTagFunction/NameTag.js')],
    ['NameTagFunctionApp', require('!!raw!../subapps/NameTagFunction/index.js')],
  ],
});

export default function getComponentSource(children) {
  const child = Children.only(children);
  return contentMap[child.type.name];
}
