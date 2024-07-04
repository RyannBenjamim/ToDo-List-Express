const formatDate = (data) => {
  const day = data.getDate().toString().padStart(2, "0");
  const month = (data.getMonth() + 1).toString().padStart(2, "0");
  const year = data.getFullYear();
  const hours = data.getHours().toString().padStart(2, "0");
  const minutes = data.getMinutes().toString().padStart(2, "0");

  return `${day}/${month}/${year} as ${hours}:${minutes}`;
};

module.exports = formatDate;
