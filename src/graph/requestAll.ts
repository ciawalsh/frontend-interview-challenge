import {domain} from './config';

const requestAll = async () => {
  const response = await fetch(`${domain}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    mode: 'cors',
    body: JSON.stringify({
      query: `
      {
        devices {
          type,
          id,
          label
        }
        plants {
          name,
          id,
        }
      }
    `,
    }),
  });
  const all = await response.json();
  return all;
};

export default requestAll;
