export default {
  async getAll() {
    const response = await fetch("/api/ranges");
    const data = await response.json();
    return data;
  },
};
