const sendRequest = async ({url, method, data = {}}: {url: string, method?: string, data?: Object}) => {
  let res = await fetch(url, {
    method: method || 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  });
  let ret = undefined;

  if (!res.ok) {
    throw new Error('http error.');
  }

  let contentType = res.headers.get('content-type');
  if (contentType && contentType.includes('application/json')) {
    ret = await res.json();
  } else {
    ret = await res.text();
  }
  console.log(ret)
}

export { sendRequest };