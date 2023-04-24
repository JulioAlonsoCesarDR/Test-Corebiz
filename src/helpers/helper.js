export  const formatMoney = (value) => {
    const format = value?.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
    return format;
  };

  