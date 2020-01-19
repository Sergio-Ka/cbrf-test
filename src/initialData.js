export const initialData = {
  id: 0,
  childrens: [
    {
      id: 1,
      name: 'disc C:',
      childrens: [
        {
          id:11,
          name: 'фоточки',
        },
        {
          id:12,
          name: 'документики',
        },
        {
          id:13,
          name: 'прочее',
        },
      ],
    },
    {
      id: 2,
      name: 'disc D:',
      childrens: [
        {
          id:11,
          name: 'Distributives',
        },
        {
          id:12,
          name: 'Program Files',
          childrens: [
            {
              id:121,
              name: 'Adobe',
              childrens: [
                {
                  id:1211,
                  name: 'adobe.exe',
                },
                {
                  id:1212,
                  name: 'adobe_x64.exe',
                },
              ],
            },
            {
              id:122,
              name: 'system.ini',
            },
            {
              id:123,
              name: 'swapfile.sys',
            },
          ],
        },
      ],
    },
    {
      id: 3,
      name: 'disc E:',
      childrens: [
        {
          id:31,
          name: 'pagefile.sys',
        },
        {
          id:32,
          name: 'system.ini',
        },
        {
          id:33,
          name: 'swapfile.sys',
        },
      ],
    },
  ],
};
