const modalStyles = {
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.7)'
  },
  content: {
    position: 'relative',
    padding: '1rem',
    width: '35rem',
    border: '1px solid #707070',
    borderRadius: '5px',
    backgroundColor: '#fff',
    overflow: 'hidden',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
};

const initialData = {
  id: 0,
  name: 'Мой компьютер',
  childrens: [
    {
      id: 1,
      name: 'disc C:',
      childrens: [
        {
          id:11,
          name: 'фоточки',
          childrens: [],
        },
        {
          id:12,
          name: 'документики',
          childrens: [],
        },
        {
          id:13,
          name: 'прочее',
          childrens: [],
        },
      ],
    },
    {
      id: 2,
      name: 'disc D:',
      childrens: [
        {
          id:21,
          name: 'Distributives',
          childrens: [],
        },
        {
          id:22,
          name: 'Program Files',
          childrens: [
            {
              id:221,
              name: 'Adobe',
              childrens: [
                {
                  id:2211,
                  name: 'adobe.exe',
                  childrens: [],
                },
                {
                  id:2212,
                  name: 'adobe_x64.exe',
                  childrens: [],
                },
              ],
            },
            {
              id:222,
              name: 'system.ini',
              childrens: [],
            },
            {
              id:223,
              name: 'swapfile.sys',
              childrens: [],
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
          childrens: [],
        },
        {
          id:32,
          name: 'system.ini',
          childrens: [],
        },
        {
          id:33,
          name: 'swapfile.sys',
          childrens: [],
        },
      ],
    },
  ],
};


export { modalStyles, initialData };