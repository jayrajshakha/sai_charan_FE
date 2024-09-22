const base_url = process.env.NEXT_PUBLIC_BASE_API_URL;

const UseAddEntry = async (token, data, id) => {
  const fetchOptions = {
    method: "POST",
    headers: {
      Authorization: token,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  try {
    const response = await fetch(
      `${base_url}/admin/newEntry/${id}`,
      fetchOptions
    );

    if (!response.ok) {
      return response.statusText;
    } else {
      return response.json();
    }
  } catch (error) {
    return error;
  }
};

export default UseAddEntry;
