
const mixin = {
  async fetch(url, method = "GET", body = null) {
    const headers = new Headers({
      "Content-Type": "application/json",
    });

    const options = {
      method,
      headers,
    };

    if (body) {
      options.body = JSON.stringify(body);
    }

    try {
      const response = await fetch(import.meta.env.VITE_SERVER+url, options);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}, \n${response}`);
      }
      // console.log(response);
      return await response.json();
    } catch (error) {
      console.error("Fetch error: ", error);
      throw error;
    }
  }
};

export default mixin;
