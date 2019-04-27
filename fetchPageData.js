const data = {
  layout: "2x2",
  slots: [
    {
      name: "A",
      components: [
        {
          id: 1,
          name: "RedBanner"
        }
      ]
    },
    {
      name: "B",
      components: [
        {
          id: 2,
          name: "GreenBanner"
        }
      ]
    }
  ]
};

export default () => new Promise(resolve => setTimeout(resolve(data), 1000));
